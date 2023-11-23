import { ReactNode } from "react";

type QuestionProps = {
  question: ReactNode;
};

const Question: React.FC<QuestionProps> = ({ question }) => {
  return <div>{question}</div>;
};

export default Question;

  