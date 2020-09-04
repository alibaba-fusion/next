# 拖拽到外部容器的用法

- order: 3

拖拽到目录树以外容器的例子。

:::lang=en-us
# Basic

- order: 3

The example to show how to drag tree item to another container.

:::

---

````jsx
import { VirtualTree, Icon } from '@alifd/next';

const data = [];
const { Tree, Context, Droppable } = VirtualTree;

for (let i = 0; i < 50; i++) {
    data.push({ id: `root-${i}`, name: `Node Id ${i}`, expanded: false });
    for (let j = 0; j < 3; j++) {
        data.push({ id: `file-${i}-${j}`, pId: `root-${i}`, name: `File Id ${j}` });
    }
}

class Demo extends React.Component {
    ref = React.createRef()
    state = { droppedItem: undefined }
    beforeDrop = (eventResult, sourceNode) => {
        this.ref.current.deleteNode(sourceNode);
        this.setState({ droppedItem: sourceNode });
    }
    render() {
        return (
            <Context beforeDrop={this.beforeDrop}>
                <div className="demo-box">
                    <div className="tree-block">
                        <Tree ref={this.ref} nextList={data} />
                    </div>
                    <div className="test-block">
                        <Droppable droppableId="test-block">
                            {
                                (provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        className="drop-area"
                                        style={{ backgroundColor: snapshot.isDraggingOver ? '#D0F5A9' : 'white' }}
                                        {...provided.droppableProps}
                                    >
                                        <div className="drop-icon">
                                            <Icon type="ashbin" size="xxxl" />
                                        </div>
                                        {provided.placeholder}
                                    </div>
                                )
                            }
                        </Droppable>
                        <div className="hint-text">
                            {
                                this.state.droppedItem ? (
                                    `${this.state.droppedItem.name} has been dropped!`
                                ) : 'Drop Item To Here!'
                            }
                        </div>
                    </div>
                </div>
            </Context>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
#mount-node {
    height: 500px;
}
.demo-box {
    width: 100%;
    height: 400px;
    border: 1px solid #ddd;
    overflow: auto;
}
.tree-block {
    float: left;
    width: 250px;
    height: 100%;
}
.test-block {
    float: right;
    width: calc(100% - 250px);
    height: 100%;
    position: relative;
}
.hint-text {
    position: absolute;
    bottom: 110px;
    width: 100%;
    text-align: center;
}
.drop-area {
    width: 100px;
    height: 100px;
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    border-radius: 50px;
    border: solid 1px #ddd;
}
.drop-icon {
    margin: 15px 18px;
}
````
