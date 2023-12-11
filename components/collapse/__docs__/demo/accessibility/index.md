# zh-CN order=6

# 无障碍支持

组件内置了部分支持无障碍, 但是额外需要开发者手动事情才能完整支持无障碍: 给Collapse传入一个id, 组件会根据Collapse的id自动给每一个Panel生成Id。如果你想指定Panel的Id也可以, 给某个Panel传入Id属性,就会覆盖根据CollapseId生成的Id。

# en-US order=6

# Accessibility

To Support accessibility, you shoud assign an id prop to Collapse and it will generate id for Panels. or you can assign an id prop to Panel to overwrite generated id.
