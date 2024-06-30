import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/payments/credova-payments-api",
    },
    {
      type: "category",
      label: "API Keys",
      items: [
        {
          type: "doc",
          id: "api/payments/get-all-api-keys",
          label: "Get all API keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-api-key",
          label: "Create API key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/get-api-key-by-id",
          label: "Get API key by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/update-api-key",
          label: "Update API key",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/payments/delete-api-key",
          label: "Delete API key",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/payments/reveal-api-key",
          label: "Reveal API key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/regenerate-api-key",
          label: "Regenerate API key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/get-all-api-key-types",
          label: "Get all API key types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-all-permissions",
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
          id: "api/payments/get-all-bank-account-holder-types",
          label: "Get all bank account holder types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-all-bank-account-statuses",
          label: "Get all bank account statuses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-all-bank-account-types",
          label: "Get all bank account types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-bank-account",
          label: "Get bank account",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/save-bank-account",
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
          id: "api/payments/get-business",
          label: "Get business",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/save-business",
          label: "Save business",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/payments/get-all-business-structures",
          label: "Get all business structures",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-all-business-types",
          label: "Get all business types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-all-countries",
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
          id: "api/payments/get-all-directors",
          label: "Get all directors",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-director",
          label: "Create director",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/get-director-by-id",
          label: "Get director by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/update-director",
          label: "Update director",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/payments/delete-director",
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
          id: "api/payments/get-all-business-industries",
          label: "Get all business industries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-tax-information",
          label: "Get tax information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/save-tax-information",
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
          id: "api/payments/onboard-business",
          label: "Onboard business",
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
          id: "api/payments/get-business-representative",
          label: "Get business representative",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/save-business-representative",
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
          id: "api/payments/get-all-shareholders",
          label: "Get all shareholders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-shareholder",
          label: "Create shareholder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/get-shareholder-by-id",
          label: "Get shareholder by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/update-shareholder",
          label: "Update shareholder",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/payments/delete-shareholder",
          label: "Delete shareholder",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Payment Methods",
      items: [
        {
          type: "doc",
          id: "api/payments/get-all-cards",
          label: "Get all cards",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-card",
          label: "Create card",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/get-all-cards-for-a-customer",
          label: "Get all cards for a customer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-card-by-id",
          label: "Get card by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/update-card",
          label: "Update card",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/payments/delete-card",
          label: "Delete card",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/payments/attach-card-to-customer",
          label: "Attach card to customer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/payments/detach-card-from-customer",
          label: "Detach card from customer",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Customers",
      items: [
        {
          type: "doc",
          id: "api/payments/get-all-customers",
          label: "Get all customers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-customer",
          label: "Create customer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/get-customer-by-id",
          label: "Get customer by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/update-customer",
          label: "Update customer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/payments/delete-customer",
          label: "Delete customer",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Payments",
      items: [
        {
          type: "doc",
          id: "api/payments/get-all-payments",
          label: "Get all payments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-payment",
          label: "Create payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/get-payment-by-id",
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
          id: "api/payments/get-all-refunds",
          label: "Get all refunds",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-refund",
          label: "Create refund",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/get-refund-by-id",
          label: "Get refund by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-all-refunds-for-payment",
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
          id: "api/payments/get-all-transactions",
          label: "Get all transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/get-transaction-by-id",
          label: "Get transaction by ID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Business Ultimate Beneficial Owners",
      items: [
        {
          type: "doc",
          id: "api/payments/get-all-ultimate-beneficial-owners",
          label: "Get all ultimate beneficial owners",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-ultimate-beneficial-owner",
          label: "Create ultimate beneficial owner",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/get-ultimate-beneficial-owner-by-id",
          label: "Get ultimate beneficial owner by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/update-ultimate-beneficial-owner",
          label: "Update ultimate beneficial owner",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/payments/delete-ultimate-beneficial-owner",
          label: "Delete ultimate beneficial owner",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
