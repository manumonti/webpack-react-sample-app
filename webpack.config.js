const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    // change the default output folder (dist) to build
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    // create an HTML file in build based on src/index.html
    new HtmlWebpackPlugin({ template: "src/index.html" }),
  ],
  module: {
    // here you can use loaders. Loaders will say to webpack how to handle
    // the different files (css, react jsx...) and how to transform them to
    // something that the browser can digest
    rules: [
      {
        // style-loader makes possible to import css (import "./styles.css")
        // css-loader makes possible to use images stored in the project
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // Babel will transform JS code in something that the browser can
        // handle. One of the things Bable can do is convert JSX syntax
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          // Presets are the different configurations that babel can adopt
          presets: [
            [
              "@babel/preset-react",
              {
                // runtime: automatic makes possible to not use import React
                // from "react" in each React file
                runtime: "automatic",
              },
            ],
          ],
        },
      },
    ],
  },
  // enable source mapping: make easier the debug from browser
  devtool: "source-map",
};
