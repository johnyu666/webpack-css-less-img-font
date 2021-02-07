const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//htmlPlugin的配置信息
let htmlPluginOptions = {}
htmlPluginOptions.title = '由HtmlWebpackPlugin生成的网页';
htmlPluginOptions.template = "./src/template.html";
htmlPluginOptions.info = '自定义信息';
htmlPluginOptions.favicon = "./src/light_bubble.ico"


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },

    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,//大于10k的将启用file-loader
                }
            },
            {
                test: /\.ttf$/,
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    name: "./fonts/[name].[ext]" //当大于50K启用file-loader时，指定输出目录及文件名称（否则将产生随机名称）
                }
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(htmlPluginOptions)]

}