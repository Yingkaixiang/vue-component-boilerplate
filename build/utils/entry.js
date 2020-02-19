const fs = require('fs');
const path = require('path');

function getEntries() {
  const dir = path.resolve(__dirname, '../../components');
  const packages = fs.readdirSync(dir);
  const entries = {};
  packages.forEach(function(pkg) {
    const dirpath = path.join(dir, pkg);
    const stat = fs.statSync(dirpath);
    if (stat && stat.isDirectory()) {
      entries[pkg] = path.join(dirpath, 'index.js');
    }
  });
  return entries;
}

exports.getEntries = getEntries;
