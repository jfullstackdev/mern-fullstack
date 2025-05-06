// This file contains Webpack development server configuration that
// helps fix WebSocket connection issues in GitHub Codespaces
module.exports = {
  devServer: {
    allowedHosts: 'all',
    client: {
      webSocketURL: {
        hostname: '0.0.0.0',
        pathname: '/ws',
        port: 0,
      },
    },
    webSocketServer: 'ws',
  },
};