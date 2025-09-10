import React from "react";
import { Button } from "@site/src/components/shared/Button";

import styles from "./AuthButtons.module.css";

export const AuthButtons = () => {
  return (
    <div className={styles.container}>
      <div>
        <Button href="https://portal.publicsquare.com/auth/login?screen_hint=signup" target="_blank">
          Sign Up
        </Button>
      </div>
      <div>
        <Button href="https://portal.publicsquare.com/" target="_blank" variant="secondary">
          Sign In
        </Button>
      </div>
    </div>
  );
};
