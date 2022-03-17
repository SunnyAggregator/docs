module.exports = {
  presets: [
    require.resolve("@docusaurus/core/lib/babel/preset"),
    require.resolve("@emotion/babel-preset-css-prop"),
  ],
  plugins: ["babel-plugin-twin", "babel-plugin-macros"],
};
