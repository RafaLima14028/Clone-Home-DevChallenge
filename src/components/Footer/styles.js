import styled, { css } from "styled-components";
import { FaInstagram, FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 40px 100px;
  background: var(--color-tertiary);
`;

export const Wrapper = styled.div`
  background: var(--color-tertiary);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icons = styled.div`
  display: flex;
  background: var(--color-tertiary);
`;

const CSSIcons = css`
  text-decoration: none;
  font-size: 22px;
  color: var(--color-quinary);
  transition: all 0.25s ease 0s;
  background: var(--color-tertiary);
  margin-bottom: -4px;
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
  cursor: pointer;
`;

export const InstagramIcon = styled(FaInstagram)`
  ${CSSIcons};
`;

export const DiscordIcon = styled(FaDiscord)`
  ${CSSIcons};
`;

export const TwitterIcon = styled(FaTwitter)`
  ${CSSIcons};
`;

export const GithubIcon = styled(FaGithub)`
  ${CSSIcons};
`;

export const Logo = styled.a`
  outline: 0px;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  color: var(--color-white);
  text-decoration: none;
  background: var(--color-tertiary);

  > span {
    color: var(--color-yellow);
    background: var(--color-tertiary);
  }
`;
