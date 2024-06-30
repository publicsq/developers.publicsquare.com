import React from "react";
import styles from "./Intro.module.css";

interface Intro {
  title: string;
  caption: string;
}

export const Intro = ({ title, caption }: Intro) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {title && <h1>{title}</h1>}
        {caption}
      </div>
    </div>
  );
};
