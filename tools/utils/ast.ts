import { Project, ModuleKind, ModuleResolutionKind } from 'ts-morph';
import { ScriptTarget, JsxEmit, Node } from 'typescript';

export function visitCode(code: string, visitNode?: (node: Node) => Node) {
    const project = new Project({
        skipAddingFilesFromTsConfig: true,
        skipFileDependencyResolution: true,
        compilerOptions: {
            target: ScriptTarget.ESNext,
            module: ModuleKind.NodeNext,
            allowJs: true,
            lib: ['DOM', 'DOM.Iterable', 'ESNext'],
            jsx: JsxEmit.Preserve,
            resolveJsonModule: true,
            downlevelIteration: true,
            skipLibCheck: true,
            moduleResolution: ModuleResolutionKind.NodeNext,
        },
    });
    const sourceFile = project.createSourceFile('visit.tsx', code);
    sourceFile.transform(traversal => {
        const node = traversal.visitChildren();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return visitNode ? (visitNode(node as any) as any) : node;
    });
    return {
        sourceFile,
        code: sourceFile.getFullText(),
    };
}

export function parseImportDeclarations(code: string) {
    const { sourceFile } = visitCode(code);
    const imports = sourceFile.getImportDeclarations();
    return imports.map(node => {
        const source = node.getModuleSpecifier().getText().slice(1, -1);
        const namespaceImport = node.getNamespaceImport();
        const defaultImport = node.getDefaultImport();
        const namedImports = node.getNamedImports();
        return {
            declaration: node,
            source,
            namespaceImport: namespaceImport?.getText(),
            defaultImport: defaultImport?.getText(),
            namedImports: namedImports.length
                ? namedImports.map(spec => {
                      const name = spec.getName();
                      const alias = spec.getAliasNode()?.getText();
                      return {
                          name,
                          alias,
                      };
                  })
                : undefined,
        };
    });
}
