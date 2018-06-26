const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const plugins = [
    new ExtractTextPlugin("index.css"),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
];

const config = {
    entry: { app: "./sample/index.js" },

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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
}

if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin())
} else {
    plugins.push(new webpack.NamedModulesPlugin())
    plugins.push(new webpack.HotModuleReplacementPlugin())
    config.devtool = 'inline-source-map'
    config.devServer = {
        contentBase: './sample/public/dist',
        port: 7878,
        hot: true
    }
}

module.exports = config