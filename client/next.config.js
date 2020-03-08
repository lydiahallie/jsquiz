const withOffline = require("next-offline");
const withFonts = require("next-fonts");

module.exports = withOffline(
  withFonts({
    generateInDevMode: true,
    webpack: config => {
      config.module.rules.push({
        test: /\.(woff|woff2|ttf|eot)$/,
        use: [{ loader: "file-loader" }]
      });

      return config;
    }
  })
);
