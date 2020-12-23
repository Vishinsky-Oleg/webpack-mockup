const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
// const { loader } = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development"; //Check is mode is development
const isProd = !isDev; //Check is mode is production

const optimization = () => {
    const config = {
        //This parameter creates one file for multiple dependecies (e.g jquery imports into main.js and vendor.js and instead of compile jquery into both files it creates separate file and add it into html)
        splitChunks: {
            chunks: "all",
        },
    };
    if (isProd) {
        //Minifies Css and Js only in production mode
        config.minimizer = [new OptimizeCssAssetsWebpackPlugin(), new TerserWebpackPlugin()];
    }
    return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`); //For production adding hash to name

const cssloader = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: "",
            },
        },
        "css-loader",
    ];

    if (extra) {
        loaders.push(extra);
    }
    return loaders;
};

const babelOptions = (preset) => {
    const options = {
        presets: ["@babel/preset-env"],
        plugins: ["@babel/plugin-proposal-class-properties"],
    };

    if (preset) {
        options.presets.push(preset);
    }

    return options;
};
const jsLoaders = () => {
    const loader = [
        {
            loader: "babel-loader",
            options: babelOptions(),
        },
    ];

    if (isDev) {
        loader.push("eslint-loader");
    }
    return loader;
};
module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development", //Mode for webpack
    entry: {
        main: ["@babel/polyfill", "./index.jsx"], //Entry point for my script, which contains all dependecies within
        vendor: "./analitycs.ts", //Entry point for all vendor scripts , which contains all dependecies within
    },
    output: {
        filename: filename("js"), //[name] is dinamic and it equals to key in entry object (e.g main or vendor) // [contenthash] is dinamic and it will be changed after content will be changed, it is done to prevent caching previous files
        path: path.resolve(__dirname, "dist"), //path to folder where everything will be compiled to
    },
    resolve: {
        extensions: [".js", ".json", ".png"], //impoting files without explicitly declared extensions
        alias: {
            "@models": path.resolve(__dirname, "src/models"), //Lets me to change relative path in import to absolute e.g: './models/Post' to '@models/Post'
            "@": path.resolve(__dirname, "src"),
        },
    },
    optimization: optimization(),
    devServer: {
        //Creating live server on port:4200 and open:true Opens browser rightaway
        port: 4200,
        open: true,
        // hot: true,
    },
    devtool: isProd ? false : "source-map", //Adding source maps only in developer mode
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html", //sets content to pick from for newly compiled html file
            minify: {
                collapseWhitespace: isProd, //Minifies html only in production mode
            },
        }), //creates new html file with compiled js files
        new CleanWebpackPlugin(), //clears dist folder after compiling new file
        new CopyWebpackPlugin({
            patterns: [{ from: path.resolve(__dirname, "src/img"), to: path.resolve(__dirname, "dist/img") }],
        }), //copying static files from > to (e.g src/img to dist/img)
        new MiniCssExtractPlugin({
            filename: filename("css"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/, //When webpack come across file with this extension
                use: cssloader(),
                // use: [
                //     //It uses this loades !!!(From right to left)
                //     MiniCssExtractPlugin.loader,
                //     // "style-loader", //style loader parsing it into <style> tag in the head of html
                //     "css-loader", //css-loader lets me import css file into js
                // ],
            },
            {
                test: /\.s[ac]ss$/, //When webpack come across file with this extension
                use: cssloader("sass-loader"),
            },
            {
                test: /\.(png|jpg|svg|gif)$/, //Extensions for images
                use: ["file-loader"],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/, //Extensions for fonts
                use: ["file-loader"],
            },
            {
                test: /\.xml$/, //Extensions for fonts
                use: ["xml-loader"],
            },
            {
                test: /\.csv$/, //Extensions for fonts
                use: ["csv-loader"],
            },
            {
                test: /\.m?js$/, //Babel for js
                exclude: /node_modules/,
                use: jsLoaders(),
            },
            {
                test: /\.ts$/, //Babel for TypeScript
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions("@babel/preset-typescript"),
                },
            },
            {
                test: /\.jsx$/, //Babel for JSX
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions("@babel/preset-react"),
                },
            },
        ],
    },
};
