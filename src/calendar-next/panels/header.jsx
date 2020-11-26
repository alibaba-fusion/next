import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import { func, datejs } from '../../util';

import { CALENDAR_MODE, DATE_PANEL_MODE, CALENDAR_SHAPE } from '../constant';
import Radio from '../../radio';
import Select from '../../select';
import Button from '../../button';
import Icon from '../../icon';

const { bindCtx, witchCustomRender } = func;

class HeaderPanel extends React.PureComponent {
    static propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        mode: PT.any,
        shape: PT.string,
        value: PT.any,
        panelDate: PT.any,
        validValue: PT.any,
        showTitle: PT.bool,
        /**
         * 是否需要渲染模式切换
         */
        showModeSwitch: PT.bool,
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
        showModeSwitch: true,
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}calendar-header`;

        bindCtx(this, [
            'generatePanelBtns',
            'renderMonthSelect',
            'renderModeSwitch',
            'handleSelect',
            'onPanelChange',
            'onModeChange',
        ]);
    }

    // 生成panel面板的button
    generatePanelBtns({ unit, num = 1, isDoubleIcon = true }) {
        const { prefixCls } = this;
        const value = this.props.panelDate.clone();
        const size = 'small';
        const iconTypes = isDoubleIcon
            ? ['arrow-double-left', 'arrow-double-right']
            : ['arrow-left', 'arrow-right'];

        return [
            <Button
                text
                className={`${prefixCls}-btn`}
                onClick={() => this.onPanelChange(value.subtract(num, unit))}
                size={size}
                key={`prev-btn-${unit}`}
            >
                <Icon type={iconTypes[0]} />
            </Button>,
            <Button
                text
                className={`${prefixCls}-btn`}
                onClick={() => this.onPanelChange(value.add(num, unit))}
                size={size}
                key={`next-btn-${unit}`}
            >
                <Icon type={iconTypes[1]} />
            </Button>,
        ];
    }

    onModeChange(mode) {
        this.onPanelChange(this.props.panelDate, mode);
    }

    onPanelChange(value, mode) {
        func.call(this.props, 'onPanelChange', [value, mode || this.props.mode]);
    }

    handleSelect(v, unit) {
        const value = this.props.panelDate.clone();
        value[unit](v);
        this.onPanelChange(value, this.props.mode);
    }

    renderModeSwitch() {
        const { mode, locale } = this.props;

        return (
            <Radio.Group key="mode-switch" shape="button" value={mode} onChange={this.onModeChange}>
                <Radio value={CALENDAR_MODE.MONTH}>{locale.month}</Radio>
                <Radio value={CALENDAR_MODE.YEAR}>{locale.year}</Radio>
            </Radio.Group>
        );
    }

    renderMonthSelect() {
        const curMonth = this.props.panelDate.month();
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
        const { validValue, panelDate } = this.props;
        const curYear = panelDate.year();

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
        const { panelDate, locale, mode } = this.props;

        const monthBeforeYear = locale.monthBeforeYear || false;

        let nodes;
        const year = panelDate.year();
        const month = datejs.monthsShort(panelDate.month());

        const { WEEK, MONTH, QUARTER, YEAR, DECADE, CENTURY } = DATE_PANEL_MODE;

        const yearNode = (
            <Button
                text
                key="year-btn"
                tabIndex={-1}
                className={`${prefixCls}-btn`}
                onClick={() => this.onModeChange(DECADE)}
            >
                {year}
            </Button>
        );

        switch (mode) {
            case MONTH:
            case WEEK: {
                const monthNode = (
                    <Button
                        text
                        key="month-btn"
                        tabIndex={-1}
                        className={`${prefixCls}-btn`}
                        onClick={() => this.onModeChange(YEAR)}
                    >
                        {month}
                    </Button>
                );
                nodes = monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
                break;
            }

            case QUARTER:
            case YEAR: {
                nodes = yearNode;
                break;
            }

            case DECADE: {
                const curYear = panelDate.year();
                const start = curYear - (curYear % 10);
                const end = start + 9;
                nodes = (
                    <Button
                        text
                        key="decade-btn"
                        tabIndex={-1}
                        className={`${prefixCls}-btn`}
                        onClick={() => this.onModeChange(CENTURY)}
                    >
                        {`${start}-${end}`}
                    </Button>
                );
                break;
            }
            case CENTURY: {
                const curYear = panelDate.year();
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
        const { mode } = this.props;
        const { MONTH, WEEK, QUARTER, YEAR, DECADE, CENTURY } = DATE_PANEL_MODE;

        let nodes = [];

        const textFieldNode = this.renderTextField();

        switch (mode) {
            case MONTH:
            case WEEK: {
                const [preMonthBtn, nextMonthBtn] = generatePanelBtns({
                    unit: 'month',
                    isDoubleIcon: false,
                });
                const [preYearBtn, nextYearBtn] = generatePanelBtns({
                    unit: 'year',
                });

                nodes = [preYearBtn, preMonthBtn, textFieldNode, nextMonthBtn, nextYearBtn];
                break;
            }
            case QUARTER:
            case YEAR: {
                const [preYearBtn, nextYearBtn] = generatePanelBtns({
                    unit: 'year',
                });

                nodes = [preYearBtn, textFieldNode, nextYearBtn];
                break;
            }
            case DECADE: {
                const [preDecadeBtn, nextDecadeBtn] = generatePanelBtns({
                    unit: 'year',
                    num: 10,
                });

                nodes = [preDecadeBtn, textFieldNode, nextDecadeBtn];
                break;
            }
            case CENTURY: {
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
        const { prefixCls, onPanelChange } = this;
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
                    {mode === CALENDAR_MODE.MONTH ? this.renderMonthSelect() : null}
                    {showModeSwitch ? this.renderModeSwitch() : null}
                    {this.props.renderHeaderExtra &&
                        this.props.renderHeaderExtra({ onPanelChange, ...this.props })}
                </div>
            );
        }

        return nodes;
    }

    render() {
        const { onPanelChange, prefixCls } = this;

        return (
            <div className={prefixCls}>
                {witchCustomRender(
                    'headerRender',
                    this.props,
                    { onPanelChange, ...this.props },
                    this.renderInner()
                )}
            </div>
        );
    }
}

export default React.memo(polyfill(HeaderPanel));
