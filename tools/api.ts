/*
------------------------------------------------------------
  author: 珵之
  create: 2024-01-16 11:25:38
  description: 根据 TSDoc 生成组件 api 文档
------------------------------------------------------------
*/

import glob from 'glob';
import { basename, dirname, resolve } from 'path';
import { readFileSync, writeFileSync } from 'fs-extra';
import { escapeRegExp, kebabCase } from 'lodash';
import ts from 'typescript';
import {
    TSDocParser,
    TSDocConfiguration,
    DocNode,
    DocExcerpt,
    ExcerptKind,
} from '@microsoft/tsdoc';
import { TSDocConfigFile } from '@microsoft/tsdoc-config';
import prettier from 'prettier';
import { TARGETS, registryTask, visitCode, CWD } from './utils';
import { parse } from './build/docs/utils';

interface TSDocPropertyParamMeta {
    name: string;
    title: string;
    enTitle?: string;
}
interface TSDocPropertyResultMeta {
    title: string;
    enTitle?: string;
}

interface TSDocPropertyMeta {
    name: string;
    title?: string;
    enTitle?: string;
    required?: boolean;
    type: string;
    version?: string;
    defaultValue?: string;
    params?: Array<TSDocPropertyParamMeta>;
    results?: TSDocPropertyResultMeta;
}

interface TSDocMeta {
    title: string;
    order?: string | number;
    apiMode?: boolean;
    summary?: string;
    summaryEn?: string;
    remarks?: string;
    remarksEn?: string;
    example?: string;
    exampleEn?: string;
    type?: string;
    properties?: Array<TSDocPropertyMeta>;
}

const tsdocConfigPath = resolve(CWD, 'tsdoc.json');
const tsdocConfiguration = new TSDocConfiguration();
const tsdocConfigFile = TSDocConfigFile.loadFile(tsdocConfigPath);
tsdocConfigFile.configureParser(tsdocConfiguration);
const tsdocParser = new TSDocParser(tsdocConfiguration);

function cleanText(text: string): string;
function cleanText(text?: null | undefined): undefined;
function cleanText(text?: string | null | undefined): string | undefined;
function cleanText(text?: string | null) {
    return text?.replace(/^[\n\s]+|[\n\s]+$/g, '');
}
function upperCaseFirst(text: string): string;
function upperCaseFirst(text?: null | undefined): undefined;
function upperCaseFirst(text?: string | null | undefined): string | undefined;
function upperCaseFirst(text?: string | null) {
    if (!text) {
        return undefined;
    }
    return text.slice(0, 1).toUpperCase() + text.slice(1);
}

/**
 * This is a simplistic solution until we implement proper DocNode rendering APIs.
 */
export class Formatter {
    public static renderDocNode(node?: DocNode): string {
        const loop = (docNode?: DocNode) => {
            let result: string = '';
            if (docNode) {
                if (docNode instanceof DocExcerpt && docNode.excerptKind !== ExcerptKind.BlockTag) {
                    result += docNode.content.toString();
                }
                for (const childNode of docNode.getChildNodes()) {
                    result += loop(childNode);
                }
            }
            return result;
        };
        return cleanText(loop(node));
    }

    public static renderDocNodes(docNodes: ReadonlyArray<DocNode>): string {
        let result: string = '';
        for (const docNode of docNodes) {
            result += Formatter.renderDocNode(docNode);
        }
        return result;
    }
}

function getMultiLineCommentText(code: string, start: number) {
    const comments = ts.getLeadingCommentRanges(code, start);
    if (comments?.length !== 1) {
        return null;
    }

    const multiLineComment = comments[0];
    if (!multiLineComment || multiLineComment.kind !== ts.SyntaxKind.MultiLineCommentTrivia) {
        return null;
    }
    return code.slice(multiLineComment.pos, multiLineComment.end);
}

function parseCombineLang(text: string): { zh: string; en?: string } {
    const REG = /\n/.test(text) ? /([\s\S]+)\n\s*-\s*\n([\s\S]+)/m : /(.+)\s*(?<!\\)-\s*(.+)/;
    const [, zh, en] = text.match(REG) || [text, text];
    return {
        zh: cleanText(zh),
        en: cleanText(en),
    };
}

