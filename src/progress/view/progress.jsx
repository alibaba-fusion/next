import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Line from './progress-line';
import Circle from './progress-circle';

/**
 * Progress
 */
export default class Progress extends Component {

    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 形态
         */
        shape: PropTypes.oneOf(['circle', 'line']),
        /**
         * 尺寸
         */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /**
         * 所占百分比
         */
        percent: PropTypes.number,
        /**
         * 进度状态
         */
        state: PropTypes.oneOf(['normal', 'success', 'error']),
        /**
         * 是否为色彩阶段变化模式
         */
        progressive: PropTypes.bool,
        /**
         * 是否添加 Border（只适用于 Line Progress)
         */
        hasBorder: PropTypes.bool,
        /**
         * 文本渲染函数
         * @param {Number} percent 当前的进度信息
         * @return {ReactNode} 返回文本节点
         */
        textRender: PropTypes.func,
    };

    static defaultProps = {
        prefix: 'next-',
        shape: 'line',
        state: 'normal',
        size: 'medium',
        percent: 0,
        progressive: false,
        hasBorder: false,
        textRender: percent => `${Math.round(percent)}%`,
    };

    static contextTypes = {
        prefix: PropTypes.string
    };

    render() {
        const { shape, hasBorder, ...others } = this.props;
        return shape === 'circle' ? <Circle {...others} /> : <Line {...others} hasBorder={hasBorder} />;
    }
}
