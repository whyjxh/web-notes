const path = require('path');

const rootDir = path.join(__dirname, '..');
module.exports = {
    mode: "development",
    entry: path.join(rootDir, 'src/index'),
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.join(rootDir, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].js'
    },
    module: {},
    plugins: [],
    devServer: {
        contentbase: path.resolve(__dirname, "../dist"),
        hot: true,
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        proxy: {
            "/api": "http://localhost:3000"
        }
    }
}