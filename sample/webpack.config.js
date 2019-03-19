const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const plugins = [new MiniCssExtractPlugin()];

module.exports = (env) => {
    if (!env) env = {};

    const config = {
        entry: { app: "./index.js" },

        mode: env.prod ? 'production' : 'development',

        performance: {
            maxEntrypointSize: 1024 * 1024,     // Bytes
            maxAssetSize: 1024 * 1024,          // Bytes
        },

        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },

        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'public/dist')
        },

        plugins: plugins,

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loaders: ["babel-loader"]
                },
                {
                    test: /\.scss$/,
                    use: [
                        env.prod ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                }
            ]
        },

        resolve: {
            extensions: ['.js', '.jsx']
        }
    }

    if (!env.prod) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        config.devtool = 'inline-source-map';
        config.devServer = {
            contentBase: './public/dist',
            port: 7878,
            hot: true
        };
    }

    return config;
}