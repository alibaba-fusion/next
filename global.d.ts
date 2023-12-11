/// <reference types="cypress"/>

declare module 'enzyme-adapter-react-16';
declare module 'es6-promise-polyfill' {
    export { Promise };
}

declare const mountNode: HTMLDivElement;
