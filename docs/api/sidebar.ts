import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/credova-payments-api",
    },
    {
      type: "category",
      label: "API Keys",
      items: [
        {
          type: "doc",
          id: "api/get-all-api-keys",
          label: "Get all API keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-api-key",
          label: "Create API key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-api-key-by-id",
          label: "Get API key by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-api-key",
          label: "Update API key",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-api-key",
          label: "Delete API key",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/reveal-api-key",
          label: "Reveal API key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/regenerate-api-key",
          label: "Regenerate API key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-all-api-key-types",
          label: "Get all API key types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-all-permissions",
          label: "Get all permissions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Business Bank Account",
      items: [
        {
          type: "doc",
          id: "api/get-all-bank-account-holder-types",
          label: "Get all bank account holder types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-all-bank-account-statuses",
          label: "Get all bank account statuses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-all-bank-account-types",
          label: "Get all bank account types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-bank-account",
          label: "Get bank account",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/save-bank-account",
          label: "Save bank account",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Business",
      items: [
        {
          type: "doc",
          id: "api/get-business",
          label: "Get business",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/save-business",
          label: "Save business",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/get-all-business-structures",
          label: "Get all business structures",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-all-business-types",
          label: "Get all business types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-all-countries",
          label: "Get all countries",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Business Directors",
      items: [
        {
          type: "doc",
          id: "api/get-all-directors",
          label: "Get all directors",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-director",
          label: "Create director",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-director-by-id",
          label: "Get director by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-director",
          label: "Update director",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-director",
          label: "Delete director",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Business Tax Information",
      items: [
        {
          type: "doc",
          id: "api/get-all-business-industries",
          label: "Get all business industries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-tax-information",
          label: "Get tax information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/save-tax-information",
          label: "Save tax information",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Business Onboarding",
      items: [
        {
          type: "doc",
          id: "api/review-business-onboarding",
          label: "Review business onboarding",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/onboard-merchant",
          label: "Onboard merchant",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Business Representative",
      items: [
        {
          type: "doc",
          id: "api/get-business-representative",
          label: "Get business representative",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/save-business-representative",
          label: "Save business representative",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Business Shareholders",
      items: [
        {
          type: "doc",
          id: "api/get-all-shareholders",
          label: "Get all shareholders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-shareholder",
          label: "Create shareholder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-shareholder-by-id",
          label: "Get shareholder by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-shareholder",
          label: "Update shareholder",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-shareholder",
          label: "Delete shareholder",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Business Ultimate Beneficial Owners",
      items: [
        {
          type: "doc",
          id: "api/get-all-ultimate-beneficial-owners",
          label: "Get all ultimate beneficial owners",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-ultimate-beneficial-owner",
          label: "Create ultimate beneficial owner",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-ultimate-beneficial-owner-by-id",
          label: "Get ultimate beneficial owner by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-ultimate-beneficial-owner",
          label: "Update ultimate beneficial owner",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-ultimate-beneficial-owner",
          label: "Delete ultimate beneficial owner",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Customers",
      items: [
        {
          type: "doc",
          id: "api/get-all-customers",
          label: "Get all customers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-customer",
          label: "Create customer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-customer-by-id",
          label: "Get customer by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-customer",
          label: "Update customer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-customer",
          label: "Delete customer",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Business Documents",
      items: [
        {
          type: "doc",
          id: "api/get-latest-contract",
          label: "Get latest contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-contract-by-id",
          label: "Get contract by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-contract",
          label: "Create contract",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Payment Methods",
      items: [
        {
          type: "doc",
          id: "api/get-all-cards",
          label: "Get all cards",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-card",
          label: "Create card",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-all-cards-for-a-customer",
          label: "Get all cards for a customer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-card-by-id",
          label: "Get card by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-card",
          label: "Update card",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-card",
          label: "Delete card",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/attach-card-to-customer",
          label: "Attach card to customer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/detach-card-from-customer",
          label: "Detach card from customer",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Payments",
      items: [
        {
          type: "doc",
          id: "api/get-all-payments",
          label: "Get all payments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-payment",
          label: "Create payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-payment-by-id",
          label: "Get payment by ID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Refunds",
      items: [
        {
          type: "doc",
          id: "api/get-all-refunds",
          label: "Get all refunds",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-refund",
          label: "Create refund",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-refund-by-id",
          label: "Get refund by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-all-refunds-for-payment",
          label: "Get all refunds for payment",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      items: [
        {
          type: "doc",
          id: "api/get-all-transactions",
          label: "Get all transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-transaction-by-id",
          label: "Get transaction by ID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
