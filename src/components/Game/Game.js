import { Progress, Inner, Answer } from "./Game.styled";

export const Game = ({ question, onClickVariant }) => {
  return (
    <>
      <Progress>
        <Inner style={{ width: "20%" }} />
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
