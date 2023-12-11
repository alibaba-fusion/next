import * as log from '../log';

describe('src/log.js', function () {
    describe('#deprecated, #warning', function () {
        const { error } = console;
        beforeEach(() => {
            console.error = function (str) {
                return str;
            };
        });

        afterEach(() => {
            console.error = error;
        });

        it('log should contain deprecated and warning method', function () {
            assert(typeof log.deprecated === 'function');
            assert(typeof log.warning === 'function');
        });

        it('deprecated should splice 3 arguments str', function () {
            const str = log.deprecated(
                'onBeforeClose',
                'beforeClose',
                'Dialog'
            ) as unknown as string;
            assert(
                str ===
                    'Warning: [ onBeforeClose ] is deprecated at [ Dialog ], use [ beforeClose ] instead of it.'
            );
        });

        it("warning should add 'Warning: ' before str", function () {
            const str = Date.now().toString(36);
            assert((log.warning(str) as unknown as string) === `Warning: ${str}`);
        });
    });
});
