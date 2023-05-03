const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/, //any file that ends with this extension. 
                use: [ 'style-loader', 'css-loader', 'sass-loader' ], 
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.js$/, //any file that ends with this extension. 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        }),
        new webpackBundleAnalyzerPlugin()
    ]
}