import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import apiSidebar from "./docs/api/sidebar";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
 const sidebars: SidebarsConfig = {
  docs: [
    {
      id: "index",
      type: "doc",
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/collect-cards",
        "guides/process-payments",
        "guides/issue-refunds",
        "guides/view-transactions",
      ],
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "link",
      label: "API Reference",
      href: "/api",
    },
    {
      type: "link",
      label: "SDKs",
      href: "/sdks",
    },
  ],
  api: [
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
        title: "API Reference",
      },
      items: apiSidebar,
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "link",
      label: "Guides",
      href: "/",
    },
    {
      type: "link",
      label: "SDKs",
      href: "/sdks",
    },
  ],
  sdk: [
    "sdks/index",
    {
      type: "category",
      label: "Web SDKs",
      items: [
        {
          id: "sdks/web/javascript/index",
          type: "doc",
          label: "JavaScript Elements",
        },
        {
          id: "sdks/web/react/index",
          type: "doc",
          label: "React Elements",
        },
      ],
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "link",
      label: "Guides",
      href: "/",
    },
    {
      type: "link",
      label: "API Reference",
      href: "/api",
    },
  ],
};

export default sidebars;
