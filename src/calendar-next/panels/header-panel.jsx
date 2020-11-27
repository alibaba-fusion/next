import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import { func, datejs, obj } from '../../util';

import { CALENDAR_MODE, DATE_PANEL_MODE, CALENDAR_SHAPE, PANEL_CHANGE_REASON } from '../constant';
import Radio from '../../radio';
import Select from '../../select';
import Button from '../../button';
import Icon from '../../icon';

const { bindCtx, witchCustomRender } = func;
const { DATE, WEEK, QUARTER, MONTH, YEAR, DECADE } = DATE_PANEL_MODE;

class HeaderPanel extends React.PureComponent {
    static propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        mode: PT.any,
        shape: PT.string,
        value: PT.any,
        panelMode: PT.any,
        panelValue: PT.any,
        validValue: PT.any,
        showTitle: PT.bool,
        showModeSwitch: PT.bool,
        onModeChange: PT.func,
        onPanelValueChange: PT.func,
        onPanelModeChange: PT.func,
        onPrev: PT.func,
        onNext: PT.func,
        onSuperPrev: PT.func,
        onSuperNext: PT.func,
        /**
         * 扩展操作区域渲染
         */
        renderHeaderExtra: PT.func,
        /**
         * 自定义头部渲染
         */
        headerRender: PT.func,
    };

    static defaultProps = {
        showTitle: false,
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}calendar-header`;

        bindCtx(this, [
            'generatePanelBtns',
            'renderMonthSelect',
            'renderModeSwitch',
            'handleSelect',
        ]);
    }

    // 生成panel面板的button
    generatePanelBtns({ unit, num = 1, isSuper = true }) {
        const { prefixCls } = this;
        const { onPanelValueChange } = this.props;
        const value = this.props.panelValue.clone();
        const size = 'small';

        let iconTypes = ['arrow-left', 'arrow-right'];
        let clickHandlers = ['onPrev', 'onNext'];

        if (isSuper) {
            iconTypes = ['arrow-double-left', 'arrow-double-right'];
            clickHandlers = ['onSuperPrev', 'onSuperNext'];
        }

        clickHandlers = clickHandlers.map(name =>
            obj.get(name, this.props, () => onPanelValueChange(value.subtract(num, unit)))
        );

        return [
            <Button
                text
                className={`${prefixCls}-btn`}
                onClick={clickHandlers[0]}
                size={size}
                key={`prev-btn-${unit}`}
            >
                <Icon type={iconTypes[0]} />
            </Button>,
            <Button
                text
                className={`${prefixCls}-btn`}
                onClick={clickHandlers[1]}
                size={size}
                key={`next-btn-${unit}`}
            >
                <Icon type={iconTypes[1]} />
            </Button>,
        ];
    }

    handleSelect(v, unit) {
        const value = this.props.panelValue.clone();
        value[unit](v);

        this.props.onPanelValueChange(value);
    }

    renderModeSwitch() {
        const { mode, locale, onModeChange } = this.props;

        return (
            <Radio.Group key="mode-switch" shape="button" value={mode} onChange={onModeChange}>
                <Radio value={CALENDAR_MODE.MONTH}>{locale.month}</Radio>
                <Radio value={CALENDAR_MODE.YEAR}>{locale.year}</Radio>
            </Radio.Group>
        );
    }

    renderMonthSelect() {
        const curMonth = this.props.panelValue.month();
        const dataSource = datejs.monthsShort().map((label, value) => {
            return {
                label,
                value,
            };
        });

        return (
            <Select
                key="month-select"
                defaultValue={curMonth}
                dataSource={dataSource}
                onChange={v => this.handleSelect(v, 'month')}
            />
        );
    }

    renderYearSelect() {
        const { validValue, panelValue } = this.props;
        const curYear = panelValue.year();

        let beginYear;
        let endYear;

        // TODO 有效区间
        if (validValue) {
            const [begin, end] = validValue;
            beginYear = begin.year();
            endYear = end.year();
        } else {
            for (let i = 0; i < 20; i++) {
                beginYear = curYear - 10;
                endYear = curYear + 10;
            }
        }
        const dataSource = [];
        for (let i = beginYear; i < endYear; i++) {
            dataSource.push({ label: i, value: i });
        }

        return (
            <Select
                key="year-select"
                defaultValue={curYear}
                dataSource={dataSource}
                onChange={v => this.handleSelect(v, 'year')}
            />
        );
    }

    renderTextField() {
        const { prefixCls } = this;
        const { panelValue, locale, panelMode, onPanelModeChange } = this.props;

        const monthBeforeYear = locale.monthBeforeYear || false;

        let nodes;
        const year = panelValue.year();
        const month = datejs.monthsShort(panelValue.month());

        const { DATE, WEEK, QUARTER, MONTH, YEAR, DECADE } = DATE_PANEL_MODE;

        const yearNode = (
            <Button
                text
                key="year-btn"
                tabIndex={-1}
                className={`${prefixCls}-btn`}
                onClick={() => onPanelModeChange(YEAR)}
            >
                {year}
            </Button>
        );

        switch (panelMode) {
            case DATE:
            case WEEK: {
                const monthNode = (
                    <Button
                        text
                        key="month-btn"
                        tabIndex={-1}
                        className={`${prefixCls}-btn`}
                        onClick={() => onPanelModeChange(MONTH)}
                    >
                        {month}
                    </Button>
                );
                nodes = monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
                break;
            }

            case MONTH:
            case QUARTER: {
                nodes = yearNode;
                break;
            }

            case YEAR: {
                const curYear = panelValue.year();
                const start = curYear - (curYear % 10);
                const end = start + 9;
                nodes = (
                    <Button
                        text
                        key="decade-btn"
                        tabIndex={-1}
                        className={`${prefixCls}-btn`}
                        onClick={() => onPanelModeChange(DECADE)}
                    >
                        {`${start}-${end}`}
                    </Button>
                );
                break;
            }
            case DECADE: {
                const curYear = panelValue.year();
                const start = curYear - (curYear % 100);
                const end = start + 99;

                nodes = `${start}-${end}`;
                break;
            }
        }

        return (
            <span key="header-text-field" className={`${prefixCls}-text-field`}>
                {nodes}
            </span>
        );
    }

    renderPanelHeader() {
        const { generatePanelBtns } = this;
        const { panelMode } = this.props;

        let nodes = [];

        const textFieldNode = this.renderTextField();

        switch (panelMode) {
            case DATE:
            case WEEK: {
                const [preMonthBtn, nextMonthBtn] = generatePanelBtns({
                    unit: 'month',
                    isSuper: false,
                });
                const [preYearBtn, nextYearBtn] = generatePanelBtns({
                    unit: 'year',
                });

                nodes = [preYearBtn, preMonthBtn, textFieldNode, nextMonthBtn, nextYearBtn];
                break;
            }
            case QUARTER:
            case MONTH: {
                const [preYearBtn, nextYearBtn] = generatePanelBtns({
                    unit: 'year',
                });

                nodes = [preYearBtn, textFieldNode, nextYearBtn];
                break;
            }
            case YEAR: {
                const [preDecadeBtn, nextDecadeBtn] = generatePanelBtns({
                    unit: 'year',
                    num: 10,
                });

                nodes = [preDecadeBtn, textFieldNode, nextDecadeBtn];
                break;
            }
            case DECADE: {
                const [preCenturyBtn, nextCenturyBtn] = generatePanelBtns({
                    unit: 'year',
                    num: 100,
                });

                nodes = [preCenturyBtn, textFieldNode, nextCenturyBtn];
                break;
            }
        }

        return nodes;
    }

    renderInner() {
        const { prefixCls } = this;
        const { shape, showTitle, value, mode, showModeSwitch } = this.props;

        const nodes = [];

        if (shape === CALENDAR_SHAPE.PANEL) {
            return this.renderPanelHeader();
        } else {
            if (showTitle) {
                nodes.push(
                    <div key="title" className={`${prefixCls}-title`}>
                        {witchCustomRender(
                            'headerTitleRender',
                            this.props,
                            { value },
                            value.format()
                        )}
                    </div>
                );
            }
            nodes.push(
                <div key="actions" className={`${prefixCls}-actions`}>
                    {this.renderYearSelect()}
                    {mode !== CALENDAR_MODE.YEAR ? this.renderMonthSelect() : null}
                    {showModeSwitch ? this.renderModeSwitch() : null}
                    {this.props.renderHeaderExtra &&
                        this.props.renderHeaderExtra({ ...this.props })}
                </div>
            );
        }

        return nodes;
    }

    render() {
        const { prefixCls } = this;

        return (
            <div className={prefixCls}>
                {witchCustomRender(
                    'headerRender',
                    this.props,
                    { ...this.props },
                    this.renderInner()
                )}
            </div>
        );
    }
}

export default React.memo(polyfill(HeaderPanel));
