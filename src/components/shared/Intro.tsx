import React from "react";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./Intro.module.css";

interface Intro {
  title: string;
  caption: string;
  img?: React.ReactNode | string;
}

export const Intro = ({ title, caption, img }: Intro) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {title && <h1>{title}</h1>}
        {caption}
      </div>
      {img && (
        <div className={styles["img-container"]}>
          {typeof img === "string" ? (
            <ThemedImage
              alt="Section icon"
              sources={{
                light: useBaseUrl(img),
                dark: useBaseUrl(img),
              }}
            />
          ) : (
            img
          )}
        </div>
      )}
    </div>
  );
};
