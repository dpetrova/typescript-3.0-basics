module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.ts", //entry point
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts"] //extension to be analyzed
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader', //typescript loader to be used
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
            },
          },
        ],
      }
    ]
  }
};
