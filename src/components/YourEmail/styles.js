import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2em;
`;

export const Title = styled.h1`
  color: var(--color-white);
  font-size: 2em;
  margin-bottom: 0.1em;
`;

export const SubTitle = styled.p`
  color: var(--color-yellow);
  font-size: 1em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 3.5em;
  width: 20em;
  margin-top: 1em;
  margin-bottom: 1em;
  border-radius: 0.5em;
  padding: 20px;
  font-size: 18px;
  appearance: none;
  border: medium none;
  background: var(--color-white);
`;

export const Button = styled.button`
  color: var(--color-white);
  background: var(--color-purple);
  width: 350px;
  height: 60px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  appearance: none;
  border: medium none;
`;
