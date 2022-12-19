const withInterceptStdout = require('next-intercept-stdout')

module.exports = withInterceptStdout(
  {
    reactStrictMode: false,
    swcMinify: true,
    trailingSlash: true,
    ignoreDuringBuilds: true,
    staticPageGenerationTimeout: 1000,
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text),
)
