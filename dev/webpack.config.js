const path = require('path');
const webpack = require('webpack');

var devDir = path.resolve(__dirname);

module.exports = {
    entry: {
        vendor: ['vue'],
        app: [path.join(devDir, 'dev.ts')]
    },
    output: {
        filename: '[name].min.js',
        path: devDir,
        publicPath: '/dev'
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue']
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true
                }
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    configFile: path.join(devDir, 'tsconfig.json')
                }
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|svg|eot|ttf)$/,
                loader: 'url-loader',
                options: {
                    name: 'dist/[hash].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            },
            // 混淆
            mangle: false
        })
    ],
    devtool: 'source-map'
}

