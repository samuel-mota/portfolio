const path = require("path");

// SASS SUPPORT https://nextjs.org/docs/basic-features/built-in-css-support#sass-support
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
