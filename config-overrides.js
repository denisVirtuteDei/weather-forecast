const { alias } = require('react-app-rewire-alias')
const { path } = require('path')

module.exports = function override(config) {
	alias({
		'@': path.resolve(__dirname, './src'),
		'@utils': path.resolve(__dirname, './src/utils'),
		'@actions': path.resolve(__dirname, './src/actions'),
		'@services': path.resolve(__dirname, './src/services'),
		'@constants': path.resolve(__dirname, './src/constants'),
		'@components': path.resolve(__dirname, './src/components'),
	})(config)

	return config
}