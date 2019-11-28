# 基本

- order: 0

简单的弹性布局展示。

:::lang=en-us
# Basic Usage

- order: 0

Simple usage of Box component.

:::
---

````jsx
import { Box } from '@alifd/next';

class BoxDemo extends React.Component {
    render() {
        return (
        <div className="list">
            <div className="list-item">
                <Box direction="row" wrap className="border-box" spacing={30}>
                    <Box className="border-box height-100 width-150" direction="row" wrap spacing={8} padding={10}>
                        <Box className="border-box height-30 width-30 dashed"/>
                        <Box className="border-box height-30 width-30" />
                        <Box className="border-box height-30 width-30" />
                        <Box className="border-box height-30 width-30" />
                        <Box className="border-box height-30 width-30 dashed" margin={[3,6]} style={{marginRight: 10}}/>
                        <Box className="border-box height-30 width-30" />
                    </Box>

                    <Box className="border-box height-100 width-150" />
                    <Box className="border-box height-100 width-150" />
                    <Box className="border-box height-100 width-150" />
                    <Box className="border-box height-100 width-150" />
                    <Box className="border-box height-100 width-150" />
                    <Box className="border-box height-100 width-150" />
                    <Box className="border-box height-100 width-150" />
                </Box>
            </div>

            <div className="list-item">
                <Box direction="row" wrap spacing={30} justify='center'>
                    <div style={{
                        height: '100px',
                        width: '50px',
                        border: '1px solid #000'
                    }} >abc</div>
                    <div style={{
                        height: '100px',
                        width: '50px',
                        border: '1px solid #000'
                    }} />
                    <span>1234</span>
                    <Box className="border-box height-40 width-150" />
                    <div style={{
                        height: '100px',
                        width: '50px',
                        border: '1px solid #000'
                    }} />
                </Box>
            </div>
            <div className="list-item">
                <Box spacing={30} align="stretch">
                    <Box className="border-box height-30" />
                    <Box className="border-box height-30" style={{marginTop: 0}}/>
                    <Box className="border-box height-30" margin={[10, 20]}/>
                    <Box className="border-box height-30" />
                </Box>
            </div>
            <div className="list-item">
                <Box direction="row" spacing={30}>
                    <Box flex={1} className="border-box height-200 width-150">
                        <Box height={200} spacing={20}>
                            <Box className="border-box height-40 width-150" />
                            <Box className="border-box height-40 width-150" />
                            <Box className="border-box height-40 width-150" />
                        </Box>
                    </Box>
                    <Box flex={1} className="border-box height-200 width-150" />
                    <Box flex={1} className="border-box height-200 width-150" />
                </Box>
            </div>
        </div>
        );
    }
}

ReactDOM.render(<BoxDemo />, mountNode);
````
````css
.list {
  position: relative;
}
.list-item {
  position: relative;
  background: #ddd;
  border: 1px solid #eee;
  margin-bottom: 20px;
}
.child {
  width: 100%;
  height: 100%;
  background: 'red';
}
.border-box {
    border: 1px solid #000;
}
.height-30 {
    height: 30px;
}
.height-40 {
    height: 40px;
}
.height-100 {
    height: 100px;
}
.height-200 {
    height: 200px;
}
.width-30 {
    width: 30px;
}
.width-150 {
    width: 150px;
}
.dashed {
    border: 1px dashed #000;
}
````
