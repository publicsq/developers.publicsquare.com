import Layout from "@theme/Layout";
import React from "react";
import clsx from "clsx";
import { Card } from "../components/shared/Card";

import styles from "./index.module.css";

import ReactSvg from "@site/static/img/sdk/logos/react.svg";
import JavaScript from "@site/static/img/sdk/logos/javascript.svg";
import Shopify from "@site/static/img/plugins/platforms/shopify.svg";
import WooCommerce from "@site/static/img/plugins/platforms/woocommerce.svg";
import Magento from "@site/static/img/plugins/platforms/magento.svg";
import BigCommerce from "@site/static/img/plugins/platforms/bigcommerce.svg";

export default function Home() {
  return (
    <Layout>
      <div className={clsx(["col", styles.container])}>
        <header>
          <h1>PublicSquare Docs</h1>
          <p>PublicSquare will guide you on how to safely collect payment methods and process transactions.</p>
        </header>
        <main>
          <div className={styles["explore-cards-container"]}>
            <h2>Start Building</h2>
            <div className={styles["explore-cards"]}>
              <Card href="/guides" heading={<Card.PrimaryHeader>Getting Started</Card.PrimaryHeader>} column raised>
                A quick overview of how PublicSquare works and key concepts.
              </Card>

              <Card href="/guides/payment-methods/collect-cards" heading={<Card.PrimaryHeader>Collect Cards</Card.PrimaryHeader>} column raised>
                Integrate PublicSquare Elements to securely collect cards from your customers.
              </Card>

              <Card href="/guides/payments/process-card-payments" heading={<Card.PrimaryHeader>Process Payments</Card.PrimaryHeader>} column raised>
                Learn how to process card payments.
              </Card>
            </div>
          </div>

          <div className={styles["sdks"]}>
            <h2>PublicSquare SDKs</h2>
            <div className={styles["sdks-container"]}>
              <div>
                Web SDKs
                <div className={styles["sdk-column"]}>
                  <Card href="/sdks/web/react" img={<ReactSvg />} className={styles.sdk}>
                    React
                  </Card>
                  <Card href="/sdks/web/javascript" img={<JavaScript />} className={styles.sdk}>
                    Javascript
                  </Card>
                </div>
              </div>

              <div>
                eCommerce Plugins
                <div className={styles["sdk-column"]}>
                  <Card href="/plugins/magento-payments" img={<Magento />} className={styles.sdk}>
                    Magento
                  </Card>
                  <Card href="/plugins/shopify-payments" img={<Shopify />} className={styles.sdk}>
                    Shopify
                  </Card>
                  <Card href="/plugins/woocommerce-payments" img={<WooCommerce />} className={styles.sdk}>
                    WooCommerce
                  </Card>
                  <Card href="/plugins/bigcommerce-payments" img={<BigCommerce />} className={styles.sdk}>
                    BigCommerce
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["explore-cards-container"]}>
            <h2>Explore PublicSquare</h2>
            <div className={styles["explore-cards"]}>
              <Card href="/api" heading={<Card.PrimaryHeader>API Reference</Card.PrimaryHeader>} column>
                API endpoints to manage your account and process transactions with PublicSquare.
              </Card>
              <Card href="/concepts" heading={<Card.PrimaryHeader>Concepts</Card.PrimaryHeader>} column>
                Learn about key concepts of PublicSquare's platform.
              </Card>
              <Card href="/guides" heading={<Card.PrimaryHeader>Guides</Card.PrimaryHeader>} column>
                Step-by-step guides to integrate with PublicSquare.
              </Card>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
