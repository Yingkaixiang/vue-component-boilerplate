const fs = require('fs');
const path = require("path");

function resolve(filepath) {
  return path.resolve(__dirname, filepath);
}

function getEntries() {
  const dir = resolve("../components");
  const packages = fs.readdirSync(dir);
  const entries = {};
  packages.forEach(function(pkg) {
    const dirpath = path.join(dir, pkg);
    const stat = fs.statSync(dirpath);
    if (stat && stat.isDirectory()) {
      entries[pkg] = path.join(dirpath, "index.js");
    }
  });
  return entries;
}

exports.resolve = resolve;
exports.getEntries = getEntries;
