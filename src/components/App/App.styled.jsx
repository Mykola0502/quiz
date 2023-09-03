import styled from "@emotion/styled";

export const Container = styled.div`
  /* width: 500px; */
  border-radius: 30px;
  padding: 40px;
  background-color: #fff;
  position: relative;

  @media (max-width: 767.98px) {
    padding: 40px 10px;
    width: 280px;
  }

  @media (min-width: 768px) {
    padding: 40px;
    width: 500px;
  }
`;
