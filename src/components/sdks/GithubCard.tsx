import React from "react";

import { Button } from "../shared/Button";
import styles from "./GithubCard.module.css";
import utils from "./utils.module.css";

import Package from "@site/static/img/sdk/package.svg";
import Github from "@site/static/img/shared/github.svg";
import { Card } from "../shared/Card";
import { isValidSdk, SDK } from "../types";
import { getSdkIcon } from "./utils";
import clsx from "clsx";

interface GithubCard {
  heading: string;
  icon: SDK | `${SDK}`;
  organization: string,
  repository: string;
}

export const GithubCard = ({ heading, organization, repository, icon }: GithubCard) => {
  if (!icon) throw Error("Missing SDK icon");
  if (!isValidSdk(icon)) throw Error("Invalid SDK.");

  const Icon = getSdkIcon(icon);

  return (
    <Card
      hoverable={false}
      img={
        <div className={clsx([styles["gh-card--logo"], utils["round-border"]])}>
          <Icon />
        </div>
      }
      className={styles["gh-card"]}
      heading={<Card.PrimaryHeader>{heading}</Card.PrimaryHeader>}
      cta={
        <Button href={`https://github.com/${organization}/${repository}`} className={styles["gh-button"]} target="_blank">
          <Github /> See it in GitHub
        </Button>
      }
    >
      <>
        <div className={utils.repository}>
          <Package /> {repository}
        </div>
      </>
    </Card>
  );
};
