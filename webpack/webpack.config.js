const path = require("path");

module.exports={
    entry: "./src/main.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist/")
    },
    watch: false,
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.node$/,
                loader: "node-loader"
            },
            //{
            //    test: /\.m?js$/,
            //    exclude: /(node_modules|bower_components)/,
            //    use: {
            //        loader: "js-loader"
            //    }
            //},
        ]
    }
};