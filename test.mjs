import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs-extra';
// import {Octokit} from '@octokit/core';
// import { execSync, exec } from 'node:child_process';

export function camelcase(str, firstUpper = false) {
    const camel = (str) => {
        if (!/-/.test(str)) {
            return str || '';
        }
        return str.toLowerCase().replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase());
    };
    const res = camel(str);
    return firstUpper ? res.slice(0, 1).toUpperCase() + res.slice(1) : res;
}
const __dirname = fileURLToPath(new URL('./', import.meta.url));
const delay = (duration) => new Promise((r) => setTimeout(r, duration));

// const octokit = new Octokit({auth: process.env.GITHUB_RELEASE_TOKEN, request: {fetch}});

// const docsDir = path.resolve(__dirname, './docs')
// const docs = fs.readdirSync(docsDir).map(name => {
//   return {
//     name,
//     path: path.resolve(docsDir, name)
//   }
// }).filter(t => fs.statSync(t.path).isDirectory());

// docs.splice(0, docs.findIndex(t => t.name === 'dialog') + 1);
// console.log('[ docs ]', docs);

// for (const {name, path} of docs) {
//   const componentName = camelcase(name).replace(/^\w/, ($0) => $0.toUpperCase());
//   console.log('[ add ]', componentName);
//   const res = await octokit.request('POST /repos/alibaba-fusion/next/issues', {
//     title: `【Technical upgrade】${componentName}`,
//     body: '',
//     labels: [
//       'Technical Upgrade'
//     ]
//   });
//   const issueId = res.data.number;
//   console.log('[ issueId ]', issueId);
//   await delay(2000);

// }

// const res = execSync(`gh project item-list 2 --owner "alibaba-fusion" -L 100 --format json`, {encoding: 'utf-8'})
// console.log('[ res ]', JSON.parse(res));

// const resJson = JSON.parse(res);

// for (const {id, title, content} of resJson.items) {
//   console.log('[ item ]', title, content);
//   const componentName = title.match(/】([^\s]+)/)[1];
//   console.log('[ componentName ]', componentName);
//   exec(`gh project item-edit --id ${JSON.stringify(id)} --project-id "PVT_kwDOAmlA9s4AYtwh" --field-id "PVTSSF_lADOAmlA9s4AYtwhzgP5wKc" --single-select-option-id "d9a0a426"`, (error, out, err) => {
//     if (error || err) {
//       console.error(error || err);
//     }
//   })
// }

// const srcDir = path.resolve(__dirname, './src');
// const dirs = fs.readdirSync(srcDir).filter(name => fs.statSync(path.resolve(srcDir, name)).isDirectory());
// const destRootDir = path.resolve(__dirname, './components');

// for (const name of dirs) {
//     const componentName = camelcase(name, true);
//     const srcDir = path.resolve(__dirname, 'src', name);
//     const docDir = path.resolve(__dirname, 'docs', name);
//     const testDir = path.resolve(__dirname, 'test', name);
//     const typeDir = path.resolve(__dirname, 'types', name);
//     const destDir = path.resolve(destRootDir, name);
//     if (fs.existsSync(destDir)) {
//         continue;
//     }
//     await fs.ensureDir(destDir);
//     await fs.copy(srcDir, destDir);

//     if (fs.existsSync(docDir)) {
//         const docDestDir = path.resolve(destDir, '__docs__');
//         await fs.ensureDir(docDestDir);
//         await fs.copy(docDir, docDestDir);
//     }

//     if (fs.existsSync(testDir)) {
//         const testDestDir = path.resolve(destDir, '__tests__');
//         await fs.ensureDir(testDestDir);
//         await fs.copy(testDir, testDestDir);
//     }
//     if (fs.existsSync(typeDir)) {
//       const types = fs.readdirSync(typeDir);
//       if (types.length === 1) {
//         const destTypesFile = path.resolve(destDir, 'types.ts');
//         console.log('[ types ]', destTypesFile);
//         await fs.move(path.resolve(typeDir, types[0]), destTypesFile);
//       } else {
//         console.error('much types', name, types);
//       }
//     }

//     console.log('[ name done ]', name, componentName);
//     await fs.remove(srcDir);
//     await fs.remove(docDir);
//     await fs.remove(testDir);
//     await fs.remove(typeDir);
//     console.log();
// }

import glob from 'glob';

const files = glob.sync('**/*.{js,jsx}', {cwd: path.resolve(__dirname, 'components/config-provider'), absolute: true, });
console.log('[ files ]', files);
for (const file of files) {
    if (file.includes('__tests__')) {
        const text = fs.readFileSync(file, 'utf-8');
        const suffix = text.includes("'react'") ? '.tsx' : '.ts'
        await fs.move(file, file.replace(/\.js(x?)$/, suffix));
    } else {
        await fs.move(file, file.replace(/\.js(x?)$/, '.ts$1'));
    }
}