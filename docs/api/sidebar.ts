import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/credova-payments-api",
    },
    {
      type: "category",
      label: "Accounts",
      items: [
        {
          type: "doc",
          id: "api/get-all-account-invitations",
          label: "Get all account invitations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-account-invitation",
          label: "Create account invitation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/delete-account-invitation",
          label: "Delete account invitation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-all-account-members",
          label: "Get all account members",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-account-member",
          label: "Delete account member",
          className: "api-method delete",
        },
      ],
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
      label: "Connections",
      items: [
        {
          type: "doc",
          id: "api/get-all-connection-invitations",
          label: "Get all connection invitations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-connection-invitation",
          label: "Create connection invitation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-all-merchant-connections",
          label: "Get all merchant connections",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-all-seller-connections",
          label: "Get all seller connections",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-connection-by-id",
          label: "Get connection by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-connection",
          label: "Delete connection",
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
          id: "api/delete-connection-invitation",
          label: "Delete connection invitation",
          className: "api-method delete",
        },
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
      label: "Documents",
      items: [
        {
          type: "doc",
          id: "api/get-all-documents",
          label: "Get all documents",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upload-document",
          label: "Upload document",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-document-by-id",
          label: "Get document by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-document",
          label: "Delete document",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-all-document-types",
          label: "Get all document types",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Events",
      items: [
        {
          type: "doc",
          id: "api/get-all-events",
          label: "Get all events",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-event-by-id",
          label: "Get event by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-all-event-types",
          label: "Get all event types",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Contracts",
      items: [
        {
          type: "doc",
          id: "api/get-latest-merchant-contract",
          label: "Get latest merchant contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-merchant-contract-by-id",
          label: "Get merchant contract by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-merchant-contract",
          label: "Create merchant contract",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-latest-seller-contract",
          label: "Get latest seller contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-seller-contract-by-id",
          label: "Get seller contract by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-seller-contract",
          label: "Create seller contract",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Onboarding",
      items: [
        {
          type: "doc",
          id: "api/review-merchant-onboarding",
          label: "Review merchant onboarding",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/onboard-merchant",
          label: "Onboard merchant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/review-seller-onboarding",
          label: "Review seller onboarding",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/onboard-seller",
          label: "Onboard seller",
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
        {
          type: "doc",
          id: "api/get-all-payments-for-a-customer",
          label: "Get all payments for a customer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/captures-a-payment",
          label: "Captures a payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cancels-a-payment",
          label: "Cancels a payment",
          className: "api-method post",
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
    {
      type: "category",
      label: "Webhooks",
      items: [
        {
          type: "doc",
          id: "api/get-all-webhook-events",
          label: "Get all webhook events",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-webhook-event-by-id",
          label: "Get webhook event by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-all-webhooks",
          label: "Get all webhooks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-webhook",
          label: "Create webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-webhook-by-id",
          label: "Get webhook by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-webhook",
          label: "Update webhook",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-webhook",
          label: "Delete webhook",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
