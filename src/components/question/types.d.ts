type Answer = "yes" | "no" | "na" | "default";
type AnswerType = "right" | "wrong";
type State = "empty" | AnswerType | "na";

export type { AnswerType, Answer, State }