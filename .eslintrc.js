module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@itsrakesh/eslint-config`
  extends: ["itsrakesh"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
