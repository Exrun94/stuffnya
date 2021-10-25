const Path = require('path');

// module.exports = {
//   resolve: {
//     fallback: {
//       fs: false,
//     },
//     modules: false,
//   },
//   externals: ['fs'],
//   fs: 'empty',
// };

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
