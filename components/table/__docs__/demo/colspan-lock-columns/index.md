# zh-CN order=7

# 行列合并与锁列

锁列会可能会影响行列合并的 `colIndex`，`lock='left'`的列会被提升到第0列，多个左锁列按照出现的先后顺序，从0到1标记列索引；
`lock='right'`的列会被提升到最后一列，多个右锁列按照出现顺序，从 `lastIndex - n` 到 `lastIndex` 标记列索引。

# en-US order=7

# Merge cell with lock columns

Merging column through cellProps.
