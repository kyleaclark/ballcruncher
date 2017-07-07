import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${styledNormalize}

  html {
    color: #222;
    font-weight: 100;
    font-size: 1em; /* ~16px; */
    font-family: "Roboto", "Menlo", "HelveticaNeue-Light", "sans-serif";
    line-height: 1.375; /* ~22px */
  }

  body {
    font-family: "Roboto", "Menlo", "HelveticaNeue-Light", "sans-serif";
  }

  a {
    color: #0074c2;
  }

  ::-moz-selection {
    background: #b3d4fc;
    text-shadow: none;
  }

  ::selection {
    background: #b3d4fc;
    text-shadow: none;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  :global(.browserupgrade) {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
  }

  @media print {
    *,
    *::before,
    *::after {
      background: transparent !important;
      color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]::after {
      content: ' (' attr(href) ')';
    }

    abbr[title]::after {
      content: ' (' attr(title) ')';
    }

    a[href^='#']::after,
    a[href^='javascript:']::after {
      content: '';
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }
`;
