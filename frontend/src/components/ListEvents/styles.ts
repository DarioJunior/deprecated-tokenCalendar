import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  height: 30%;
  background-color: sienna;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow: auto;

  div {
    width: 90%;
    height: 30px;
    background-color: pink;
    margin-top: 5px;
  }
`;