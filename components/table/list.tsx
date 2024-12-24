import React, { Children, type ReactElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ListHeader from './list-header';
import ListFooter from './list-footer';
import RowComponent from './list/row';
import BodyComponent from './list/body';
import HeaderComponent from './fixed/header';
import WrapperComponent from './fixed/wrapper';
import { statics } from './util';
import type Base from './base';
import type {
    GroupFooterProps,
    GroupHeaderProps,
    ListTableProps,
    RecordItem,
    RowLike,
    WrapperLike,
} from './types';

export default function list(BaseComponent: typeof Base) {
    class ListTable extends React.Component<ListTableProps> {
        static ListHeader = ListHeader;
        static ListFooter = ListFooter;
        static ListRow = RowComponent;
        static ListBody = BodyComponent;
        static propTypes = {
            ...BaseComponent.propTypes,
        };
        static defaultProps = {
            ...BaseComponent.defaultProps,
        };

        static childContextTypes = {
            listHeader: PropTypes.any,
            listFooter: PropTypes.any,
            rowSelection: PropTypes.object,
        };

        state = {};
        listHeader: GroupHeaderProps;
        listFooter: GroupFooterProps;
        rowSelection: ListTableProps['rowSelection'];
        ds: RecordItem[];

        getChildContext() {
            return {
                listHeader: this.listHeader,
                listFooter: this.listFooter,
                rowSelection: this.rowSelection,
            };
        }

        normalizeDataSource(dataSource: RecordItem[]) {
            const ret: RecordItem[] = [];
            const loop = function (dataSource: RecordItem[], level: number) {
                dataSource.forEach(item => {
                    const itemCopy = { ...item };
                    itemCopy.__level = level;
                    ret.push(itemCopy);
                    if (itemCopy.children) {
                        loop(itemCopy.children, level + 1);
                    }
                });
            };
            loop(dataSource, 0);
            this.ds = ret;
            return ret;
        }

        render() {
            const { children, prefix, ...others } = this.props;
            let { components, className } = this.props;
            let isList = false;
            const ret: ReactElement[] = [];
            Children.forEach(
                children,
                (child: ReactElement<unknown, typeof ListHeader | typeof ListFooter>) => {
                    if (child) {
                        if (['function', 'object'].indexOf(typeof child.type) > -1) {
                            if (child.type._typeMark === 'listHeader') {
                                this.listHeader = child.props as GroupHeaderProps;
                                isList = true;
                            } else if (child.type._typeMark === 'listFooter') {
                                this.listFooter = child.props as GroupFooterProps;
                            } else {
                                ret.push(child);
                            }
                        } else {
                            ret.push(child);
                        }
                    }
                }
            );
            this.rowSelection = this.props.rowSelection;
            if (isList) {
                components = { ...components };
                components.Row = components.Row || (RowComponent as RowLike);
                components.Body = components.Body || BodyComponent;
                components.Header = components.Header || HeaderComponent;
                components.Wrapper = components.Wrapper || (WrapperComponent as WrapperLike);
                className = classnames({
                    [`${prefix}table-group`]: true,
                    [className!]: className,
                });
            }
            return (
                <BaseComponent
                    {...others}
                    components={components}
                    children={ret.length > 0 ? ret : undefined}
                    className={className}
                    prefix={prefix}
                />
            );
        }
    }
    return statics(ListTable, BaseComponent);
}
