import questions from "../../db/questions.json";
import { Container, Button, Img } from "./Result.styled";

export const Result = ({ correct }) => {
  return (
    <Container>
      <Img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Ви відгадали {correct} відповіді з {questions.length}
      </h2>
      <Button>Спробувати знову</Button>
    </Container>
  );
};
