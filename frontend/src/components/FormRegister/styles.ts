import styled from "styled-components";

export const Container = styled.form`
  /* margin: 0 auto */
  width: 500px;
  height: 500px;

  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 150px;
    height: 30px;
    margin-top: 30px;

    &:hover {
      cursor: pointer;
    }

`;

export const Input = styled.input`
    border: 1px solid black;
    border-radius: 6px;
    width: 320px;
`;

