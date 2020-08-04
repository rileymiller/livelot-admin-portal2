"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var configBuilder = function (env) {
    var isDevBuild = !(env === null || env === void 0 ? void 0 : env.prod);
    console.log("isDevBuild " + isDevBuild);
    var config = {
        mode: isDevBuild ? "development" : "production",
        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        },
        output: {
            filename: "livelot-admin-min.js",
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "ts-loader"
                        }
                    ]
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, "../dist"),
            compress: true,
            port: 6931,
        },
        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        // externals: {
        //   "react": "React",
        //   "react-dom": "ReactDOM"
        // },
        plugins: [
            new html_webpack_plugin_1.default({
                template: path.resolve(__dirname, '../public/index.html'),
                filename: 'index.html'
            })
        ]
    };
    return config;
};
exports.default = configBuilder;
