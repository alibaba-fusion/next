import assert from 'power-assert';
import { escapeForId, randomId } from '../../src/util/htmlId';

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('src/htmlId.js', function() {
    describe('escapeForId', () => {
        it('should not change any text if no spaces or quotes', () => {
            const text = 'text-Not_anIssue123/';
            assert(escapeForId(text) === text);
        });
        it('should replace spaces with dashes', () => {
            const text = 'I have spaces';
            assert(escapeForId(text) === 'I-have-spaces');
        });

        it('should replace quotes with dashes', () => {
            const text = 'I "have" \'quotes\'';
            assert(escapeForId(text) === 'I-have-quotes');
        });

        it('should do nothing for empty string', () => {
            const text = '';
            assert(escapeForId(text) === '');
        });

        it('should covert Number to String', () => {
            const number = 5;
            assert(escapeForId(number) === '5');
        });

        it('should covert Object to escaped string', () => {
            const obj = { first: 1 };
            assert(escapeForId(obj) === '{first:1}');
        });

        it('should covert Array to escaped string', () => {
            const array = ['1', '2'];
            assert(escapeForId(array) === '[1,2]');
        });
    });

    describe('randomId', () => {
        it('should start with the prefix text', () => {
            const text = 'prefix-text';
            assert(randomId(text).startsWith(text));
        });

        it('should start escape text with `escapeForId`', () => {
            const text = 'spaced text';
            assert(randomId(text).startsWith(escapeForId(text)));
        });

        it('should only be a number if no prefix text', () => {
            const rand = randomId();
            const randAsNum = Number(rand);
            const randBackToText = randAsNum.toString();
            assert(rand === randBackToText);
        });
    });
});
