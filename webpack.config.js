'use strict';

const path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin') ,
MiniCssExtractPlugin = require("mini-css-extract-plugin") 

module.exports = {
  resolve: {
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "crypto-browserify": false,
      "util":false ,
      "url":false ,
      "querystring":false
    } 
  },
    mode:"development",
    entry: {
      main:'./src/js//main_page/main.js' ,
    },
    
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  } ,

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 9000,
  } , 
  module: {
    rules: [
    { 
        test: /\.(css)$/, 
      use: [
       MiniCssExtractPlugin.loader, "css-loader" 
      ]
    } 
      
    ]},
  plugins: [

    new HtmlWebpackPlugin( {
      filename:'index.html',
      template:'./src/main_page.html' ,
      chunks:['main'] 
    }),
    // new CleanWebpackPlugin()  ,
    new MiniCssExtractPlugin() ,
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 375,
      height: 565
    }) 
    
  ] ,
  // optimization :{
  //   minimizer: [new UglifyJsPlugin({
  //     test: /\.js(\?.*)?$/i ,
  //     cache:true
  //   })]
  // }

};





