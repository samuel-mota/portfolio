const path = require("path");
const nextTranslate = require("next-translate");

// SASS SUPPORT https://nextjs.org/docs/basic-features/built-in-css-support#sass-support
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = {
  future: {
    webpack5: true,
  },
};

// I18N SUPPORT https://nextjs.org/docs/advanced-features/i18n-routing
// https://mariestarck.com/how-to-localize-your-next-js-application-with-next-translate/
// https://github.com/vinissimus/next-translate
module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
});

module.exports = {
  i18n: {
    localeDetection: true,
  }
}