function parseTsDoc(text?: string | null) {
    if (!text) {
        return null;
    }
    const context = tsdocParser.parseString(text);
    const { customBlocks, summarySection, remarksBlock, params, returnsBlock, modifierTagSet } =
        context.docComment;
    const tags: Array<{
        tag: string;
        content: string;
        paramName?: string;
        enContent?: string;
    }> = [];
    for (const modifier of modifierTagSet.nodes) {
        tags.push({
            tag: modifier.tagName,
            content: '',
        });
    }
    if (remarksBlock) {
        const remarks = Formatter.renderDocNode(remarksBlock);
        const { zh, en } = parseCombineLang(remarks);
        tags.push({
            tag: remarksBlock.blockTag.tagName,
            content: zh,
            enContent: upperCaseFirst(en),
        });
    }
    if (customBlocks) {
        customBlocks.forEach(block => {
            const tag = block.blockTag.tagName;
            const content = Formatter.renderDocNode(block);
            const { zh, en } = parseCombineLang(content);
            tags.push({
                tag,
                content: tag === '@en' ? upperCaseFirst(zh) : zh,
                enContent: upperCaseFirst(en),
            });
        });
    }
    if (params.count) {
        for (const param of params) {
            const fullContent = Formatter.renderDocNode(param).replace(
                new RegExp(`${escapeRegExp(param.parameterName)}\\s*-\\s*`),
                ''
            );
            const { zh, en } = parseCombineLang(fullContent);
            tags.push({
                tag: '@param',
                paramName: param.parameterName,
                content: zh,
                enContent: upperCaseFirst(en),
            });
        }
    }
    if (returnsBlock) {
        const fullContent = Formatter.renderDocNode(returnsBlock);
        const { zh, en } = parseCombineLang(fullContent);
        tags.push({
            tag: returnsBlock.blockTag.tagName,
            content: zh,
            enContent: upperCaseFirst(en),
        });
    }
    return {
        summary: Formatter.renderDocNode(summarySection),
        tags,
        getTag(name: string) {
            return tags.find(t => t.tag === name);
        },
    };
}

function createAPI(properties: TSDocMeta['properties'], isEn = false) {
    if (!properties?.length) {
        return undefined;
    }
    const columns: Array<{
        title: string;
        render: (property: TSDocPropertyMeta) => string | undefined;
    }> = [
        {
            title: isEn ? 'Param' : '参数',
            render(property) {
                return property.name;
            },
        },
        {
            title: isEn ? 'Description' : '说明',
            render(property) {
                const { name, title, enTitle, params, results } = property;
                const lines = [isEn ? enTitle : title].filter(Boolean);
                if (params?.length || results) {
                    const signatureLines = [];

                    if (params?.length) {
                        signatureLines.push(`**${isEn ? 'params' : '参数'}**:`);

                        signatureLines.push(
                            ...params.map(
                                ({ name, title, enTitle }) =>
                                    `_${name}_: ${isEn ? enTitle || name : title}`
                            )
                        );
                    }
                    if (results) {
                        const returnDesc = isEn ? results.enTitle : results.title;
                        if (returnDesc) {
                            signatureLines.push(`**${isEn ? 'return' : '返回值'}**:`, returnDesc);
                        }
                    }
                    if (signatureLines.length) {
                        signatureLines.unshift(`**${isEn ? 'signature' : '签名'}**:`);
                        lines.push(signatureLines.join('\n'));
                    }
                }
                if (!lines.length) {
                    return undefined;
                }
                return lines.join('\n\n');
            },
        },
        {
            title: isEn ? 'Type' : '类型',
            render(property) {
                return property.type?.replace(/</g, '\\<');
            },
        },
        {
            title: isEn ? 'Default Value' : '默认值',
            render(property) {
                return property.defaultValue;
            },
        },
        {
            title: isEn ? 'Required' : '是否必填',
            render(property) {
                return property.required ? (isEn ? 'yes' : '是') : '';
            },
        },
    ];
    if (properties.some(t => t.version)) {
        columns.push({
            title: isEn ? 'Supported Version' : '支持版本',
            render(property) {
                return property.version;
            },
        });
    }
    return cleanText(`
| ${columns.map(t => t.title).join(' | ')} |
| ${columns.map(() => '-').join(' | ')} |
${properties
    .map(property => {
        return `| ${columns
            .map(t => t.render(property) ?? '-')
            .map(t => cleanText(t.replace(/\|/g, '\\|').replace(/\n/g, '<br/>')))
            .join(' | ')} |`;
    })
    .join('\n')}
`);
}

