/// <reference types="cypress"/>

declare module 'enzyme-adapter-react-16';
declare module 'es6-promise-polyfill' {
    export = { Promise };
}
declare module 'conventional-changelog' {
    import { Readable } from 'stream';

    function conventionalChangelog(...args: any[]): Readable;
    export = conventionalChangelog;
}
declare module 'conventional-changelog-conventionalcommits';
declare module 'postcss-discard-comments';
declare module '@alifd/doc-parser';
declare module '@alifd/api-extractor';
declare module 'markdown-it';
declare module 'markdown-it-anchor';
declare module 'remark';

declare const mountNode: HTMLDivElement;

declare module 'react-lifecycles-compat' {
    import { ComponentType } from 'react';

    export function polyfill<C extends ComponentType>(Component: C): C;
}
