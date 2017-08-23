const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports =
{
    devtool: 'source-map',
    devServer: {
        hot: true
    },

    entry: [
        "babel-polyfill",
        "react-hot-loader/patch",
        './src/index.tsx'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.js'
    },

    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },

            { test: /\.tsx?$/, exclude: /node_modules/, use: ['babel-loader', 'ts-loader']},

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
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                namedExport: true
                            }
                        }
                    ]
                })
            },
        ]

    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            "node_modules",
            path.resolve(__dirname, 'src')
        ]

    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
}
