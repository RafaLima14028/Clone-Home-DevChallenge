import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { HiOutlineCode } from "react-icons/hi";
import { FaShareSquare } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 25px;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease 0s;
  margin-right: 10px;
`;

export const SearchIcon = styled(BiSearch)`
  display: inline-block;
  color: var(--color-white);
  width: 60px !important;
  height: 60px;
  font-size: inherit;
`;

export const Title = styled.div`
  color: var(--color-yellow);
  font-weight: bold;
  margin-top: 20px;
  font-size: 23px;
`;

export const Develop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease 0s;
  margin-right: 10px;
`;

export const CodeIcon = styled(HiOutlineCode)`
  display: inline-block;
  color: var(--color-white);
  width: 60px !important;
  height: 60px;
  font-size: inherit;
`;

export const Share = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease 0s;
  margin-right: 10px;
`;

export const ShareIcon = styled(FaShareSquare)`
  display: inline-block;
  color: var(--color-white);
  width: 60px !important;
  height: 60px;
  font-size: inherit;
`;
