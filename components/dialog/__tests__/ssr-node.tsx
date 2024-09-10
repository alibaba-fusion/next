import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import { expect } from 'chai';
import Dialog from '../index';

describe('ssr-node', () => {
    it('should be ok', () => {
        const html = renderToStaticMarkup(<Dialog visible />);
        expect(html).to.equal('');
    });
    it('[v2] should be ok', () => {
        const html = renderToStaticMarkup(<Dialog v2 visible />);
        expect(html).to.equal('');
    });
});
