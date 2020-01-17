const path = require("path");

function resolve(filepath) {
  return path.resolve(__dirname, filepath);
}

exports.resolve = resolve;
