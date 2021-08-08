import React from "react";

import { Container, Logo, Options, Github } from "./styles";

function Header() {
  return (
    <Container>
      <Logo>
        Dev
        <span>Challenge</span>
      </Logo>

      <Options>
        <ul>
          <li>
            <a href="/" style={{ color: "#f4cf0a" }}>
              Início
            </a>
          </li>
          <li>
            <a href="/">Desafios</a>
          </li>
          <li>
            <a href="/">Comunidade</a>
          </li>
          <li className="login">
            <a
              href="/"
              style={{
                background: "rgba(84,84,84,0.75)",
                padding: "5px 30px",
                borderRadius: "25px",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Entrar <Github />
            </a>
          </li>
        </ul>
      </Options>
    </Container>
  );
}

export default Header;
