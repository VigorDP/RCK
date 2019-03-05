const resolve = require('path').resolve;
const library = 'rck';
const libraryTarget = 'umd';

module.exports = {
  filename: '[name].min.js',
  path: resolve(__dirname, `../publish/dist`), // 必须是绝对路径
  library: library,
  libraryTarget: libraryTarget
};
