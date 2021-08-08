import React from "react";

import {
  Container,
  Wrapper,
  FrontEnd,
  ScreenIcon,
  Title,
  BackEnd,
  CodeIcon,
  Mobile,
  MobileIcon,
} from "./styles";

function Tecnologies() {
  return (
    <Container>
      <Wrapper>
        <FrontEnd>
          <ScreenIcon />
          <Title>Front-end</Title>
        </FrontEnd>

        <BackEnd>
          <CodeIcon />
          <Title>Back-end</Title>
        </BackEnd>

        <Mobile>
          <MobileIcon />
          <Title>Mobile</Title>
        </Mobile>
      </Wrapper>
    </Container>
  );
}

export default Tecnologies;
