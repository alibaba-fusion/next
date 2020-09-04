# 一次性加载大量数据时的性能

- order: 1

一次性加载大量数据的性能测试。

:::lang=en-us
# Load amount of data in one time.

- order: 1

A simple case.

:::

---

````jsx
import { VirtualTree, Button, Select, Step } from '@alifd/next';


function play() {
    const canvas = document.getElementById('bubble-box');
    const ctx = canvas.getContext('2d');
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function Bubbles() {
        this.x = rand(30, canvas.width - 30);
        this.y = canvas.height;
        this.radius = rand(15, 30);
        this.color ='rgba(255, 255, 255, 0.75)';
        this.ySpeed= Math.random() * 2;
        this.gravity = 0.01;
    }
    Bubbles.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    Bubbles.prototype.update = function () {
        this.y -= this.ySpeed;
        if (this.y - this.radius > 0)
            this.ySpeed += this.gravity;
        this.draw();
    }
    const backgroundGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    backgroundGradient.addColorStop(0, '#009cff');
    backgroundGradient.addColorStop(1, '#007bff');
    const bubbles = [];
    let timer = 0;
    let spawnRate = 70;
    function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = backgroundGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = bubbles.length - 1; i >= 0; i--) {
            bubbles[i].update();
            if (bubbles[i].y < 0) bubbles.splice(i, 1);
        }
        timer++;
        if (timer === spawnRate) {
            bubbles.push(new Bubbles());
            timer = 0;
            spawnRate = rand(50, 100);
        }
    }
    animate();
}

const StepItem = Step.Item;
const dataSource = [
    { label: '10万数据', value: 100000 },
    { label: '50万数据', value: 500000 },
    { label: '100万数据', value: 1000000 },
];

class Demo extends React.Component {
    data = []
    state = { nextList: [], dataCount: undefined, current: 0 }
    ref = React.createRef()
    componentDidMount() {
        play();
    }
    getData = () => {
        this.setState({ nextList: this.data.splice(0, 200000) });
        setTimeout(() => {
        if (this.data.length > 0) {
            this.getData();
        } else {
            this.setState({ current: 3 });
        }
        }, 50);
    }
    prepareData = () => {
        this.data = [];
        const loopTimes = this.state.dataCount / 200;
        for (let i = 0; i < loopTimes; i++) {
            this.data.push({ id: `root-${i}`, name: `root-${i}`, expanded: false });
            for (let j = 0; j < 20; j++) {
                this.data.push({ id: `folder-${i}-${j}`, pId: `root-${i}`, name: `folder-${j}`, expanded: false });
                for (let k = 0; k < 10; k++) {
                this.data.push({ id: `file-${i}-${j}-${k}`, pId: `folder-${i}-${j}`, name: `file-${k}` });
                }
            }
        }
        this.setState({ current: 2 });
    }
    onChange = (value) => {
        this.setState({ dataCount: value, current: 1 });
    }
    reStart = () => {
        this.setState({ nextList: [], dataCount: undefined, current: 0 }, () => {
            this.ref.current.dispose();
        });
    }
    render() {
        return (
            <div className="demo-box">
                <div className="title-block">
                    观察气泡延迟的情况来测试目录树加载时的性能。
                </div>
                <div className="operation-block">
                    <Step labelPlacement="hoz" current={this.state.current} style={{ padding: 0, textAlign: 'left' }}>
                        <StepItem title="选择数据量" content={(
                            <Select value={this.state.dataCount} dataSource={dataSource} onChange={this.onChange} disabled={this.state.current !== 0}/>
                        )} />
                        <StepItem title="创建数据" content={(
                            <Button onClick={this.prepareData} style={{ margin: '0 12px' }} disabled={this.state.current !== 1} type="primary">
                                数据准备
                            </Button>
                        )} />
                        <StepItem title="开始测试" content={(
                            <Button onClick={this.getData} disabled={this.state.current !== 2} type="primary">
                                开始测试
                            </Button>
                        )} />
                        <StepItem title="重新开始" content={(
                            <Button onClick={this.reStart} disabled={this.state.current !== 3} type="primary">
                                重新开始
                            </Button>
                        )} />
                    </Step>
                </div>
                <div className="tree-block">
                    <VirtualTree ref={this.ref} nextList={this.state.nextList} />
                </div>
                <div className="test-block">
                    <canvas id="bubble-box" />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.demo-box {
    width: 100%;
    height: 500px;
    border: 1px solid #ddd;
    overflow: auto;
}
.title-block {
    width: calc(100% - 24px);
    height: 12px;
    margin: 12px;
    font-weight: 600;
}
.operation-block {
    width: calc(100% - 24px);
    display: block;
    height: 90px;
    padding: 12px;
    border-bottom: 1px solid #ddd;
}
.tree-block {
    float: left;
    width: 250px;
    height: calc(100% - 151px);
}
.test-block {
    float: right;
    width: calc(100% - 250px);
    height: calc(100% - 151px);
    background: black;
}
#bubble-box {
    width: 100%;
    height: 100%;
}
````
