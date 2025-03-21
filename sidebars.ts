import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import apiSidebar from "./docs/api/accounts/sidebar";
import financialApiSidebar from "./docs/api/financial/sidebar";

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
      label: "Payment Methods",
      items: ["guides/payment-methods/collect-cards", "guides/payment-methods/collect-bank-accounts"],
    },
    {
      type: "category",
      label: "Payments",
      items: ["guides/payments/process-card-payments", "guides/payments/authorize-and-capture-payments", "guides/payments/process-ach-payments", "guides/payments/cancel-payments"],
    },
    {
      type: "category",
      label: "Refunds",
      items: ["guides/refunds/refund-payments", "guides/refunds/cancel-refunds"],
    },
    {
      type: "category",
      label: "Payouts",
      items: ["guides/payouts/process-card-payouts", "guides/payouts/process-ach-payouts", "guides/payouts/cancel-payouts"],
    },
    {
      type: "category",
      label: "Transactions",
      items: ["guides/transactions/search-and-view-transactions", "guides/transactions/view-settlements"],
    },
    {
      type: "category",
      label: "Marketplaces",
      items: ["guides/marketplaces/onboard-sellers"],
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "category",
      label: "Concepts",
      items: ["concepts/accounts", "concepts/api-keys", "concepts/connections", "concepts/transactions", "concepts/fraud-prevention", "concepts/webhooks"],
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
      label: "Overview",
      collapsed: false,
      link: {
        type: "doc",
        id: "api/index",
      },
      items: ["api/index", "api/authentication", "api/request-correlation", "api/pagination", "api/errors", "api/ip-addresses", "api/rate-limits", "api/idempotency", "api/testing"],
    },
    {
      type: "category",
      label: "Accounts",
      link: {
        type: "generated-index",
        title: "Accounts Reference",
      },
      items: apiSidebar,
    },
    {
      type: "category",
      label: "Payments",
      link: {
        type: "generated-index",
        title: "Payments Reference",
      },
      items: financialApiSidebar,
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
      type: "category",
      label: "Payments Plugins",
      items: [
        {
          id: "plugins/bigcommerce-payments/index",
          type: "doc",
        },
        {
          id: "plugins/magento-payments/index",
          type: "doc",
        },
        {
          id: "plugins/woocommerce-payments/index",
          type: "doc",
        },
        {
          id: "plugins/shopify-payments/index",
          type: "doc",
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
