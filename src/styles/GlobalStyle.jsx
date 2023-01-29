import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        background-color: #ddff00;
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }

    #root {
        width: 100%;
    }
`;

export default GlobalStyles;