
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const name = 'default_namespace';
const _module = 'app_navbar';
const filename = `${_module}.js`;


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new ModuleFederationPlugin({
            name,
            filename,
            exposes: {
                './navbar_component': './src/components/Navbar',
            },
            shared: {
                react: {
                    import: 'react',
                    shareKey: 'react',
                    shareScope: 'default',
                    eager: true,
                    singleton: true,
                    requiredVersion: '^18.2.0',
                },
                'react-dom': {
                    import: 'react-dom',
                    shareKey: 'react-dom',
                    shareScope: 'default',
                    eager: true,
                    singleton: true,
                    requiredVersion: '^18.2.0',
                },
            },
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000,
        open: true,
    },
};


