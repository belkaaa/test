var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: './',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            hash: true,
            // minify: {
            //     collapseWhitespace: true
            // },
            template: './src/index.ejs'
        }),
        // new HtmlWebpackPlugin({
        //     title: 'Test template',
        //     hash: true,
        //     filename: 'test.html',
        //     template: './src/test.ejs'
        // }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
};
