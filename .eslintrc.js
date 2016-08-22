module.exports = {
  "extends": "standard",
  "plugins": [
    "standard",
    "promise",
    "react",
    "react-native",
    "async-await",
  ],
  "rules": {
    "async-await/space-after-async": 2,
    "async-await/space-after-await": 2,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 1,
    "react-native/no-color-literals": 0,
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-unused-vars": [
      0
    ],
    "no-console": [
      0
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
