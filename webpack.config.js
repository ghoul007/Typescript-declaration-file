'use strict';

const path = require('path');

module.exports = {
    entry: './app/Communicator.ts',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', 'js']
    },
    devtool: 'inline-source-map',
    devServer: {
        inline: false
    }
}
