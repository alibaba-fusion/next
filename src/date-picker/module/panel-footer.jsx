import React from 'react';
import Button from '../../button';
import { func } from '../../util';
import { PANEL } from '../util';

class PanelFooter extends React.PureComponent {

    static defaultProps = {
        // onPanelChange: func.noop,
        onOk: func.noop,
    }

    changePanel = () => {
        const targetPanel = ({
            [PANEL.DATE]: PANEL.TIME,
            [PANEL.TIME]: PANEL.DATE,
        })[this.props.panel];
        this.props.onPanelChange(targetPanel);
    }

    render() {
        const { prefix, locale, panel, value, onPanelChange, onOk } = this.props;
        const panelBtnLabel = ({
            [PANEL.DATE]: locale.selectTime,
            [PANEL.TIME]: locale.selectDate,
        })[panel];

        const sharedBtnProps = {
            size: 'small',
            type: 'primary',
            disabled: !value,
        };

        return (<div className={`${prefix}date-picker-panel-footer`}>
            {
                onPanelChange ?
                    <Button {...sharedBtnProps} text onClick={this.changePanel}>{panelBtnLabel}</Button> : null
            }
            <Button {...sharedBtnProps} onClick={onOk}>{locale.ok}</Button>
        </div>);
    }
}

export default PanelFooter;
