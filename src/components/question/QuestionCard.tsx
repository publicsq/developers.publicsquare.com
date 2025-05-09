import React, { PropsWithChildren, ReactElement, ReactNode, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Card } from "@site/src/components/shared/Card";

import { AnswerButtons } from "./AnswerButtons";
import { QuestionCheckbox } from "./QuestionCheckbox";
import styles from "./QuestionCard.module.css";
import { Answer, AnswerType, State } from "./types";

interface Props extends PropsWithChildren {
  question: string;
  showDefault?: boolean;
  yesType?: AnswerType;
  noType?: AnswerType;
}

interface ContentProps extends PropsWithChildren {
  type: Answer;
}

export const Content = ({ children }: ContentProps) => {
  return <> {children} </>;
};

const filterContent = (children: ReactNode[], type: Answer) => children.filter((c) => (c as ReactElement<ContentProps>).props?.type === type);

const resolveState = (answer: Answer, yesType: AnswerType, noType: AnswerType): State => {
  if (answer === null) {
    return "empty";
  }
  if (answer === "na") {
    return "na";
  }
  if ((answer === "yes" && yesType === "right") || (answer === "no" && noType === "right")) {
    return "right";
  }
  return "wrong";
};
export const QuestionCard = ({ question, showDefault = false, yesType = "right", noType = "wrong", children }: Props) => {
  const [answer, setAnswer] = useState<Answer>(null);

  const childrenArray = React.Children.toArray(children);
  const yesContent = filterContent(childrenArray, "yes");
  const noContent = filterContent(childrenArray, "no");
  const naContent = filterContent(childrenArray, "na");
  const defaultContent = filterContent(childrenArray, "default");

  const state = resolveState(answer, yesType, noType);
  const key = `Question: ${question}`;

  useEffect(() => {
    const value = window.localStorage.getItem(key);
    if (["yes", "no", "na"].includes(value)) {
      setAnswer(value as Answer);
    }
  }, [question]);

  const updateAnswer = (value: Answer) => {
    setAnswer(value);
    window.localStorage.setItem(key, value);
  };

  return (
    <Card className={styles.card}>
      <div className={styles.grid}>
        <div className={styles.icon}>
          <QuestionCheckbox state={state} />
        </div>
        <div className={styles.question}>
          <ReactMarkdown>{question}</ReactMarkdown>
        </div>
        <div className={styles["button-group"]}>
          <AnswerButtons state={state} value={answer} onChange={updateAnswer} />
        </div>
        <div className={styles.content}>
          {answer === "yes" && yesContent}
          {answer === "no" && noContent}
          {answer === "na" && naContent}
          {answer === null && showDefault && defaultContent}
        </div>
      </div>
    </Card>
  );
};