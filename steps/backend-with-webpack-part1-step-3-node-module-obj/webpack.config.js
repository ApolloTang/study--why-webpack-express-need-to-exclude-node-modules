var webpack = require("webpack");
var path = require("path");
var fs = require("fs");

console.log('>>>>>>>> in webpack.config.js')

var nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

console.log('>>>>>>> nodeModule:' , nodeModules)


module.exports = {
  entry: "./src/main.js",
  target: "node",
  output: {
    path: path.join(__dirname, "build"),
    filename: "backend.js",
  },
  externals: nodeModules,
};