async function formatMarkdownCode(filePath: string, code: string) {
    const options = await prettier.resolveConfig(filePath);
    return await prettier.format(code, {
        ...options,
        parser: 'markdown',
    });
}

export function registryApiGenerator(file = __filename) {
    return registryTask(file, 'Generate API', async () => {
        const typeFiles = TARGETS.reduce((pre, dir) => {
            const files = glob.sync('**/types.ts', { cwd: dir, absolute: true });
            pre.push(...files.filter(t => /components\/[^/]+\/types\.ts$/.test(t)));
            return pre;
        }, [] as string[]);
        for (const typeFile of typeFiles) {
            const dir = dirname(typeFile);
            const componentDirName = basename(dir);
            const docFiles = glob.sync('*.md', { cwd: resolve(dir, '__docs__'), absolute: true });
            if (!docFiles.length) {
                continue;
            }
            const code = readFileSync(typeFile, 'utf-8');
            const tsDocMetas: Array<TSDocMeta> = [];
            visitCode(code, node => {
                if (
                    node.kind !== ts.SyntaxKind.TypeAliasDeclaration &&
                    node.kind !== ts.SyntaxKind.InterfaceDeclaration
                ) {
                    return node;
                }
                const typedNode = node as ts.InterfaceDeclaration | ts.TypeAliasDeclaration;
                const typeName = typedNode.name.getFullText();

                const tsDocText = getMultiLineCommentText(code, node.getFullStart());
                if (!tsDocText) {
                    return node;
                }
                const apiDoc = parseTsDoc(tsDocText)!;

                const apiTag = apiDoc.getTag('@api');
                if (!apiTag) {
                    return node;
                }

                if (typedNode.kind === ts.SyntaxKind.TypeAliasDeclaration) {
                    const meta: TSDocMeta = {
                        title: apiTag.content || typeName.replace(/Props$/, ''),
                        order: apiDoc.getTag('@order')?.content,
                        remarks: apiDoc.getTag('@remarks')?.content,
                        remarksEn: apiDoc.getTag('@remarks')?.enContent,
                        summary: apiDoc.summary,
                        summaryEn: apiDoc.getTag('@en')?.content,
                        example: apiDoc.getTag('@example')?.content,
                        exampleEn: apiDoc.getTag('@example')?.enContent,
                        type: typedNode.getText(),
                    };
                    tsDocMetas.push(meta);
                } else {
                    const apiTitle = apiTag.content || typeName.replace(/Props$/, '');
                    const indexApi = componentDirName.replace(/\d+/g, '') === kebabCase(apiTitle);
                    const meta: TSDocMeta = {
                        title: apiTitle,
                        order: indexApi ? -Infinity : apiDoc.getTag('@order')?.content,
                        remarks: apiDoc.getTag('@remarks')?.content,
                        remarksEn: apiDoc.getTag('@remarks')?.enContent,
                        summary: apiDoc.summary,
                        summaryEn: apiDoc.getTag('@en')?.content,
                        apiMode: true,
                        properties: typedNode.members
                            .map<TSDocPropertyMeta | null>(member => {
                                const memberDoc = parseTsDoc(
                                    getMultiLineCommentText(code, member.getFullStart())
                                );
                                if (
                                    !ts.isMethodSignature(member) &&
                                    !ts.isPropertySignature(member)
                                ) {
                                    return null;
                                }
                                const required = !member.questionToken;
                                if (!memberDoc) {
                                    if (ts.isMethodSignature(member)) {
                                        return {
                                            name: member.name.getText(),
                                            type: member.getText(),
                                            required,
                                        };
                                    } else {
                                        return {
                                            name: member.name.getText(),
                                            type: member.type?.getText() || 'unknown',
                                            required,
                                        };
                                    }
                                } else {
                                    if (memberDoc.getTag('@skip')) {
                                        return null;
                                    }
                                    const typeText = ts.isMethodSignature(member)
                                        ? member.getText()
                                        : member.type?.getText() || 'unknown';
                                    const returnTag = memberDoc.getTag('@returns');
                                    return {
                                        name: member.name.getText(),
                                        title: memberDoc.summary,
                                        enTitle: memberDoc.getTag('@en')?.content,
                                        required,
                                        version: memberDoc.getTag('@version')?.content,
                                        type: typeText,
                                        defaultValue: memberDoc.getTag('@defaultValue')?.content,
                                        params: memberDoc.tags
                                            .filter(t => t.tag === '@param')
                                            .map(({ paramName, content, enContent }) => {
                                                return {
                                                    name: paramName!,
                                                    title: content,
                                                    enTitle: enContent,
                                                };
                                            }),
                                        results: returnTag
                                            ? {
                                                  title: returnTag.content,
                                                  enTitle: returnTag.enContent,
                                              }
                                            : undefined,
                                    };
                                }
                            })
                            .filter(Boolean) as TSDocPropertyMeta[],
                    };

                    tsDocMetas.push(meta);
                }
                return node;
            });
            if (!tsDocMetas.length) {
                continue;
            }
            tsDocMetas.sort((a, b) => {
                // 都有 order 的情况，值越小越靠前
                if (a.order && b.order) {
                    if (a.order === b.order) {
                        return 0;
                    }
                    return Number(a.order) > Number(b.order) ? 1 : -1;
                }
                // 有 order 的比无 order 的靠前
                if (a.order || b.order) {
                    return b.order ? 1 : -1;
                }
                // 未设置 order 情况，apiMode 类型的靠前展示
                const aOrder = a.apiMode ? 0 : Infinity;
                const bOrder = b.apiMode ? 0 : Infinity;
                if (aOrder === bOrder) {
                    return 0;
                }
                return aOrder > bOrder ? 1 : -1;
            });
            for (const docFilePath of docFiles) {
                const docText = readFileSync(docFilePath, 'utf-8');
                const isEn = docFilePath.includes('en-us.md');
                const lines = docText.split('\n');
                const parsed = parse(docText);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const children = parsed.children as any[];
                const apiNode = children.find(child => {
                    const line = child.position.start.line - 1;
                    const text = lines[line];
                    return child.type === 'heading' && /^#+\s*API/.test(text);
                });
                if (!apiNode) {
                    continue;
                }
                const nextNode = children.find(child => {
                    if (child.position.start.line <= apiNode.position.start.line) {
                        return false;
                    }
                    if (child.type === 'heading' && child.depth === apiNode.depth) {
                        return true;
                    }
                    if (
                        child.type === 'html' &&
                        child.value &&
                        child.value.includes('api-extra-start')
                    ) {
                        return true;
                    }
                    return false;
                });
                const apiLevel = apiNode.depth as number;
                const spliceStart = apiNode.position.end.line + 1;
                const deleteCount = nextNode
                    ? nextNode.position.start.line - 1 - spliceStart
                    : lines.length - spliceStart;
                lines.splice(
                    spliceStart,
                    deleteCount,
                    tsDocMetas
                        .map(
                            ({
                                title,
                                type,
                                properties,
                                apiMode,
                                summary,
                                summaryEn,
                                example,
                                exampleEn,
                                remarks,
                                remarksEn,
                            }) => {
                                const head = `${new Array(apiLevel + 1)
                                    .fill('#')
                                    .join('')} ${title}`;
                                const summaryText = isEn ? summaryEn : summary;
                                const exampleText = isEn ? exampleEn : example;
                                const remarksText = isEn ? remarksEn : remarks;
                                const descriptions = apiMode
                                    ? [summaryText || remarksText]
                                    : [
                                          summaryText,
                                          remarksText &&
                                              `${isEn ? 'Remarks:' : '备注：'}\n\n${remarksText}`,
                                          exampleText &&
                                              `${isEn ? 'Example:' : '示例：'}\n\n${exampleText}`,
                                      ];
                                const apiInfo = apiMode
                                    ? createAPI(properties, isEn)
                                    : `\`\`\`typescript\n${type}\n\`\`\``;
                                return [head, ...descriptions, apiInfo]
                                    .filter(Boolean)
                                    .join('\n\n');
                            }
                        )
                        .join('\n\n')
                );
                writeFileSync(
                    docFilePath,
                    await formatMarkdownCode(docFilePath, lines.join('\n')),
                    'utf-8'
                );
            }
        }
    });
}

registryApiGenerator();
