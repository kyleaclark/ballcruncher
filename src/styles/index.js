import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  html {
    line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;
    color: #222;
    font-weight: 100;
    font-size: 1em; /* ~16px; */
    font-family: "Roboto", "Menlo", "HelveticaNeue-Light", "sans-serif";
    line-height: 1.375; /* ~22px */
  }

  body {
    font-family: "Roboto", "Menlo", "HelveticaNeue-Light", "sans-serif";
    margin: 0;
  }

  article,aside,footer,header,nav,section{display:block;}h1{font-size:2em;margin:0.67em 0;}figcaption,figure,main{display:block;}figure{margin:1em 40px;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-size:1em;}a{background-color:transparent;-webkit-text-decoration-skip:objects;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:inherit;}b,strong{font-weight:bolder;}code,kbd,samp{font-size:1em;}dfn{font-style:italic;}mark{background-color:#ff0;color:#000;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}audio,video{display:inline-block;}audio:not([controls]){display:none;height:0;}img{border-style:none;}svg:not(:root){overflow:hidden;}font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{display:inline-block;vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;}details,menu{display:block;}summary{display:list-item;}canvas{display:inline-block;}template{display:none;}[hidden]{display:none;}

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
