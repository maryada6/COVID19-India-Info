import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  body: "#E2E2E2",
  text: "#363537",
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
};

export const GlobalStyles = createGlobalStyle`
body{
    background-color:${(props) => props.theme.body};
    color:${(props) => props.theme.text};
}
`;
