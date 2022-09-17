module.exports = {
  // publicPath:
  // process.env.NODE_ENV === "production" ? "/onnxruntime-web-demo/" : "/",
  outputDir: "dist",
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.node = {
        // __dirname: false,
        // __filename: false,
        fs: "empty",
      };
    }
  },
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
  transpileDependencies: ["quasar"],
};
