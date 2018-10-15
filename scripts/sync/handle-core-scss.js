const fs = require('fs-extra');
const path = require('path');

const cwd = process.cwd();

module.exports = function () {

  const colorPath = path.join(cwd, 'src', 'core', 'style', '_color.scss');
  const fontPath = path.join(cwd, 'src', 'core', 'style', '_font.scss');
  const iconPath = path.join(cwd, 'src', 'core', 'style', '_icon.scss');
  const shadowPath = path.join(cwd, 'src', 'core', 'style', '_shadow.scss');
  const cornerPath = path.join(cwd, 'src', 'core', 'style', '_corner.scss');
  const sizePath = path.join(cwd, 'src', 'core', 'style', '_size.scss');
  const linePath = path.join(cwd, 'src', 'core', 'style', '_line.scss');

  let colorContent = fs.readFileSync(colorPath, 'utf8');
  let fontContent = fs.readFileSync(fontPath, 'utf8');
  let iconContent = fs.readFileSync(iconPath, 'utf8');
  let shadowContent = fs.readFileSync(shadowPath, 'utf8');
  let cornerContent = fs.readFileSync(cornerPath, 'utf8');
  let sizeContent = fs.readFileSync(sizePath, 'utf8');
  let lineContent = fs.readFileSync(linePath, 'utf8');

  colorContent = colorContent.replace(/\/\/\/ @group (.*)\n/gm, (all, s1) => {

    if (['color-brand1'].indexOf(s1) > -1) {
      return '/// @group brand\n';
    } else if (['color-success', 'color-notice', 'color-warning','color-error',
      'color-help', 'color-link', 'color-other'].indexOf(s1) > -1) {
      return '/// @group function\n';
    } else if (['color-line1', 'color-fill1', 'color-text1'].indexOf(s1) > -1) {
      return '/// @group neutural\n';
    } else {
      return '';
    }

  });

  fontContent = fontContent.replace(/\/\/\/ @export (.*)\n/gm, (all, s1) => {
    let str = '';
    switch(s1) {
      case 'weightcore':
        str = `/// @group weight
/// @export weight\n`;
        break;
      case 'size':
        str = `/// @group size
/// @export size\n`;
        break;
      case 'lineheight':
        str = `/// @group lineheight
/// @export lineheight\n`;
        break;
      default:
        return s1;
    }

    return str;
  });

  iconContent = iconContent.replace(/^\$icon-content-(.*):(.*)\n$/gm, (all, s1, s2) => {
    return `/// icon-content-${s1}
/// @group type
/// @unconfigurable
$icon-content-${s1}:${s2}\n`;
  });

  shadowContent = formatScss(shadowContent, /^\/\/\/ shadow-0/, /^\$shadow-0: none;/, `/// shadow-zero
/// @export
/// @unconfigurable
$shadow-zero: none;`);

  shadowContent += `
// ----------- patch ----------- //
$shadow-0: $shadow-zero;`;

  cornerContent = formatScss(cornerContent, /^\/\/\/ corner-right-angle/, /^\$corner-right-angle: 0 !default;/, `/// corner-zero
/// @semantic 直角
/// @export
/// @unconfigurable
$corner-zero: 0 !default;`);

  cornerContent += `
// ----------- patch ----------- //
$corner-right-angle: $corner-zero;`;

  sizeContent = formatScss(sizeContent, /^\/\/\/ s-0/, /^\$s-0: 0;/, `/// s-zero
/// @export length
/// @unconfigurable
$s-zero: 0;`);

  sizeContent += `
// ----------- patch ----------- //
$s-0: $s-zero;`;

  lineContent = formatScss(lineContent, /^\/\/\/ line-0/, /^\$line-0: 0 !default;/, `/// line-zero
/// @semantic 无
/// @export width
/// @type Length
/// @unconfigurable
$line-zero: 0 !default;`);

  lineContent += `
// ----------- patch ----------- //
$line-0: $line-zero;`;

  fs.writeFileSync(colorPath, colorContent);
  fs.writeFileSync(fontPath, fontContent);
  fs.writeFileSync(iconPath, iconContent);
  fs.writeFileSync(shadowPath, shadowContent);
  fs.writeFileSync(cornerPath, cornerContent);
  fs.writeFileSync(sizePath, sizeContent);
  fs.writeFileSync(linePath, lineContent);

};


function formatScss(content, startReg, endReg, replaceStr) {
  const lines = content.split(/\n/g);
  const startIndex = lines.findIndex(line => startReg.test(line));
  const endIndex = lines.findIndex(line => endReg.test(line));

  return `${lines.slice(0, startIndex).join('\n')}
${replaceStr}
  ${lines.slice(endIndex + 1).join('\n')}`;
}
