import React from 'react';
import Button from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Button A11y', () => {
    it('should not have any violations when default', async () => {
        await testReact(
            <div>
                <Button type="normal">Normal</Button> &nbsp;&nbsp;
                <Button type="normal" disabled>
                    Normal
                </Button>{' '}
                &nbsp;&nbsp;
                <Button type="primary">Prirmary</Button> &nbsp;&nbsp;
                <Button type="primary" disabled>
                    Prirmary
                </Button>{' '}
                &nbsp;&nbsp;
                <Button type="secondary">Secondary</Button> &nbsp;&nbsp;
                <Button type="secondary" disabled>
                    Secondary
                </Button>
            </div>
        );
    });

    it('should not have any violations when text buttons', async () => {
        await testReact(
            <div>
                <Button type="normal" text>
                    Normal
                </Button>{' '}
                &nbsp;&nbsp;
                <Button type="normal" text disabled>
                    Normal
                </Button>{' '}
                &nbsp;&nbsp;
                <Button type="primary" text>
                    Normal
                </Button>{' '}
                &nbsp;&nbsp;
                <Button type="primary" text disabled>
                    {' '}
                    Prirmary
                </Button>{' '}
                &nbsp;&nbsp;
                <Button type="secondary" text>
                    Normal
                </Button>{' '}
                &nbsp;&nbsp;
                <Button type="secondary" text disabled>
                    Secondary
                </Button>
            </div>
        );
    });

    it('should not have any violations when warning buttons', async () => {
        await testReact(
            <div>
                <Button type="normal" warning>
                    Normal
                </Button>{' '}
                &nbsp;&nbsp;
                <Button type="normal" warning disabled>
                    Prirmary
                </Button>{' '}
                &nbsp;&nbsp;
                <Button type="primary" warning>
                    Prirmary
                </Button>{' '}
                &nbsp;&nbsp;
                <Button type="primary" warning disabled>
                    Prirmary
                </Button>{' '}
                &nbsp;&nbsp;
            </div>
        );
    });

    it('should not have any violations when anchor tag', async () => {
        const props = {
            component: 'a' as const,
            href: 'http://www.alibaba.com',
            target: '_blank',
        };
        await testReact(<Button {...props}>alibaba</Button>);
    });

    it('should not have any violations when ghost', async () => {
        await testReact(
            <div>
                <Button ghost="light">Ghost light</Button> &nbsp;&nbsp;
                <Button ghost="light" disabled>
                    Ghost light
                </Button>{' '}
                &nbsp;&nbsp;
                <Button ghost="dark">Ghost dark</Button> &nbsp;&nbsp;
                <Button ghost="dark" disabled>
                    Ghost dark
                </Button>
            </div>
        );
    });

    it('should not have any violations when in a Button Group', async () => {
        await testReact(
            <Button.Group>
                <Button type="primary">OK</Button>
                <Button type="secondary">Cancel</Button>
            </Button.Group>
        );
    });

    it('should not have any violations when loading', async () => {
        await testReact(
            <Button type="secondary" loading>
                Loading
            </Button>
        );
    });

    it('should not have any violations when various sizes', async () => {
        await testReact(
            <div>
                <Button type="primary" size="large">
                    Large
                </Button>
                &nbsp;&nbsp;
                <Button type="primary">Medium</Button>&nbsp;&nbsp;
                <Button type="primary" size="small">
                    Small
                </Button>
                <br />
                <br />
                <Button.Group size="large">
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                </Button.Group>
            </div>
        );
    });
});
