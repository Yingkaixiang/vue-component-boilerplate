const path = require('path');
const glob = require('glob');
const mime = require('mime-types');

const upload = require('../build/utils/qiniu');

const dirPath = path.resolve(
  __dirname,
  '../.out/!(sb_dll|**.js.map|**.js.LICENSE)',
);
const files = glob.sync(dirPath);

files.forEach((file) => {
  const base = path.parse(file).base;
  const fileInfo = {
    mimeType: mime.lookup(base),
  };
  const key = `vue-component-boilerplate/${base}`;
  upload(file, key, fileInfo);
});
