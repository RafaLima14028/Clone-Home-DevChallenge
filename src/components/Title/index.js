import React from "react";

import { Container, Content, TitleMain, SubTitle, Button } from "./styles";

function Title() {
  return (
    <Container>
      <Content>
        <TitleMain>
          <h1>Melhore suas habilidades</h1>
        </TitleMain>

        <SubTitle>
          <h2>Com desafios de front-end, back-end e mobile</h2>
        </SubTitle>

        <Button>
          <button type="button" className="button-text">Bora codar!</button>
        </Button>
      </Content>
    </Container>
  );
}

export default Title;
