const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');

const srcPath = path.join(__dirname, 'src');
const distPath = path.join(__dirname, 'dist');

module.exports = {
    context: srcPath,
    entry: {
        index: './index.js'
    },
    output: {
        filename: '[name].js',
        path: distPath
    },
    resolve: {
        extensions: [ '', '.js' ],
        alias: {
            components: path.join(srcPath, 'components')
        }
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                include: [ srcPath ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: path.join(srcPath, 'index.html')
        }),
        new SvgStore(
            [ path.join(srcPath, 'icons', '**/*.svg') ],
            'icons',
            {
                name: '[hash].sprite.svg',
                chunk: 'index',
                svgoOptions: {
                    plugins: [
                        { removeTitle: true }
                    ]
                }
            }
        )
    ],
    devServer: {
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        }
    }
};