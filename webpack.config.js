// const webpack = require('webpack');
const mode = require('yargs').argv.mode;
const libraryTarget = require('yargs').argv['output-library-target'];
// const pkg = require('./package.json');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const libraryName = 'Library';

// const banner = `${pkg.name}
// ${pkg.description}\n
// @version v${pkg.version}
// @author ${pkg.author}
// @homepage ${pkg.homepage}
// @repository ${pkg.repository.url}`;

const isDevelopment = process.env.NODE_ENV === 'development';

// const plugins = [
    // new webpack.BannerPlugin(banner),
    // new MiniCssExtractPlugin({
    //     filename: isDevelopment ? '[name].css' : '[name].[hash].css',
    //     chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    // })
// ];

module.exports = {
    entry: `${__dirname}/index.js`,
    devtool: 'source-map',
    output: {
        path: `${__dirname}/${libraryTarget === 'umd' ? 'dist' : 'lib'}`,
        filename: mode === 'development' ? `${libraryName}.js` : `${libraryName}.min.js`,
        library: libraryName,
        libraryTarget: libraryTarget || 'umd',
        globalObject: '(typeof self !== \'undefined\' ? self : this)', // TODO Hack (for Webpack 4+) to enable create UMD build which can be required by Node without throwing error for window being undefined (https://github.com/webpack/webpack/issues/6522)
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                }, {
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                        modifyVars: {
                            "font-family": "DINNextLTArabic,Tahoma, Arial, sans-serif",
                            "body-background": "rgb(235, 236, 238)",
                            "primary-color": "rgb(62, 178, 198)",
                            "error-color": "rgb(255, 82, 84)",
                            "highlight-color": "rgb(255, 82, 84)",
                            "background-color-base": "rgb(245,246,248)",
                            "text-color": "rgb(79, 80, 80)",
                            "text-color-secondary": "rgb(79, 80, 80)",
                            "disabled-color": "rgb(79, 80, 80)",
                            // Input
                            "input-height-base": "36px",
                            "input-placeholder-color": "rgb(127,143,164)",
                            // Button
                            "btn-disable-color": "rgb(255, 255, 255)",
                            "btn-disable-bg": "rgb(193 198 202)",
                            "btn-border-radius-base": "8px",
                            "btn-height-base": "36px",
                            "border-color-base": "rgb(223, 227, 228)",
                            "border-radius-base": "3px",
                            "layout-trigger-height": "40px",
                            // Switch
                            "switch-height": "20px",
                            // Checkbox
                            "checkbox-size": "18px"
                            // or
                            // 'hack': `true; @import "your-less-file-path.less";`, // Override with less file
                        },
                        javascriptEnabled: true,
                    },
                }],
                // ...other rules
            },
            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                    'style-loader',
                    // isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                    'style-loader',
                    // isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {test: /\.svg$/, loader: 'svg-loader'},
            {
                test: /\.(woff(2)?|ttf|eot|woff)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
        ]
    },
};
