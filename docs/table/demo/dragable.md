
# 拖拽排序

- order: 24

可拖拽的表格。拖拽功能的实现依赖react-dnd@7.x 及react-dnd-html5-backend@7.x， 它要求react react-dom 版本高于16.3.x

:::lang=en-us
# Simple

- order: 24

Dragable table with sort. It requires react-dnd@7.x, react-dnd-html5-backend@7.x, react@16.3.x and react-dom@16.3.x
:::

---

````jsx
import { Table } from '@alifd/next';
import { DragDropContext, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import classnames from 'classnames';

const { SelectionRow } = Table;

let dragingIndex = -1;

function MyRow (props) {
    const {
        isDragging,
        isOver,
        connectDragSource,
        connectDropTarget,
        moveRow,
        className,
        ...others
    } = props;

    const opacity = isDragging ? 0 : 1;
    const style = { ...others.style, cursor: 'move' };

    const cls = classnames({
        [className]: className,
        'drop-over-upward': isOver && others.index < dragingIndex,
        'drop-over-downward': isOver && others.index > dragingIndex,
    });

    return (<SelectionRow {...others}
        style={{ ...style, ...{ opacity } }}
        className={cls}
        wrapper={(row) => connectDragSource(connectDropTarget(row))} />);
}

const NewRow = DropTarget(
    'row',
    {
        drop(props, monitor) {
            const dragIndex = monitor.getItem().index;
            const hoverIndex = props.index;

            if (dragIndex === hoverIndex) {
                return;
            }

            props.moveRow(dragIndex, hoverIndex);
            monitor.getItem().index = hoverIndex;
        },
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    }),
)(
    DragSource(
        'row',
        {
            beginDrag: props => {
                dragingIndex = props.index;
                return {
                    id: props.record[props.primaryKey],
                    index: props.rowIndex,
                };
            },
        },
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),
    )(MyRow),
);

class InnerTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [...props.dataSource],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource && JSON.stringify(nextProps.dataSource) !==
      JSON.stringify(this.state.dataSource)) {
      this.setState({ dataSource: [...nextProps.dataSource] });
    }
  }

  moveRow = (dragIndex, hoverIndex) => {
    const { onSort } = this.props;
    const dragRow = this.state.dataSource[dragIndex];
    const dataSource = [...this.state.dataSource];
    dataSource.splice(dragIndex, 1);
    dataSource.splice(hoverIndex, 0, dragRow);
    this.setState({
      dataSource,
    });

    onSort && onSort(this.state.dataSource);
  };

  render() {

    const { excludeProvider, ...restProps } = this.props;
    const tableProps = {
        ...restProps,
        dataSource: this.state.dataSource,
        rowProps: (props, index) => ({
            index,
            moveRow: this.moveRow,
        }),
        components: {
            Row: NewRow
        },
    };

    return <Table {...tableProps} />;
  }
}


class SortableTable extends React.Component {
    render() {
        const ComponentName =  DragDropContext(HTML5Backend)(InnerTable);
        return <ComponentName {...this.props} />;
    }
}



const result = [{
    id: '001',
    time: 1951,
    title: {name: 'The Old Man and the Sea'},
}, {
    id: '002',
    time: 1925,
    title: {name: 'the great gatsby'},
}, {
    id: '003',
    time: 1719,
    title: {name: 'The adventures of Robinson Crusoe'},
}];

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: result,
        };
    }

    onRemove = (id) => {
        const {dataSource} = this.state;
        let index = -1;
        dataSource.forEach((item, i) => {
            if (item.id === id) {
                index = i;
            }
        });
        if (index !== -1) {
            dataSource.splice(index, 1);
            this.setState({
                dataSource
            });
        }
    }

    renderOper = (value, index, record) => {
        return <a onClick={this.onRemove.bind(this, record.id)}>Remove({record.id})</a>;
    };
    render() {
        return (<div>
            <SortableTable dataSource={this.state.dataSource}>
                <Table.Column title="Id" dataIndex="id" width={100} lock/>
                <Table.Column title="Title" dataIndex="title.name" width={400} />
                <Table.Column title="Time" dataIndex="time" width={300}/>
                <Table.Column title="operate" cell={this.renderOper} width={300} lock="right"/>
            </SortableTable>
        </div>);
    }
}


ReactDOM.render(<Demo />, mountNode);
````
````css
.drop-over-downward{
  border-bottom: 2px dashed #3080fe;
}

.drop-over-upward{
  border-top: 2px dashed #3080fe;
}
````
