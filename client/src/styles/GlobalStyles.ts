import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box; 
    -moz-box-sizing:border-box; 
    -webkit-box-sizing:border-box; 
    -ms-box-sizing:border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.body};
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.title};
  }

  h1 {
    font-size: 40px;
  }

  .max-width-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 25px 0 25px;
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
  }

  .header-container {
    background: ${props => props.theme.colors.secondaryBackground};
    border-bottom: 2px solid ${props => props.theme.colors.border};
    padding: 75px 0 75px 0;
  }

  .main-container {
    padding: 40px 0 40px 0;
  }

  a {
    color: ${props => props.theme.colors.link};
    text-decoration: none;
  }
`;