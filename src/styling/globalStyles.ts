import { createGlobalStyle } from 'styled-components';
import Monofonto from './fonts/monofonto.ttf';
import { screenSizes } from './style-utils';
import { getTheme, loadTheme, palette } from './theme';
import { IPartialTheme } from './theme.types';

export const globalStyles = (theme: IPartialTheme) => {
  let globalTheme = getTheme();
  if (theme) {
    globalTheme = loadTheme(theme);
  }
  const { fonts, semanticColors } = globalTheme;

  return createGlobalStyle`
    @font-face {
      font-family: "Monofonto";
      src: url(${Monofonto});
      font-weight: normal;
      font-style: normal;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    html {
      box-sizing: border-box;
      font-size: 17px;
    }

    html, body, #root {
      height: 100%;
      overflow: hidden;
    }

    body {
      font-family: ${fonts.fontFamily};
      color: ${semanticColors.textColor};
      background: ${semanticColors.siteBackground};
      line-height: 1.6;
      margin: 0;
      padding: 0;

      @media (max-width: ${screenSizes.tablet}) {
        font-size: 16px;
      }
    }

    img {
      max-width: 100%;
    }

    h1, h2, h3, h4, h5 {
      letter-spacing: .067em;
    }

    h1, h2, h3, h4, h5, p {
      margin-top: .1em;
      margin-bottom: .8em;
    }

    a {
      color: ${semanticColors.textColor};
      text-decoration: none;
      border-bottom: 2px solid ${palette.themeSecondary};
    }
  `;
};
