module.exports = {
  cache: {
    cacheId: "hank-awesome-app",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "hank-awesome-app",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
