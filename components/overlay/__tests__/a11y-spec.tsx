import React from 'react';
import Overlay from '../index';

import { testReact } from '../../util/__tests__/a11y/validate';
import '../../progress/style';

const { Popup } = Overlay;

let portalContainer: HTMLElement;

describe('Overlay A11y', () => {
    it('should not have any violations', async function () {
        await testReact(
            <Overlay visible container={portalContainer}>
                <div>Hello World</div>
            </Overlay>
        );
    });

    it('should not have any violations for Popup', async function () {
        await testReact(
            <Popup
                visible={false}
                container={portalContainer}
                trigger={<button>Open</button>}
                triggerType="click"
                canCloseByTrigger={false}
            >
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
    });
});
