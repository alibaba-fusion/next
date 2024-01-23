import { resolve } from 'path';
import * as sassTrue from 'sass-true';
import { pathToFileURL } from 'url';

export function runSassSpec(file: string) {
    sassTrue.runSass({ describe, it }, file, {
        url: new URL(pathToFileURL(file).href),
        importers: [
            {
                findFileUrl(url) {
                    if (url.startsWith('~')) {
                        const realPath = resolve(process.cwd(), 'node_modules', url.slice(1));
                        const res = new URL(pathToFileURL(realPath).href);
                        return res;
                    }
                    return null;
                },
            },
        ],
    });
}
