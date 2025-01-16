import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/financial/publicsquare-payments-api",
    },
    {
      type: "category",
      label: "Bank Accounts",
      items: [
        {
          type: "doc",
          id: "api/financial/get-all-bank-accounts",
          label: "Get all bank accounts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/create-bank-account",
          label: "Create bank account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/financial/get-all-bank-accounts-for-a-customer",
          label: "Get all bank accounts for a customer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/get-bank-account-by-id",
          label: "Get bank account by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/update-bank-account",
          label: "Update bank account",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/financial/delete-bank-account",
          label: "Delete bank account",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/financial/attach-bank-account-to-customer",
          label: "Attach bank account to customer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/financial/detach-bank-account-from-customer",
          label: "Detach bank account from customer",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Cards",
      items: [
        {
          type: "doc",
          id: "api/financial/get-all-cards",
          label: "Get all cards",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/create-card",
          label: "Create card",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/financial/get-all-cards-for-a-customer",
          label: "Get all cards for a customer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/get-card-by-id",
          label: "Get card by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/update-card",
          label: "Update card",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/financial/delete-card",
          label: "Delete card",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/financial/attach-card-to-customer",
          label: "Attach card to customer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/financial/detach-card-from-customer",
          label: "Detach card from customer",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Payment Methods",
      items: [
        {
          type: "doc",
          id: "api/financial/get-all-payment-methods",
          label: "Get all payment methods",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/get-all-payment-methods-for-a-customer",
          label: "Get all payment methods for a customer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/get-payment-method-by-id",
          label: "Get payment method by ID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Payments",
      items: [
        {
          type: "doc",
          id: "api/financial/get-all-payments",
          label: "Get all payments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/create-payment",
          label: "Create payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/financial/get-payment-by-id",
          label: "Get payment by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/get-all-payments-for-a-customer",
          label: "Get all payments for a customer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/captures-a-payment",
          label: "Captures a payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/financial/cancels-a-payment",
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
          id: "api/financial/get-all-refunds",
          label: "Get all refunds",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/create-refund",
          label: "Create refund",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/financial/get-refund-by-id",
          label: "Get refund by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/get-all-refunds-for-payment",
          label: "Get all refunds for payment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/cancels-a-refund",
          label: "Cancels a refund",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Settlements",
      items: [
        {
          type: "doc",
          id: "api/financial/get-all-settlements",
          label: "Get all settlements",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/get-settlement-by-id",
          label: "Get settlement by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/get-all-transactions-for-a-settlement",
          label: "Get all transactions for a settlement",
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
          id: "api/financial/get-all-transactions",
          label: "Get all transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/get-transaction-by-id",
          label: "Get transaction by ID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
