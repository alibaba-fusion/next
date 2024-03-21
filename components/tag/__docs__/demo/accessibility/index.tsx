import React from 'react';
import ReactDOM from 'react-dom';
import { Tag } from '@alifd/next';

const { Group: TagGroup } = Tag;
const dataType = ['全部', '衣服', '手机', '化妆品'];

class Demo extends React.Component {
    state = {
        name: '',
    };
    onClick = (name: string) => {
        this.setState({ name });
    };
    render() {
        return (
            <div>
                <TagGroup>
                    {dataType.map(item => (
                        <Tag
                            type="normal"
                            key={item}
                            size="medium"
                            onClick={() => this.onClick(item)}
                        >
                            {item}
                        </Tag>
                    ))}
                </TagGroup>
                {this.state.name}
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
