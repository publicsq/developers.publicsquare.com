import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
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
       label: "Merchants",
       items: ["guides/merchants/quick-start", "guides/merchants/collect-cards", "guides/merchants/process-payments", "guides/merchants/collect-bank-accounts", "guides/merchants/process-ach-payments", "guides/merchants/issue-refunds", "guides/merchants/view-transactions"],
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
       items: ["concepts/accounts", "concepts/connections", "concepts/webhooks"],
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
