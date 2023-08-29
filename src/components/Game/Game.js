import questions from "../../db/questions.json";
import { Progress, Inner, Answer } from "./Game.styled";

export const Game = ({ step, question, onClickVariant }) => {
  const percentage = Math.round((step / questions.length) * 100);
  console.log("percentage", percentage);

  return (
    <>
      <Progress>
        <Inner style={{ width: `${percentage}%` }} />
      </Progress>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <Answer key={index} onClick={() => onClickVariant(index)}>
            {text}
          </Answer>
        ))}
      </ul>
    </>
  );
};
