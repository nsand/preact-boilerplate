
module.exports = {
	entry: './src/index.jsx',
	output: {
		path: './dist',
		publicPath: '/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	}
}
