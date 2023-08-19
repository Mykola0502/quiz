import { Container, Button, Img } from "./Result.styled";

export const Result = () => {
  return (
    <Container>
      <Img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Ви відгадали 3 відповіді з 10</h2>
      <Button>Спробувати знову</Button>
    </Container>
  );
};
