import styled from "@emotion/styled";

export const Progress = styled.div`
  height: 10px;
  border-radius: 30px;
  background-color: rgb(232, 232, 232);
  margin-bottom: 25px;
`;

export const Inner = styled.div`
  /* width: 20%; */
  height: 100%;
  border-radius: 30px;
  background: rgb(18, 231, 48);
  transition: all 0.3s ease-in-out;
  background: linear-gradient(
    90deg,
    rgba(18, 231, 48, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );

  &:before,
  &:after {
    content: "";
    display: block;
    height: 50px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &:before {
    width: 95%;
    bottom: -10px;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 0;
  }

  &:after {
    width: 90%;
    bottom: -20px;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 1;
  }
`;

export const Answer = styled.li`
  padding: 15px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.3);
  }
`;
