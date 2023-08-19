import { Progress, Inner, Answer } from "./Game.styled";

export const Game = () => {
  return (
    <>
      <Progress>
        <Inner />
      </Progress>
      <h1>Що таке "useState"?</h1>
      <ul>
        <Answer>Це функція для зберігання даних компонентів</Answer>
        <Answer>Це глобальний стейт</Answer>
        <Answer>Це коли на ти никому не потрібно</Answer>
      </ul>
    </>
  );
};
