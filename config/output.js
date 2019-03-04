const resolve = require('path').resolve;
const library = 'RCK';
const libraryTarget = process.env.TARGET || 'commonjs';

const distDirMap = {
  es: 'es',
  commonjs2: 'lib',
  commonjs: 'lib',
  umd: 'umd'
};

module.exports = {
  path: resolve(__dirname, `../${distDirMap[libraryTarget]}`), // 必须是绝对路径
  library: library,
  libraryTarget: libraryTarget
};
