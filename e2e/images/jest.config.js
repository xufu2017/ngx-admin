module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  roots: [
    "<rootDir>/src/",
    "<rootDir>/tests/"
  ],
  transform: {
    "vee-validate/dist/rules": "babel-jest"
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!vee-validate/dist/rules)"
  ]
};
