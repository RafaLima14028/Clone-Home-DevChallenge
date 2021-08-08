import React from "react";

import {
  Container,
  Wrapper,
  Icons,
  InstagramIcon,
  DiscordIcon,
  TwitterIcon,
  GithubIcon,
  Logo,
} from "./styles";

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Icons>
          <InstagramIcon />
          <DiscordIcon />

          <TwitterIcon />
          <GithubIcon />
        </Icons>

        <Logo>
          Dev
          <span>Challenge</span>
        </Logo>
      </Wrapper>
    </Container>
  );
}

export default Footer;
