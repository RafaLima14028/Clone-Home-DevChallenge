import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: var(--background-primary);
    }

    *, button, input {
        font-family: Roboto, Arial, Helvetica, sans-serif;
    }

    ul,li {
        text-decoration: none;
        list-style: none;
        list-style-type: none;
    }

    :root {
        --background-primary: #0e0f10;
        --color-white: #FFFFFF;
        --color-yellow: #f4cf0a;
        --color-purple: #5c0d78;
        --black: #110e0e;
        --dark-purple: #490861;
        --color-tertiary: #1A1C1F;
        --color-quaternary: rgba(84,84,84,0.75);
        --color-quinary: #858585;
        --color-secondary: #191b1d;
        --white-gray: #e3e3e3;
        --light-gray: #c1c1c1;
        --pale-gray: #333333;
        --dark-gray: #242020;
        --green: #adff2f;
        --nephritis: #27ae60;
        --pumpkin: #d35400;
        --pomegranate: #c0392b;
        --blue: #47ADE1;
        --red: #E63450;
        --light-purple: #D427D8;
        --senary: #828386;
        --dark-hover: #23272C;
    }
`;
