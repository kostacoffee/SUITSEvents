const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports =

{
    devtool: 'source-map',
    entry: {
        'app': [
          'babel-polyfill',
          'react-hot-loader/patch',
          './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, include: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                })
           },
           { test: /\.css$/, exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }
                    ]
                })
            },
        ]

    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            "screens",
            "App",
            "node_modules",
            path.resolve(__dirname, 'src')
        ]

    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
}
