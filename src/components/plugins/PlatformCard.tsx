import React, { ReactNode, ComponentProps } from "react";

import styles from "./PlatformCard.module.css";
import utils from "../utils.module.css";

import clsx from "clsx";
import { Card } from "../shared/Card";
import { isValidPlatform, PLATFORM } from "../types";

import Package from "@site/static/img/sdk/package.svg";
import { getPlatformIcon } from "../utils";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface PlatformCard extends Pick<ComponentProps<typeof Card>, "img" | "heading" | "body" | "cta" | "href" | "className" | "hoverable"> {
  icon?: PLATFORM | `${PLATFORM}`;
  metadata?: ReactNode;
  sources?: ComponentProps<typeof ThemedImage>["sources"];
}

const PlatformCard = ({ icon, heading, body, cta, className, href, hoverable, sources }: PlatformCard) => {
  if (!icon && !sources) throw Error("Missing platform icon/icon sources");
  if (!isValidPlatform(icon) && !sources) throw Error("Invalid SDK.");

  const Icon = sources ? null : getPlatformIcon(icon);

  return (
    <Card
      hoverable={hoverable}
      className={clsx([className, styles.card])}
      href={href}
      img={
        <div className={utils["plugin-platform-icon"]}>
          {sources ? (
            <ThemedImage
              sources={{
                light: useBaseUrl(sources.light),
                dark: useBaseUrl(sources.dark),
              }}
            />
          ) : (
            <Icon />
          )}
        </div>
      }
      cta={cta}
      heading={heading}
      body={body}
    />
  );
};

PlatformCard.TwoColumnLayout = Card.TwoColumnLayout;

export { PlatformCard };
