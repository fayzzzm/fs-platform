import * as path from 'path';

module.exports = {
    entry: path.resolve(__dirname, 'src/main.ts'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'node',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
        ],
    },
};
