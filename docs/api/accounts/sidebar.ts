import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/accounts/publicsquare-accounts-api",
    },
    {
      type: "category",
      label: "Accounts",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-account-invitations",
          label: "Get all account invitations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-account-invitation",
          label: "Create account invitation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/resend-account-invitation",
          label: "Resend account invitation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/delete-account-invitation",
          label: "Delete account invitation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-account-members",
          label: "Get all account members",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/delete-account-member",
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
          id: "api/accounts/get-all-api-keys",
          label: "Get all API keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-api-key",
          label: "Create API key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-api-key-by-id",
          label: "Get API key by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-api-key",
          label: "Update API key",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-api-key",
          label: "Delete API key",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/accounts/reveal-api-key",
          label: "Reveal API key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/regenerate-api-key",
          label: "Regenerate API key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-api-key-types",
          label: "Get all API key types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-permissions",
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
          id: "api/accounts/get-all-bank-account-holder-types",
          label: "Get all bank account holder types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-bank-account-statuses",
          label: "Get all bank account statuses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-bank-account-types",
          label: "Get all bank account types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-bank-account",
          label: "Get bank account",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-bank-account",
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
          id: "api/accounts/get-business",
          label: "Get business",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-business",
          label: "Save business",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-business-structures",
          label: "Get all business structures",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-business-types",
          label: "Get all business types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-countries",
          label: "Get all countries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-business-firearms-questionnaire",
          label: "Get business firearms questionnaire",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-business-firearms-questionnaire",
          label: "Save business firearms questionnaire",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Business Directors",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-directors",
          label: "Get all directors",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-director",
          label: "Create director",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-director-by-id",
          label: "Get director by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-director",
          label: "Update director",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-director",
          label: "Delete director",
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
          id: "api/accounts/get-all-business-documents",
          label: "Get all business documents",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/upload-business-document",
          label: "Upload business document",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-business-document-by-id",
          label: "Get business document by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/delete-business-document",
          label: "Delete business document",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-business-document-types",
          label: "Get all business document types",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Business Tax Information",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-business-industries",
          label: "Get all business industries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-tax-information",
          label: "Get tax information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-tax-information",
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
          id: "api/accounts/get-business-representative",
          label: "Get business representative",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/save-business-representative",
          label: "Save business representative",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/copy-business-representative-as-owner",
          label: "Copy business representative as owner",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Business Shareholders",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-shareholders",
          label: "Get all shareholders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-shareholder",
          label: "Create shareholder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-shareholder-by-id",
          label: "Get shareholder by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-shareholder",
          label: "Update shareholder",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-shareholder",
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
          id: "api/accounts/get-all-ultimate-beneficial-owners",
          label: "Get all ultimate beneficial owners",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-ultimate-beneficial-owner",
          label: "Create ultimate beneficial owner",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-ultimate-beneficial-owner-by-id",
          label: "Get ultimate beneficial owner by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-ultimate-beneficial-owner",
          label: "Update ultimate beneficial owner",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-ultimate-beneficial-owner",
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
          id: "api/accounts/get-all-connection-invitations",
          label: "Get all connection invitations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-connection-invitation",
          label: "Create connection invitation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/delete-connection-invitation",
          label: "Delete connection invitation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-merchant-connections",
          label: "Get all merchant connections",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-seller-connections",
          label: "Get all seller connections",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-connection-by-id",
          label: "Get connection by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/delete-connection",
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
          id: "api/accounts/get-all-customers",
          label: "Get all customers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-customer",
          label: "Create customer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-customer-by-id",
          label: "Get customer by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-customer",
          label: "Update customer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-customer",
          label: "Delete customer",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Events",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-events",
          label: "Get all events",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-event-by-id",
          label: "Get event by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-event-types",
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
          id: "api/accounts/get-latest-merchant-contract",
          label: "Get latest merchant contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-merchant-contract-by-id",
          label: "Get merchant contract by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-merchant-contract",
          label: "Create merchant contract",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-latest-seller-contract",
          label: "Get latest seller contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-seller-contract-by-id",
          label: "Get seller contract by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-seller-contract",
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
          id: "api/accounts/review-merchant-onboarding",
          label: "Review merchant onboarding",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/onboard-merchant",
          label: "Onboard merchant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/review-seller-onboarding",
          label: "Review seller onboarding",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/onboard-seller",
          label: "Onboard seller",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Product Types",
      items: [
        {
          type: "doc",
          id: "api/accounts/get-all-product-types",
          label: "Get all product types",
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
          id: "api/accounts/get-all-webhook-events",
          label: "Get all webhook events",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-webhook-event-by-id",
          label: "Get webhook event by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-all-webhooks",
          label: "Get all webhooks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/create-webhook",
          label: "Create webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-webhook-by-id",
          label: "Get webhook by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/update-webhook",
          label: "Update webhook",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-webhook",
          label: "Delete webhook",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
