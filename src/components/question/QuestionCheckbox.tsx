import React from "react";

import Block from "@site/static/img/question/block.svg";
import Check from "@site/static/img/question/check.svg";
import Close from "@site/static/img/question/close.svg";

import styles from "./QuestionCheckbox.module.css";
import clsx from "clsx";

interface Props {
  state: 'empty' | 'right' | 'wrong' | 'na'
}

export const QuestionCheckbox = ({ state }: Props) => {
  return <div className={clsx(styles.checkbox, styles[state])}>
    {state === "empty" }
    {state === "right" && <Check />}
    {state === "wrong" && <Close />}
    {state === "na" && <Block />}
  </div>

}