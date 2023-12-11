# zh-CN order=6

# 文件大小、长宽限制

设置图片最大宽度为 1200，最大占据磁盘空间大小为2M。思路是在 `beforeUpload` 这个阶段，获取到文件对象，判断文件对象是否符合要求。（注意IE9不支持File这个浏览器原生对象）

# en-US order=6

# size limit

set max width to 1200
