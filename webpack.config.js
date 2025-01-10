
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'main.js', // Output file name
    clean: true, // Clean the dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Process CSS files
        use: ['style-loader', 'css-loader'], // Loaders to handle CSS
      },
      {
        test: /\.(png|jpg|gif|svg)$/i, // Process image files
        type: 'asset/resource', // Use asset/resource for images
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Use the HTML template
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: './dist', // Serve files from the dist folder
    port: 8080, // Development server port
    open: true, // Open browser automatically
  },
  mode: 'development', // Set the mode to development for unminified output
  
};
