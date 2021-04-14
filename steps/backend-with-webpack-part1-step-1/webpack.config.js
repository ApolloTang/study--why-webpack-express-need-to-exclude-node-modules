var path = require("path");

console.log('>>>>>>>> in webpack.config.js')

module.exports = {
  entry: "./src/main.js",
  target: "node",
  output: {
    path: path.join(__dirname, "build"),
    filename: "backend.js",
  },
};
