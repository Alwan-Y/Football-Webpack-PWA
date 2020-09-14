const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const workboxPlugin = require('workbox-webpack-plugin')
const webpack = require('webpack')
const fs = require('fs')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer:{
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    module: {
        rules: [
            /* style and css loader */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            /* babel loader */
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      name: '[path][name].[ext]',
                      limit: 1024
                    }
                  }
                ]
              },
            // file loader
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
            },
        ]
    },
    /* plugin */
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.$": "jquery",
            "window.jQuery": "jquery"
        }),
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            favicon: "./src/assets/favicon.ico",
            template: "./src/index.html",
            filename: "index.html",
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
        }),
        new workboxPlugin.InjectManifest({
            swSrc: './src/sw.js',
            swDest: 'sw.js'
        }),
    ]
}