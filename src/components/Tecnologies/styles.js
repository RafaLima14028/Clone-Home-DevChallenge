import styled from "styled-components";
import { CgScreen } from "react-icons/cg";
import { HiOutlineCode } from "react-icons/hi";
import { ImMobile } from "react-icons/im";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  margin: 0 25px;
  justify-content: space-between;
  display: flex;
`;

export const FrontEnd = styled.div`
  width: 300px;
  height: 300px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-secondary);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease 0s;
`;

export const ScreenIcon = styled(CgScreen)`
  color: var(--color-yellow);
  font-size: 70px;
  background: var(--color-secondary);
`;

export const Title = styled.div`
  color: var(--color-white);
  font-weight: bold;
  margin-top: 20px;
  font-size: 23px;
  background: var(--color-secondary);
`;

export const BackEnd = styled.div`
  width: 300px;
  height: 300px;
  background: var(--color-secondary);
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  transition: all 0.25s ease 0s;
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

export const CodeIcon = styled(HiOutlineCode)`
  color: var(--color-yellow);
  font-size: 70px;
  background: var(--color-secondary);
`;

export const Mobile = styled.div`
  width: 300px;
  height: 300px;
  background: var(--color-secondary);
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  transition: all 0.25s ease 0s;
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

export const MobileIcon = styled(ImMobile)`
  color: var(--color-yellow);
  font-size: 50px;
  background: var(--color-secondary);
`;
