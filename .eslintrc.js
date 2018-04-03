module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "ecmaFeatures": {
    "classes": true,
  },
  "settings": {
    "import/core-modules": ["prop-types"],
  },
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "global-require": "off",
  },
};