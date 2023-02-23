import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { notoSerifKr, pretendard } from './fonts';

const style = css`
  ${emotionReset}

  body {
    font-family: ${pretendard.style.fontFamily}, -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      ${notoSerifKr.style.fontFamily};
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    padding: 0;
    border: 0;
    cursor: pointer;
  }
`;

export { style };
