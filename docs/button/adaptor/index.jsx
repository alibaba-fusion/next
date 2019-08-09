import React from 'react';
import { Types, ContentType, parseData, STATE_MARK } from '@alifd/adaptor-helper';
import { Button, Icon } from '@alifd/next';

const createContent = (list = []) => {
    if (!Array.isArray(list)) return list;
    return list.map(({ type, value }, index) => {
        if (type === ContentType.icon) {
            return <Icon type={value} key={`icon-${index}`} />;
        }
        return value;
    });
};

export default {
  name: 'Button',
  shape: ['normal', 'text', 'warning', 'ghost', 'group'],
  editor: (shape) => {
    return {
      props: [{
        name: 'level',
        type: Types.enum,
        options: {
          normal: ['normal', 'primary', 'secondary'],
          text: ['normal', 'primary', 'secondary'],
          warning: ['normal', 'primary'],
          ghost: ['light', 'dark'],
          group: ['normal', 'primary', 'secondary'],
        }[shape],
      }, {
        name: 'size',
        type: Types.enum,
        options: ['large', 'medium', 'small'],
        default: 'medium'
      }],
      data: {
        icon: true,
        ...(shape === 'group' ? {} : {
          disable: true,
          hover: true,
        }),
        default: shape === 'group' ? 'Button\nButton\nButton' : 'Button'
      }
    };
  },
  adaptor: ({ shape, level, size, data, ...others }) => {
    const list = parseData(data, { parseContent: true });

    const buttonProps = {
      type: shape === 'ghost' ? 'normal' : level,
      warning: shape === 'warning',
      text: shape === 'text',
      ghost: shape === 'ghost' ? level : false,
    };

    if (list.length === 1) {
      const className = (others.className || '');
      return <Button {...others} disabled={list[0].state === 'disabled'} className={list[0].state === 'hover' ? ['hover', className].join(' ') : className } size={size} {...buttonProps}>{createContent(list[0].value)}</Button>
    }

    return (
      <Button.Group {...others} size={size}>
        {
          list.map((item, index) => <Button key={index} disabled={item.state === 'disabled'} className={item.state === 'hover' ? 'hover' : ''} {...buttonProps}>{createContent(item.value)}</Button>)
        }
      </Button.Group>
    );
  },
  content(shape) {
    if (shape === 'group') {
      return {
        options: [{
          name: 'iconType',
          options: ['none', 'arrow', 'onlyIcon'],
          default: 'none'
        }],
        transform: (props, { iconType }) => {
          if (iconType === 'arrow') {
            return {
              ...props,
              data: ['[arrow-left]Go Back', 'Button', 'Go Forward[arrow-right]'].join('\n'),
            };
          }

          if (iconType === 'onlyIcon') {
            return {
              ...props,
              data: ['[set]', '[atm]', '[download]'].join('\n'),
            };
          }

          return props;
        }
      };
    }

    return {
      options: [{
        name: 'iconType',
        options: ['none', 'arrow-left', 'arrow-right', 'arrow-down', 'arrow-up', 'atm'],
        default: 'none'
      }],
      transform: (props, { iconType }) => {
        if (iconType === 'none') return props;
        let { data } = props;
        const icon = `[${iconType}]`;

        if (['arrow-right', 'arrow-down', 'arrow-up'].indexOf(iconType) !== -1) {
          data = data + icon;
        } else {
          data = Object.keys(STATE_MARK).filter(v => !!v).indexOf(data.substring(0, 1)) !== -1 ?
            [data.substring(0, 1), icon, data.substring(1)].join('') : icon + data;
        }

        return {
          ...props,
          data
        };
      }
    };
  },
  demoOptions(demo) {
    const { node } = demo;
    const { level } = node.props;
    if (level === 'dark') {
      return {
        ...demo,
        background: '#000',
      };
    }
    return demo;
  }
};
