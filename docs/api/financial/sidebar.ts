import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/financial/publicsquare-payments-api",
    },
    {
      type: "category",
      label: "Dispute Cases",
      items: [
        {
          type: "doc",
          id: "api/financial/get-all-dispute-cases",
          label: "Get all dispute cases",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/get-dispute-case-by-id",
          label: "Get dispute case by ID",
          className: "api-method get",
        },
      ],
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
          id: "api/financial/update-payment",
          label: "Update payment",
          className: "api-method put",
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
      label: "Payment Transfers",
      items: [
        {
          type: "doc",
          id: "api/financial/get-all-payment-transfers",
          label: "Get all payment transfers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/create-payment-transfer",
          label: "Create payment transfer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/financial/get-payment-transfer-by-id",
          label: "Get payment transfer by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/get-payment-transfer-for-payment",
          label: "Get payment transfer for payment",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Payouts",
      items: [
        {
          type: "doc",
          id: "api/financial/get-all-payouts",
          label: "Get all payouts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/create-payout",
          label: "Create payout",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/financial/get-payout-by-id",
          label: "Get payout by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/update-payout",
          label: "Update payout",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/financial/get-all-payouts-for-a-customer",
          label: "Get all payouts for a customer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/cancels-a-payout",
          label: "Cancels a payout",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      items: [
        {
          type: "doc",
          id: "api/financial/get-all-processor-responses",
          label: "Get all processor responses",
          className: "api-method get",
        },
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
        {
          type: "doc",
          id: "api/financial/export-transactions",
          label: "Export transactions",
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
          id: "api/financial/update-refund",
          label: "Update refund",
          className: "api-method put",
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
      label: "Refund Transfers",
      items: [
        {
          type: "doc",
          id: "api/financial/get-all-refund-transfers",
          label: "Get all refund transfers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/create-refund-transfer",
          label: "Create refund transfer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/financial/get-refund-transfer-by-id",
          label: "Get refund transfer by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/financial/get-refund-transfer-for-refund",
          label: "Get refund transfer for refund",
          className: "api-method get",
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
  ],
};

export default sidebar.apisidebar;
