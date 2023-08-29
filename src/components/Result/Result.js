import questions from "../../db/questions.json";
import { Container, Button, Img } from "./Result.styled";

export const Result = ({ correct }) => {
  let answer = "";

  if (correct === 1) {
    answer = "відповідь";
  } else if (correct === 2 || correct === 3 || correct === 4) {
    answer = "відповіді";
  } else {
    answer = "відповідей";
  }

  return (
    <Container>
      <Img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Ви відгадали {correct} {answer} з {questions.length}
      </h2>
      <a href="/">
        <Button>Спробувати знову</Button>
      </a>
    </Container>
  );
};
