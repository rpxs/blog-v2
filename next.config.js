const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx"],
});
