import React, { type ReactElement } from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PT from 'prop-types';
import type { Dayjs, ManipulateType } from 'dayjs';
import { func, datejs } from '../../util';

import { CALENDAR_MODE, DATE_PANEL_MODE, CALENDAR_SHAPE } from '../constant';
import Radio from '../../radio';
import Select from '../../select';
import Button from '../../button';
import Icon from '../../icon';
import type { HeaderPanelProps } from '../types';

const { renderNode } = func;
const { DATE, WEEK, QUARTER, MONTH, YEAR, DECADE } = DATE_PANEL_MODE;

class HeaderPanel extends React.PureComponent<HeaderPanelProps> {
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
        titleRender: PT.func,
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
    prefixCls: string;

    constructor(props: HeaderPanelProps) {
        super(props);
        this.prefixCls = `${props.prefix}calendar2-header`;
    }

    createPanelBtns = ({
        unit,
        num = 1,
        isSuper = true,
    }: {
        unit: ManipulateType;
        num?: number;
        isSuper?: boolean;
    }) => {
        const value = this.props.panelValue.clone();
        const { prefixCls } = this;
        const iconTypes = isSuper
            ? ['arrow-double-left', 'arrow-double-right']
            : ['arrow-left', 'arrow-right'];

        return [
            <Button
                text
                className={`${prefixCls}-btn  ${prefixCls}-left-btn`}
                onClick={() => this.handleClick(value, { num, unit, isSuper, isNext: false })}
                key={`prev-btn-${unit}`}
            >
                <Icon type={iconTypes[0]} />
            </Button>,
            <Button
                text
                className={`${prefixCls}-btn ${prefixCls}-right-btn`}
                onClick={() => this.handleClick(value, { num, unit, isSuper, isNext: true })}
                key={`next-btn-${unit}`}
            >
                <Icon type={iconTypes[1]} />
            </Button>,
        ];
    };

    handleClick(
        value: Dayjs,
        {
            unit,
            num,
            isSuper,
            isNext,
        }: { unit: ManipulateType; num: number; isSuper?: boolean; isNext?: boolean }
    ) {
        const { onPanelValueChange, onPrev, onSuperPrev, onNext, onSuperNext } = this.props;

        let handler;

        if (isSuper) {
            handler = isNext ? onSuperNext : onSuperPrev;
        } else {
            handler = isNext ? onNext : onPrev;
        }

        if (handler) {
            handler(value, { unit, num });
        } else {
            const m = isNext ? 'add' : 'subtract';
            onPanelValueChange(value[m](num, unit), `PANEL`);
        }
    }

    renderModeSwitch = () => {
        const { mode, locale, onModeChange } = this.props;

        return (
            <Radio.Group key="mode-switch" shape="button" value={mode} onChange={onModeChange}>
                <Radio value={CALENDAR_MODE.MONTH}>{locale.month}</Radio>
                <Radio value={CALENDAR_MODE.YEAR}>{locale.year}</Radio>
            </Radio.Group>
        );
    };

    renderMonthSelect = () => {
        const { prefixCls } = this;
        const { panelValue, onPanelValueChange } = this.props;

        const curMonth = panelValue.month();
        const dataSource = datejs.monthsShort().map((label, value) => {
            return {
                label,
                value,
            };
        });

        return (
            <Select
                className={`${prefixCls}-select-month`}
                popupClassName={`${prefixCls}-select-month-popup`}
                value={curMonth}
                dataSource={dataSource}
                onChange={v => onPanelValueChange(panelValue.month(v as number))}
            />
        );
    };

    renderYearSelect() {
        const { prefixCls } = this;
        const { validValue, panelValue, onPanelValueChange } = this.props;
        const curYear = panelValue.year();

        let beginYear: number;
        let endYear: number;

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
        for (let i = beginYear!; i < endYear!; i++) {
            dataSource.push({ label: i, value: i });
        }

        return (
            <Select
                key="year-select"
                className={`${prefixCls}-select-year`}
                popupClassName={`${prefixCls}-select-year-popup`}
                value={curYear}
                dataSource={dataSource}
                onChange={v => onPanelValueChange(panelValue.year(v as number))}
            />
        );
    }

    renderTextField() {
        const { prefixCls } = this;
        const { panelValue, locale, panelMode, onPanelModeChange } = this.props;

        const monthBeforeYear = locale.monthBeforeYear || false;
        const localeData = datejs.localeData();

        const year = panelValue.year() + (locale && locale.year === '年' ? '年' : '');
        const month = localeData.monthsShort()[panelValue.month()];
        const { DATE, WEEK, QUARTER, MONTH, YEAR, DECADE } = DATE_PANEL_MODE;

        let nodes;
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
                        {this.props.rtl ? `${end}-${start}` : `${start}-${end}`}
                    </Button>
                );
                break;
            }
            case DECADE: {
                const curYear = panelValue.year();
                const start = curYear - (curYear % 100);
                const end = start + 99;

                nodes = this.props.rtl ? `${end}-${start}` : `${start}-${end}`;
                break;
            }
        }

        return (
            <div key="header-text-field" className={`${prefixCls}-text-field`}>
                {nodes}
            </div>
        );
    }

    renderPanelHeader() {
        const { createPanelBtns } = this;
        const { panelMode } = this.props;

        let nodes: ReactElement[] = [];

        const textFieldNode = this.renderTextField();

        switch (panelMode) {
            case DATE:
            case WEEK: {
                const [preMonthBtn, nextMonthBtn] = createPanelBtns({
                    unit: 'month',
                    isSuper: false,
                });
                const [preYearBtn, nextYearBtn] = createPanelBtns({
                    unit: 'year',
                });

                nodes = [preYearBtn, preMonthBtn, textFieldNode, nextMonthBtn, nextYearBtn];
                break;
            }
            case QUARTER:
            case MONTH: {
                const [preYearBtn, nextYearBtn] = createPanelBtns({
                    unit: 'year',
                });

                nodes = [preYearBtn, textFieldNode, nextYearBtn];
                break;
            }
            case YEAR: {
                const [preDecadeBtn, nextDecadeBtn] = createPanelBtns({
                    unit: 'year',
                    num: 10,
                });

                nodes = [preDecadeBtn, textFieldNode, nextDecadeBtn];
                break;
            }
            case DECADE: {
                const [preCenturyBtn, nextCenturyBtn] = createPanelBtns({
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

        const nodes: ReactElement[] = [];

        if (shape === CALENDAR_SHAPE.PANEL) {
            return this.renderPanelHeader();
        } else {
            if (showTitle) {
                nodes.push(
                    <div key="title" className={`${prefixCls}-title`}>
                        {/* @ts-expect-error value 可能不是 Dayjs 形式 */}
                        {renderNode(this.props.titleRender, value!.format(), [value])}
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
        return (
            <div className={`${this.prefixCls}`}>
                {renderNode(this.props.headerRender, this.renderInner(), { ...this.props })}
            </div>
        );
    }
}

export default polyfill(HeaderPanel);
