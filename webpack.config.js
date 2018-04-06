const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

function resolve(dir) {
    return path.join(__dirname, "..", dir);
}

console.log("当前运行环境：production: development");

module.exports = {
    entry: [
        "react-hot-loader/patch", //react-hot-loader
        __dirname + "/src/index.js" //已多次提及的唯一入口文件
    ],
    output: {
        path: __dirname + "/build", //打包后的文件存放的地方
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        alias: {
            "@": resolve("/src")
        }
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: "./build", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",

                        options: {
                            importLoaders: 1
                            //   modules:true,
                            //   localIdentName: '[name]_[local]-[hash:base64:5]',
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 4096
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("版权所有，翻版必究"),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/static/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin("build/*.*", {
            root: __dirname,
            verbose: true,
            dry: false
        }) //热加载插件
    ]
};
