import React from "react";
import styles from "./Tooltip.module.css";

export const Tooltip = ({ text, children }: { text: string; children: React.ReactNode }) => {
  return (
    <span className={styles.tooltip}>
      {children}
      <span className={styles.tooltipText}>{text}</span>
    </span>
  );
};