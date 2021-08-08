import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
  margin-bottom: 160px;
`;

export const Content = styled.div``;

export const TitleMain = styled.div`
  > h1 {
    color: var(--color-white);
    max-width: 750px;
    text-align: center;
    border-right: 0.15em solid var(--color-purple);
    font-size: 60px;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 0.02em;
    animation: 3.5s steps(30) 0s 1 normal none running typing,
      0.5s steps(1) 0s infinite normal none running blink-caret;

    @keyframes typing {
      0% {
        width: 0px;
      }
      100% {
        width: 100%;
      }
    }

    @keyframes blink-caret {
      0%,
      100% {
        border-color: transparent;
      }
      50% {
        border-color: var(--color-purple);
      }
    }
  }
`;

export const SubTitle = styled.div`
  > h2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: var(--color-yellow);
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  > .button-text {
    color: var(--color-white);
    appearance: none;
    border: medium none;
    background: var(--color-purple);
    width: 250px;
    height: 60px;
    font-weight: bold;
    font-size: 20px;
    border-radius: 50px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
      transition: all 0.3s ease 0.1s;
      background: var(--dark-purple);
    }
  }
`;
