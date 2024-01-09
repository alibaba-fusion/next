/*
------------------------------------------------------------
  author: 珵之
  create: 2024-01-08 19:38:41
  description: 调试组件
  example: npm run start button
------------------------------------------------------------
*/

import react from '@vitejs/plugin-react';
import { relative, resolve } from 'path';
import { existsSync, readFileSync, readdirSync } from 'fs-extra';
import createDocParser from '@alifd/doc-parser';
import MagicString from 'magic-string';
import { kebabCase } from 'lodash';
import { ARGV, SRC_DIR_PATH, TARGETS, logger, parseImportDeclarations } from '../utils';
import { marked } from '../build/docs/utils';
import { parseDemoMd } from '../build/docs/generate-docs';

type Lang = 'zh' | 'en';

const DIR_NAME = relative(SRC_DIR_PATH, TARGETS[0]);
if (!DIR_NAME) {
    logger.warn('使用示例：', 'npm run start button');
    process.exit(1);
}
const isForce = Boolean(ARGV.force);

let lang: Lang = ARGV.en ? 'en' : 'zh';

// @ts-expect-error esm import vite
type VitePlugin = import('vite').Plugin;

const servePlugin = (dirName: string): VitePlugin => {
    const docParser = createDocParser({});

    function loadComponentDoc(name: string): { doc: string; files: string[] } {
        const docPath = resolve(
            SRC_DIR_PATH,
            name,
            '__docs__',
            lang === 'zh' ? 'index.md' : 'index.en-us.md'
        );
        if (!existsSync(docPath)) {
            throw new Error(`Not found component doc: ${name}-${lang}`);
        }
        const text = readFileSync(docPath, 'utf-8');
        const apiMdParsed = docParser.parse(text);
        const apiMdRendered = marked(apiMdParsed.body);
        return { doc: `<h1>${apiMdParsed.title}</h1>${apiMdRendered}`, files: [docPath] };
    }
    function loadDemoDoc(docPath: string) {
        const map = parseDemoMd(docPath);
        const meta = map.get(lang === 'zh' ? 'zh-CN' : 'en-US')!;
        const mdText = `${meta.title}\n- arg: 1\n\n---\n\n${meta.body}`;
        const apiMdParsed = docParser.parse(mdText);
        const apiMdRendered = marked(apiMdParsed.body);
        return `<h2>${apiMdParsed.title}</h2>${apiMdRendered}`;
    }

    function getDemoId(componentDirName: string, demoDirName: string) {
        return `${componentDirName}--${demoDirName}`;
    }

    function loadComponentDemos(
        name: string
    ): Array<{ id: string; docEntry?: string; cssEntry?: string; jsEntry?: string }> {
        const demoDir = resolve(SRC_DIR_PATH, name, '__docs__/demo');
        if (!existsSync(demoDir)) {
            return [];
        }
        return readdirSync(demoDir).map(demoName => {
            const id = getDemoId(name, demoName);
            const mdEntryPath = resolve(demoDir, demoName, 'index.md');
            const demoEntryPath = resolve(demoDir, demoName, 'index.tsx');
            const cssEntryPath = resolve(demoDir, demoName, 'index.css');
            return {
                id,
                docEntry: existsSync(mdEntryPath) ? mdEntryPath : undefined,
                cssEntry: existsSync(cssEntryPath) ? cssEntryPath : undefined,
                jsEntry: existsSync(demoEntryPath) ? demoEntryPath : undefined,
            };
        });
    }
    const DOC_REG = /^__doc/;
    const DEMOS_REG = /^__demos/;
    const DOC_VIRTUAL_REG = /^\0__doc/;
    const DEMOS_VIRTUAL_REG = /^\0__demos/;
    const DEMO_MD_REG = /__docs__\/demo\/[^/]+\/index\.md$/;
    const DEMO_TS_REG = /([^/]+)\/__docs__\/demo\/([^/]+)\/index\.tsx$/;
    return {
        name: 'next-serve',
        config() {
            return {
                optimizeDeps: {
                    entries: ['util/index.ts', 'config-provider/config.tsx'].map(n =>
                        resolve(SRC_DIR_PATH, n)
                    ),
                    include: ['moment/moment.js', 'classnames', 'react-lifecycles-compat'],
                },
                resolve: {
                    alias: [
                        {
                            find: /^moment$/,
                            replacement: 'moment/moment.js',
                        },
                    ],
                },
            };
        },
        transformIndexHtml(html) {
            return html.replace(/\$name/g, dirName);
        },
        resolveId(source) {
            if (DOC_REG.test(source) || DEMOS_REG.test(source)) {
                return `\0${source}`;
            }
        },
        load(id) {
            if (DOC_VIRTUAL_REG.test(id)) {
                const { doc, files } = loadComponentDoc(dirName);
                files.forEach(f => this.addWatchFile(f));
                return `export default ${JSON.stringify(doc)}`;
            }
            if (DEMO_MD_REG.test(id)) {
                const doc = loadDemoDoc(id);
                return `export default ${JSON.stringify(doc)}`;
            }
            if (DEMOS_VIRTUAL_REG.test(id)) {
                const demos = loadComponentDemos(dirName);
                return `
                  ${demos
                      .map(({ docEntry, cssEntry }, i) => {
                          return `import doc${i} from '${docEntry}';${
                              cssEntry ? `\nimport '${cssEntry}';` : ''
                          }`;
                      })
                      .join('\n')}
                  export default [
                    ${demos.map(({ id, jsEntry }, i) => {
                        return `{id: ${JSON.stringify(
                            id
                        )}, doc: doc${i}, render: () => import(${JSON.stringify(jsEntry)})}`;
                    })}
                  ]
                `;
            }
            return null;
        },
        transform(code, id) {
            if (DEMO_TS_REG.test(id)) {
                const [, name, demoName] = id.match(DEMO_TS_REG)!;
                const mountId = getDemoId(name, demoName);
                return `const mountNode = document.getElementById(${JSON.stringify(
                    mountId
                )});\n${code}`;
            }
            if (id.includes('tools/serve/demo.tsx')) {
                return code.replace(/['"](__doc|__demos)['"]/g, `'$1_${new Date().getTime()}'`);
            }
        },
    };
};

const importNextPlugin = (): VitePlugin => {
    return {
        name: 'next-import',
        enforce: 'pre',
        transform(code, id) {
            if (/\.[jt]sx?$/.test(id) && code.includes('@alifd/next')) {
                const ms = new MagicString(code);
                const imports = parseImportDeclarations(code);
                for (const {
                    source,
                    declaration,
                    defaultImport,
                    namespaceImport,
                    namedImports,
                } of imports) {
                    if (source !== '@alifd/next') {
                        continue;
                    }
                    if (namespaceImport || defaultImport) {
                        ms.overwrite(
                            declaration.getModuleSpecifier().getStart(),
                            declaration.getModuleSpecifier().getEnd(),
                            JSON.stringify(resolve(SRC_DIR_PATH, 'index.ts'))
                        );
                        continue;
                    }
                    const newImports: string[] = [];
                    if (namedImports) {
                        namedImports.forEach(({ name, alias }) => {
                            newImports.push(
                                `import ${alias || name} from '${resolve(
                                    SRC_DIR_PATH,
                                    kebabCase(name)
                                )}'`
                            );
                        });
                    }

                    ms.overwrite(
                        declaration.getStart(),
                        declaration.getEnd(),
                        newImports.join('\n')
                    );
                }
                return {
                    code: ms.toString(),
                    map: ms.generateMap(),
                };
            }
        },
    };
};

(async () => {
    const { createServer } = await import('vite');
    const server = await createServer({
        configFile: false,
        optimizeDeps: {
            force: isForce,
        },
        plugins: [
            react({ exclude: /tools/ }),
            servePlugin(DIR_NAME),
            importNextPlugin(),
            {
                name: 'next-apis',
                transformIndexHtml(html) {
                    return html.replace(/\$lang/g, JSON.stringify(lang));
                },
                configureServer(server) {
                    server.middlewares.use('/changelang', (req, res, next) => {
                        next();
                        const url = new URL(req.url!, `http://${req.headers.host}`);
                        lang = url.searchParams.get('lang') as Lang;
                        res.setHeader('Content-Type', 'application/json');
                        res.write(JSON.stringify({ success: true }));
                        res.end();
                        server.restart();
                    });
                },
            },
        ],
        server: {
            hmr: true,
            open: false,
        },
    });
    await server.listen();
    server.printUrls();
})();
