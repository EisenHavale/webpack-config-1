const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//! const fileLoader = require('file-loader'); This is deprecated 

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        another: './src/js/components/another-module.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: './components/[name].js',
        clean: true,
        // assetModuleFilename: 'images/[hash][ext][query]' //*Setting name for the answer
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /style.css$/,
                use: ['style-loader', 'css-loader'],

            },

            {
                test: /style.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', //!This path represent a kind of folder where any element
                //! Used bye either js or css file will be added
                generator: {
                    filename: 'img/[name][ext]', //* There is a way to set a name to every group of elements
                }
            }, 

            //* This section use minicssExtractplugin.loader to find files used as assets and add them to the final doc
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'font/[name]',
            //     }

            // },
            //* This section let me load every file i want wheter is being used or not
            // { //! This method is deprecated, just with assets module I can do that and more
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [
            //       {
            //         loader: [fileLoader],
            //       },
            //     ],
            //     generator:{
            //         filename: 'img/[name].[ext]'
            //     }
            // },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin(
            {
                filename: "./css/style.css",
                chunkFilename: "[id].css",
                ignoreOrder: false

            },
        ),
    ],

};