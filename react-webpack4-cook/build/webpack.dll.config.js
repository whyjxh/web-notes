const path = require('path');
const webpack = require('webpack');

const src = path.resolve(process.cwd(), 'src');
const env = process.env.NOOD_EBV === 'production' ? 'production' : 'development';

module.exports = {
    mode: 'production',
    entry: {
        jquery: ['jquery'],
        react: ['react']
    },
    output: {
        path: path.resolve(__dirname, "../dist/static/", 'dll'),
        filename: '[name].dll.js',
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            context: '../src',
            path: path.resolve(__dirname, '..', 'dll/[name]-manifest.json'),
            name: '[name]_[hash]'
        })
    ]
}