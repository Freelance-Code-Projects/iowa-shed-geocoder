export const entry = './src/index.js';
export const output = {
    path: './build',
    filename: 'bundle.js'
};
export const module = {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
    }]
};