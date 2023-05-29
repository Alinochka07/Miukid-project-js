"use strict";


const path = require('path');

module.exports = {
    mode: "development", 
    entry: "./script/script.js", 
    output: {
      filename: "bundle.js", 
      publicPath: __dirname + '/dist',
    },
    watch: true,
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"
              }]]
            }
          }
        }
      ]
    }
    
    
    
  };