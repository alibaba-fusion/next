/// <reference types="cypress"/>

declare module 'enzyme-adapter-react-16';
declare module 'es6-promise-polyfill' {
    export { Promise };
}
declare module 'conventional-changelog';
declare module 'conventional-changelog-alifd';

declare const mountNode: HTMLDivElement;
