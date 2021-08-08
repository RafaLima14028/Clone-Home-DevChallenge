import React from 'react';

import {
  Container,
  Wrapper,
  Search,
  SearchIcon,
  Title,
  Develop,
  CodeIcon,
  Share,
  ShareIcon,
} from "./styles";

function Options() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <SearchIcon />
          <Title>Escolha</Title>
        </Search>

        <Develop>
          <CodeIcon />
          <Title>Desenvolva</Title>
        </Develop>

        <Share>
          <ShareIcon />
          <Title>Compartilhe</Title>
        </Share>
      </Wrapper>
    </Container>
  );
}

export default Options;