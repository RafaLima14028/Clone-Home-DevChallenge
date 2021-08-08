import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

export const Container = styled.div`
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  font-weight: normal;
`;

export const Logo = styled.a`
  outline: 0px;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  color: var(--color-white);
  text-decoration: none;

  > span {
    color: var(--color-yellow);
  }
`;

export const Options = styled.div`
  margin: 0;
  padding: 0;
  outline: 0;
  font-weight: 400;
  font-size: 20px;

  > ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin-right: 50px;

    > li {
      > a {
        text-decoration: none;
        cursor: pointer;
        color: var(--color-white);
      }
    }
  }
`;

export const Github = styled(AiOutlineGithub)`
  background: none;
  margin-bottom: -2.5px;
`;
