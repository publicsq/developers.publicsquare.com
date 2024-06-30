import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import paymentsApiSidebar from "./docs/api/payments/sidebar";

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
      type: "html",
      value: "<hr />",
    },
    {
      type: "link",
      label: "API Reference",
      href: "/docs/api/payments/credova-payments-api",
    },
    {
      type: "link",
      label: "SDKs",
      href: "/docs/sdks",
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
      items: paymentsApiSidebar,
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "link",
      label: "Guides",
      href: "/docs",
    },
    {
      type: "link",
      label: "SDKs",
      href: "/docs/sdks",
    },
  ],
  sdk: [
    "sdks/index",
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "link",
      label: "Guides",
      href: "/docs",
    },
    {
      type: "link",
      label: "API Reference",
      href: "/docs/api/payments/credova-payments-api",
    },
  ],
};

export default sidebars;
