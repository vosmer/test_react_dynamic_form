const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const pluginsForServer = [
    /*new ExtractTextPlugin({
        filename: (getPath) => {
            return getPath('stylesheets/[name].css?ver=' + process.env.staticVersion).replace('stylesheets/javascripts', 'stylesheets');
        }
    }),*/
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
        __isBrowser__: "false"
    })
];

const browserConfig = {
    mode: "production",
    entry: './src/browser/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'css-loader' ]}
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        })
    ]
};

const serverConfig = {
    mode: "production",
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }
        ]
    },
    plugins: pluginsForServer
};

module.exports = [browserConfig, serverConfig];