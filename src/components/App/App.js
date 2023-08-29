import { useState } from "react";

import { Game } from "../Game";
import { Result } from "../Result";
import questions from "../../db/questions.json";

import { Container } from "./App.styled";

export const App = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  // console.log("Question", question);

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep((prevState) => prevState + 1);
    if (index === question.correct) {
      setCorrect((prevState) => prevState + 1);
    }
  };

  return (
    <Container>
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </Container>
  );
};
