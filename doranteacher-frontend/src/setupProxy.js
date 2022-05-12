const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
	app.use(
		createProxyMiddleware(['/v1', '/v2'], {
			target: process.env.REACT_APP_API_URL,
			changeOrigin: true,
			router: { '/v2': process.env.REACT_APP_V2_URL },
			pathRewrite: { '^/v2': '' },
		}),
	);
};
