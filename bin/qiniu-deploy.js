const path = require('path');
const glob = require('glob');

const upload = require('../build/qiniu.example');

const files = glob.sync('../.out/!(sb_dll|**.js.map|**.js.LICENSE)');

files.forEach((file) => {
  const base = path.parse(file).base;
  const key = `vue-component-boilerplate/${base}`;
  upload(file, key);
});

