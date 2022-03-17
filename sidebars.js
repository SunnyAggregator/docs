/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "autogenerated",
      dirName: ".",
    },
    {
      type: "category",
      label: "Links",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "link",
          label: "Discord",
          href: "https://chat.sunny.ag",
        },
        {
          type: "link",
          label: "Twitter",
          href: "https://twitter.com/SunnyAggregator",
        },
        {
          type: "link",
          label: "GitHub",
          href: "https://github.com/SunnyAggregator/",
        },
      ],
    },
  ],
};

module.exports = sidebars;
