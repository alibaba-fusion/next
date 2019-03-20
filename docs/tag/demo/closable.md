# 可关闭标签

- order: 2

`Tag.Closeable` 可以用于一些轻量的需要选中状态的场景。
特别注意: closeArea=tail 以及在`Tag.Closeable`中放入a标签 都与无障碍要求不符,请谨慎使用
:::lang=en-us

# Closeable Tag

- order: 2

`Tag.Closeable` can be used in some lightweight situations that needs check state.
These features do not meet the requirements for accessibility:
1. closeArea=tail
2. put a tag in `Tag.Closeable`
:::
---

````jsx
import { Tag } from '@alifd/next';

const {Group: TagGroup, Closeable: CloseableTag} = Tag;

const handler = from => {
    console.log(`close from ${from}`);
    return false;
};

class Demo extends React.Component {
    renderTagList (option) {
        return [
            <CloseableTag key={'tag-1'} type={option.type}>{option.type}</CloseableTag>,
            <CloseableTag key={'tag-2'} type={option.type} disabled>{option.type} {' disabled '}</CloseableTag>
        ];
    }

    renderCloseAreaTags () {
        return ['tag', 'tail'].reduce((prev, curr) => prev.concat([
            <CloseableTag key={`tag-${curr}-1`} closeArea={curr}>closeArea {curr}</CloseableTag>,
            <CloseableTag key={`tag-${curr}-2`} type="primary" closeArea={curr}>closeArea {curr}</CloseableTag>
        ]), []);
    }
    render() {
        return (
            <div className="tag-list">
                <h4>type: 'normal'</h4>
                <TagGroup>{this.renderTagList({type: 'normal'})}</TagGroup>
                <h4>type: 'primary'</h4>
                <TagGroup>{this.renderTagList({type: 'primary'})}</TagGroup>
                <h4>closeArea: ['tag', 'tail']</h4>
                <TagGroup>
                    {this.renderCloseAreaTags()}
                </TagGroup>
                <h4>close handler</h4>
                <TagGroup>
                    <CloseableTag onClose={() => true}> onClose allow close</CloseableTag>
                    <CloseableTag onClose={() => false}> onClose prevent close</CloseableTag>
                    <CloseableTag onClose={handler}> onClose from </CloseableTag>
                    <CloseableTag afterClose={() => console.log('after close')}>after Close</CloseableTag>
                </TagGroup>
                <h4>closeable link tag</h4>
                <TagGroup>
                    <CloseableTag type="primary"><a href="//www.alibaba.com" target="_blank">Primary Link Tag</a></CloseableTag>
                    <CloseableTag type="normal"><a href="//www.alibaba.com" target="_blank">normal Link Tag</a></CloseableTag>
                </TagGroup>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
