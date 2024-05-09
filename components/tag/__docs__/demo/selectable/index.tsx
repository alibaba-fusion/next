import React from 'react';
import ReactDOM from 'react-dom';
import { Tag } from '@alifd/next';
import type { SelectableProps } from '@alifd/next/types/tag';

const { Group: TagGroup, Selectable: SelectableTag } = Tag;
const dataSource = ['tag 1', 'tag 2', 'tag 3', 'disabled', 'disabled & checked'];

class Demo extends React.Component {
    state = {
        value: ['tag 1', 'disabled & checked'],
        singleValue: 'tag 2',
    };

    handleChange(name: string, checked: boolean) {
        const { value } = this.state;
        const next = checked ? [...value, name] : value.filter(n => n !== name);

        this.setState({ value: next });
    }

    handleChangeSingle(name: string, checked: boolean) {
        const next = checked ? name : '';

        this.setState({ singleValue: next });
    }

    renderTagList(props: SelectableProps) {
        const { value } = this.state;

        return dataSource.map((name, i) => (
            <SelectableTag
                key={name}
                checked={value.indexOf(name) > -1}
                disabled={i > 2}
                onChange={this.handleChange.bind(this, name)}
                {...props}
            >
                {name}
            </SelectableTag>
        ));
    }

    renderTagListSingle() {
        const { singleValue } = this.state;

        return dataSource.map((name, i) => (
            <SelectableTag
                key={name}
                checked={singleValue === name}
                disabled={i > 2}
                onChange={this.handleChangeSingle.bind(this, name)}
            >
                {name}
            </SelectableTag>
        ));
    }

    render() {
        return (
            <div className="tag-list">
                <h4>多选</h4>
                <TagGroup>{this.renderTagList({ type: 'normal' })}</TagGroup>
                <TagGroup>{this.renderTagList({ type: 'primary' })}</TagGroup>
                <h4>受控&单选</h4>
                <TagGroup>{this.renderTagListSingle()}</TagGroup>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
