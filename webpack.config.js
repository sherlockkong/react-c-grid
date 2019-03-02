const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const plugins = [new MiniCssExtractPlugin()];

module.exports = (env) => {
    if (!env) env = {};

    const config = {
        entry: { app: "./sample/index.js" },

        mode: env.prod ? 'production' : 'development',

        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
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

        // optimization: {
        //     splitChunks: {
        //         cacheGroups: {
        //             commons: {
        //                 test: /[\\/]node_modules[\\/]/,
        //                 name: 'vendors',
        //                 chunks: 'all'
        //             }
        //         }
        //     }
        // },

        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'sample/public/dist')
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
            contentBase: './sample/public/dist',
            port: 7878,
            hot: true
        };
    }

    return config;
}