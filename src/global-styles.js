import { injectGlobal } from 'styled-components';
import { COLORS } from 'containers/App/constants';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  
  body {
    background-color: ${COLORS.darkGrey.rgba(0.95)};
    font-family: Helvetica, 'Helvetica Neue', Arial, sans-serif;
    
    h1 {
      font-family: "Times New Roman", Times, serif;
    }
  }
  
  body.lobster {
    h1 {
      font-family: 'Lobster', Helvetica, 'Helvetica Neue', Arial, sans-serif;
    }
  }
  
  body.lato {
    &,
    .cc-window {
      font-family: 'Lato', Helvetica, 'Helvetica Neue', Arial, sans-serif;
    } 
  }
  
  #root {
    min-height: 100%;
    min-width: 100%;
  }
  
  .cc-compliance a,
  .cc-compliance a:link,
  .cc-compliance a:visited {
    transition: background-color 0.25s ease-in-out;
    color: ${COLORS.lightGrey.hex};
  }
  
  .cc-compliance a:hover,
  .cc-compliance a:active {
    cursor: pointer;
    background-color: ${COLORS.green.hex} !important;
  }
  
  .cc-link,
  .cc-link:link,
  .cc-link:visited {
    transition: color 0.25s ease-in-out;
    cursor: pointer;
    color: ${COLORS.blueGrey.hex} !important;
  }
  
  .cc-link:hover,
  .cc-link:active {
    color: ${COLORS.green.hex} !important;
  }
`;
