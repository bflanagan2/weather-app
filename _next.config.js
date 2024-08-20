const path = require('path')

module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	webpack(config, { isServer }) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		if (!isServer) {
			config.resolve.fallback.fs = false
			config.resolve.fallback.tls = false
			config.resolve.fallback.net = false
			config.resolve.fallback.child_process = false
		}

		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'src', 'styles')],
	},
}
