import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import ReactMarkdown from "react-markdown";

import styles from "./Alert.module.css";

import error from "@site/static/img/alert/error.svg";
import warning from "@site/static/img/alert/warning.svg";
import success from "@site/static/img/alert/success.svg";
import info from "@site/static/img/alert/info.svg";
import question from "@site/static/img/alert/question.svg";
import neutral from "@site/static/img/alert/neutral.svg";
import Question from "@site/static/img/alert/question.svg";

export enum Alerts {
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  SUCCESS = "success",
  NEUTRAL = "neutral",
  QUESTION = "question"
}

interface Alert {
  type: Alerts;
  title: string;
  content: string;
  subQuestion?: string;
}

export const Alert = ({
  type = Alerts.INFO,
  title,
  content,
  subQuestion,
  children,
}: PropsWithChildren<Alert>) => {
  const containerClass = clsx({
    [styles.error]: type == Alerts.ERROR,
    [styles.warning]: type == Alerts.WARNING,
    [styles.info]: type == Alerts.INFO,
    [styles.success]: type == Alerts.SUCCESS,
    [styles.neutral]: type == Alerts.NEUTRAL,
    [styles.question]: type == Alerts.QUESTION,
  });

  const Svg = {
    [Alerts.ERROR]: error,
    [Alerts.WARNING]: warning,
    [Alerts.INFO]: info,
    [Alerts.SUCCESS]: success,
    [Alerts.NEUTRAL]: neutral,
    [Alerts.QUESTION]: question,
  }[type];

  return (
    <div className={clsx([styles.container, containerClass])}>
      {Svg &&<div>
         <Svg className={styles.svg} />
      </div>}
      <div>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.content}>{content ?? children}</div>
        {subQuestion && 
        <div className={styles.subquestion}>
          <div className={styles.subquestionSvg}><Question /></div>
          <ReactMarkdown>{subQuestion}</ReactMarkdown>
        </div>}
      </div>
    </div>
  );
};
