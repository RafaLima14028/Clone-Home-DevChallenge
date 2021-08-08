import React from "react";

import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  Form,
  Input,
  Button,
} from "./styles";

function YourEmail() {
  return (
    <Container>
      <Wrapper>
        <Title>Seja notificado sobre novos desafios!</Title>
        <SubTitle>
          Inscreva-se para ser o primeiro a saber sobre novos desafios :)
        </SubTitle>

        <Form>
          <Input placeholder="E-mail" />

          <Button type="submit">Inscrever</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default YourEmail;
