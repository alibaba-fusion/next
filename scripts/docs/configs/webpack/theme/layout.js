module.exports = function(data) {
    return `<!DOCTYPE html>
<html>
<head>
<title>Component Demo</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
<!-- 外部引用组件自己的样式 (此处将被配置平台替换掉) -->
<link href="./build/index.css" id="theme-style" rel="stylesheet" type="text/css" />
<script src="//g.alicdn.com/alife/lib/0.0.11/??react/16.0.0/react.production.min.js,react-dom/16.0.0/react-dom.production.min.js"></script>
<script src="//g.alicdn.com/alife/lib/0.0.11/??moment/2.20.1/moment-with-locales.min.js"></script>
<script>
${data.commonJs}
</script>
<style>
${data.commonCss}
</style>
</head>
<body>
<div id="container"></div>
<script>
${data.js}
</script>
</body>
</html>`;
};
