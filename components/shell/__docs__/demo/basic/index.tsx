import React from 'react';
import ReactDOM from 'react-dom';
import { Search, Icon, Shell } from '@alifd/next';

class App extends React.Component {
    render() {
        return (
            <div>
                <Shell className={'iframe-hack'} style={{ border: '1px solid #eee' }}>
                    <Shell.Branding>
                        <div className="rectangular"></div>
                        <span style={{ marginLeft: 10 }}>App Name</span>
                    </Shell.Branding>
                    <Shell.Navigation direction="hoz">
                        <Search
                            key="2"
                            shape="simple"
                            type="dark"
                            placeholder="Search"
                            style={{ width: '200px' }}
                        />
                    </Shell.Navigation>
                    <Shell.Action>
                        <Icon type="ic_tongzhi" />
                        <img
                            src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
                            className="avatar"
                            alt="用户头像"
                        />
                        <span style={{ marginLeft: 10 }}>MyName</span>
                    </Shell.Action>

                    <Shell.Content>
                        <div style={{ minHeight: 1200, background: '#fff' }}></div>
                    </Shell.Content>

                    <Shell.Footer>
                        <span>Alibaba Fusion</span>
                        <span>@ 2019 Alibaba Piecework 版权所有</span>
                    </Shell.Footer>
                </Shell>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
