module.exports = {
  mode: 'development',
  context: __dirname,
  entry: __dirname + '/public/javascripts/index.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname + '/public/javascripts/',
        options: {
          presets: ["@babel/react"]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
};