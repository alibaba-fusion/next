import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import { func, datejs } from '../../util';
import { CALENDAR_MODE } from '../constant';

import ConfigProvider from '../../config-provider';
import Radio from '../../radio';
import Select from '../../select';
import Button from '../../button';
import Icon from '../../icon';

const { bindCtx, witchCustomRender } = func;

class HeaderPanel extends React.Component {
    static propTypes = {
        ...ConfigProvider.propTypes,
        shape: PT.any,
        value: PT.any,
        visibleValue: PT.any,
        headerRender: PT.func,
        mode: PT.any,
        validValue: PT.any,
        monthBeforeYear: PT.any, // 加到local配置中
        showTitle: PT.bool,
    };

    static defaultProps = {
        shape: 'fullscreen',
        showTitle: true,
        // validValue: [datejs('2020', 'YYYY'), datejs('2030', 'YYYY')],
    };

    constructor(props) {
        super(props);

        this.prefixCls = `calendar-header`;

        bindCtx(this, [
            'onModeChange',
            'renderModeSwitch',
            'handleSelect',
            'onSelect',
            'generatePanelBtns',
        ]);
    }

    // ----->  event

    onModeChange(v) {
        func.call(this.props, 'onModeChange', [v]);
    }

    onSelect(v) {
        func.call(this.props, 'onSelect', [v]);
    }

    handleSelect(v, unit) {
        const value = this.props.visibleValue.clone();

        value[unit](v);

        this.onSelect(value);
    }
    // 生成panel面板的button
    generatePanelBtns({ unit, num = 1, isDoubleIcon = true }) {
        const value = this.props.visibleValue.clone();
        const size = 'small';
        const iconTypes = isDoubleIcon
            ? ['arrow-double-left', 'arrow-double-right']
            : ['arrow-left', 'arrow-right'];

        return [
            <Button
                onClick={() => this.onSelect(value.subtract(num, unit))}
                size={size}
                key={`prev-btn-${unit}`}
            >
                <Icon type={iconTypes[0]} />
            </Button>,
            <Button
                onClick={() => this.onSelect(value.add(num, unit))}
                size={size}
                key={`next-btn-${unit}`}
            >
                <Icon type={iconTypes[1]} />
            </Button>,
        ];
    }

    // ----->  render

    renderModeSwitch() {
        const { onModeChange } = this;

        return (
            <Radio.Group
                key="mode-switch"
                shape="button"
                value={this.props.mode}
                onChange={onModeChange}
            >
                <Radio value={CALENDAR_MODE.DATE}>月</Radio>
                <Radio value={CALENDAR_MODE.MONTH}>年</Radio>
            </Radio.Group>
        );
    }

    renderMonthSelect() {
        const curMonth = datejs(this.props.visibleValue).month();

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
        const { validValue, visibleValue } = this.props;

        const curYear = datejs(visibleValue).year();

        let beginYear;
        let endYear;

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
        const { visibleValue, monthBeforeYear, mode } = this.props;

        let nodes;
        const year = visibleValue.format('YYYY'); // TODO 切换到国际化
        const month = datejs.monthsShort(visibleValue.month()); // TODO 切换到国际化

        const { DATE, WEEK, MONTH, QUARTER, YEAR, YEAR_RANGE } = CALENDAR_MODE;

        const yearNode = (
            <Button
                text
                key="year"
                tabIndex={-1}
                className="year-btn"
                onClick={() => this.onModeChange(YEAR)}
            >
                {year}
            </Button>
        );

        switch (mode) {
            case DATE:
            case WEEK: {
                const monthNode = (
                    <Button
                        text
                        key="month"
                        tabIndex={-1}
                        className="month-btn"
                        onClick={() => this.onModeChange(MONTH)}
                    >
                        {month}
                    </Button>
                );
                nodes = monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
                break;
            }

            case QUARTER:
            case MONTH: {
                nodes = yearNode;
                break;
            }

            case YEAR: {
                const curYear = visibleValue.year();
                const start = curYear - (curYear % 10);
                const end = start + 9;
                nodes = (
                    <Button
                        text
                        key="year-range"
                        tabIndex={-1}
                        className="year-range-btn"
                        onClick={() => this.onModeChange(YEAR_RANGE)}
                    >
                        {`${start}-${end}`}
                    </Button>
                );
                break;
            }
            case YEAR_RANGE: {
                const curYear = visibleValue.year();
                const start = curYear - (curYear % 100);
                const end = start + 99;

                nodes = `${start}-${end}`;
                break;
            }
        }

        return (
            <div key="text-field" className={`${prefixCls}-text-field`}>
                {nodes}
            </div>
        );
    }

    renderPanelHeader() {
        const { generatePanelBtns } = this;
        const { mode } = this.props;
        const { DATE, WEEK, MONTH, QUARTER, YEAR, YEAR_RANGE } = CALENDAR_MODE;

        let nodes = [];

        const textFieldNode = this.renderTextField();

        switch (mode) {
            case DATE:
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
            case MONTH:
            case QUARTER: {
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
            case YEAR_RANGE: {
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
        const { shape, showTitle, value, mode } = this.props;

        const nodes = [];

        if (shape === 'panel') {
            return this.renderPanelHeader();
        } else {
            if (showTitle) {
                nodes.push(
                    <div key="title" className={`${prefixCls}-title`}>
                        {witchCustomRender(
                            'headerTitleRender',
                            this.props,
                            null,
                            value.format('l') // TODO: 需要传入格式
                        )}
                    </div>
                );
            }
            nodes.push(
                <div key="actions" className="calendar-header-actions">
                    {this.renderYearSelect()}
                    {mode === CALENDAR_MODE.DATE ? this.renderMonthSelect() : null}
                    {this.renderModeSwitch()}
                    {/* // 扩展操作区域 */}
                    {this.props.renderHeaderExtra && this.props.renderHeaderExtra()}
                </div>
            );
        }

        return nodes;
    }

    render() {
        const { onModeChange, handleSelect, prefixCls } = this;

        return (
            <div className={prefixCls}>
                {witchCustomRender(
                    'headerRender',
                    this.props,
                    { onModeChange, handleSelect },
                    this.renderInner()
                )}
            </div>
        );
    }
}

export default React.memo(polyfill(HeaderPanel));
