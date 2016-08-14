"use strict";


// NODE_ENV=public webpack - exmple for production;
const webpack = require("webpack");

const myBuild = {};
const NODE_ENV = process.env.NODE_ENV || "dev";
const envBuildDefinition = new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(NODE_ENV)
});
const compressorConfig = {
    warnings: false,
    drop_console: true,
    unsafe: true
}


// entries & output prefs:
myBuild.entry = "./app/main.ts";

myBuild.output = {
    path: "./public/script",
    filename: "[name].js",
    library: "[name]"
};

myBuild.watch = NODE_ENV === "dev";
myBuild.watchOptioins = {
    aggregateTimeout: 500
};

myBuild.resolve = {
    modulesDirectories: ["node_modules"],
    extensions: ["", ".js"]
};

myBuild.resolveLoader = {
    modulesDirectories: ["node_modules"],
    moduleTemplates: ["*-loader"],
    extensions: ["", ".js"]
};
myBuild.devtool = NODE_ENV === "dev" ? "cheap-inline-module-source-map" : null


// PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS /
myBuild.plugins = [
    envBuildDefinition
];

if (NODE_ENV === "public") {
    myBuild.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: compressorConfig
        })
    )
}


// LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS /
myBuild.module = {
    loaders: [{
        test: /\.js$/,
        loader: 'babel?presets[]=es2015'
    }, {
        test: /\.ts$/,
        loader: 'ts?presets[]=es2015'
    }, ]
};


// EXPORT MODULE:
module.exports = myBuild