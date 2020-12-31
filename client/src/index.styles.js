//Core
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', 'Ubuntu', sans-serif;
    }

    body {
        width: 100%;
    }

    input {
        &::placeholder {
            font: inherit;
            color: #b8bfc4;
        }

        &::-webkit-input-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &::-moz-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &:-moz-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &:-ms-input-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &:focus::-webkit-input-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:focus::-moz-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:focus:-moz-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:focus:-ms-input-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
    }
`;

export default GlobalStyle;
