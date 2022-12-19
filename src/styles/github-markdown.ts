import { css } from '@emotion/react'
export const markdownBody = css`
  @media (prefers-color-scheme: dark) {
    color-scheme: dark;
    --color-prettylights-syntax-comment: #8b949e;
    --color-prettylights-syntax-constant: #79c0ff;
    --color-prettylights-syntax-entity: #d2a8ff;
    --color-prettylights-syntax-storage-modifier-import: #c9d1d9;
    --color-prettylights-syntax-entity-tag: #7ee787;
    --color-prettylights-syntax-keyword: #ff7b72;
    --color-prettylights-syntax-string: #a5d6ff;
    --color-prettylights-syntax-variable: #ffa657;
    --color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
    --color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
    --color-prettylights-syntax-invalid-illegal-bg: #8e1519;
    --color-prettylights-syntax-carriage-return-text: #f0f6fc;
    --color-prettylights-syntax-carriage-return-bg: #b62324;
    --color-prettylights-syntax-string-regexp: #7ee787;
    --color-prettylights-syntax-markup-list: #f2cc60;
    --color-prettylights-syntax-markup-heading: #1f6feb;
    --color-prettylights-syntax-markup-italic: #c9d1d9;
    --color-prettylights-syntax-markup-bold: #c9d1d9;
    --color-prettylights-syntax-markup-deleted-text: #ffdcd7;
    --color-prettylights-syntax-markup-deleted-bg: #67060c;
    --color-prettylights-syntax-markup-inserted-text: #aff5b4;
    --color-prettylights-syntax-markup-inserted-bg: #033a16;
    --color-prettylights-syntax-markup-changed-text: #ffdfb6;
    --color-prettylights-syntax-markup-changed-bg: #5a1e02;
    --color-prettylights-syntax-markup-ignored-text: #c9d1d9;
    --color-prettylights-syntax-markup-ignored-bg: #1158c7;
    --color-prettylights-syntax-meta-diff-range: #d2a8ff;
    --color-prettylights-syntax-brackethighlighter-angle: #8b949e;
    --color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
    --color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
    --color-fg-default: #c9d1d9;
    --color-fg-muted: #8b949e;
    --color-fg-subtle: #484f58;
    --color-canvas-default: #0d1117;
    --color-canvas-subtle: #161b22;
    --color-border-default: #30363d;
    --color-border-muted: #21262d;
    --color-neutral-muted: rgba(110, 118, 129, 0.4);
    --color-accent-fg: #58a6ff;
    --color-accent-emphasis: #1f6feb;
    --color-attention-subtle: rgba(187, 128, 9, 0.15);
    --color-danger-fg: #f85149;
  }
  @media (prefers-color-scheme: light) {
    color-scheme: light;
    --color-prettylights-syntax-comment: #6e7781;
    --color-prettylights-syntax-constant: #0550ae;
    --color-prettylights-syntax-entity: #8250df;
    --color-prettylights-syntax-storage-modifier-import: #24292f;
    --color-prettylights-syntax-entity-tag: #116329;
    --color-prettylights-syntax-keyword: #cf222e;
    --color-prettylights-syntax-string: #0a3069;
    --color-prettylights-syntax-variable: #953800;
    --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
    --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
    --color-prettylights-syntax-invalid-illegal-bg: #82071e;
    --color-prettylights-syntax-carriage-return-text: #f6f8fa;
    --color-prettylights-syntax-carriage-return-bg: #cf222e;
    --color-prettylights-syntax-string-regexp: #116329;
    --color-prettylights-syntax-markup-list: #3b2300;
    --color-prettylights-syntax-markup-heading: #0550ae;
    --color-prettylights-syntax-markup-italic: #24292f;
    --color-prettylights-syntax-markup-bold: #24292f;
    --color-prettylights-syntax-markup-deleted-text: #82071e;
    --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
    --color-prettylights-syntax-markup-inserted-text: #116329;
    --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
    --color-prettylights-syntax-markup-changed-text: #953800;
    --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
    --color-prettylights-syntax-markup-ignored-text: #eaeef2;
    --color-prettylights-syntax-markup-ignored-bg: #0550ae;
    --color-prettylights-syntax-meta-diff-range: #8250df;
    --color-prettylights-syntax-brackethighlighter-angle: #57606a;
    --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
    --color-prettylights-syntax-constant-other-reference-link: #0a3069;
    --color-fg-default: #24292f;
    --color-fg-muted: #57606a;
    --color-fg-subtle: #6e7781;
    --color-canvas-default: #ffffff;
    --color-canvas-subtle: #f6f8fa;
    --color-border-default: #d0d7de;
    --color-border-muted: hsla(210, 18%, 87%, 1);
    --color-neutral-muted: rgba(175, 184, 193, 0.2);
    --color-accent-fg: #0969da;
    --color-accent-emphasis: #0969da;
    --color-attention-subtle: #fff8c5;
    --color-danger-fg: #cf222e;
  }

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: var(--color-fg-default);
  background-color: var(--color-canvas-default);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    fill: currentColor;
  }
  h1 {
    &:hover {
      .anchor {
        .octicon-link {
          &:before {
            width: 16px;
            height: 16px;
            content: ' ';
            display: inline-block;
            background-color: currentColor;
            -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
            mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
          }
          visibility: visible;
        }
        text-decoration: none;
      }
    }
    margin: 0.67em 0;
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid var(--color-border-muted);
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
    .octicon-link {
      color: var(--color-fg-default);
      vertical-align: middle;
      visibility: hidden;
    }
    tt {
      padding: 0 0.2em;
      font-size: inherit;
    }
    code {
      padding: 0 0.2em;
      font-size: inherit;
    }
  }
  h2 {
    &:hover {
      .anchor {
        .octicon-link {
          &:before {
            width: 16px;
            height: 16px;
            content: ' ';
            display: inline-block;
            background-color: currentColor;
            -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
            mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
          }
          visibility: visible;
        }
        text-decoration: none;
      }
    }
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid var(--color-border-muted);
    .octicon-link {
      color: var(--color-fg-default);
      vertical-align: middle;
      visibility: hidden;
    }
    tt {
      padding: 0 0.2em;
      font-size: inherit;
    }
    code {
      padding: 0 0.2em;
      font-size: inherit;
    }
  }
  h3 {
    &:hover {
      .anchor {
        .octicon-link {
          &:before {
            width: 16px;
            height: 16px;
            content: ' ';
            display: inline-block;
            background-color: currentColor;
            -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
            mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
          }
          visibility: visible;
        }
        text-decoration: none;
      }
    }
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
    font-weight: 600;
    font-size: 1.25em;
    .octicon-link {
      color: var(--color-fg-default);
      vertical-align: middle;
      visibility: hidden;
    }
    tt {
      padding: 0 0.2em;
      font-size: inherit;
    }
    code {
      padding: 0 0.2em;
      font-size: inherit;
    }
  }
  h4 {
    &:hover {
      .anchor {
        .octicon-link {
          &:before {
            width: 16px;
            height: 16px;
            content: ' ';
            display: inline-block;
            background-color: currentColor;
            -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
            mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
          }
          visibility: visible;
        }
        text-decoration: none;
      }
    }
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
    font-weight: 600;
    font-size: 1em;
    .octicon-link {
      color: var(--color-fg-default);
      vertical-align: middle;
      visibility: hidden;
    }
    tt {
      padding: 0 0.2em;
      font-size: inherit;
    }
    code {
      padding: 0 0.2em;
      font-size: inherit;
    }
  }
  h5 {
    &:hover {
      .anchor {
        .octicon-link {
          &:before {
            width: 16px;
            height: 16px;
            content: ' ';
            display: inline-block;
            background-color: currentColor;
            -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
            mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
          }
          visibility: visible;
        }
        text-decoration: none;
      }
    }
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
    font-weight: 600;
    font-size: 0.875em;
    .octicon-link {
      color: var(--color-fg-default);
      vertical-align: middle;
      visibility: hidden;
    }
    tt {
      padding: 0 0.2em;
      font-size: inherit;
    }
    code {
      padding: 0 0.2em;
      font-size: inherit;
    }
  }
  h6 {
    &:hover {
      .anchor {
        .octicon-link {
          &:before {
            width: 16px;
            height: 16px;
            content: ' ';
            display: inline-block;
            background-color: currentColor;
            -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
            mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
          }
          visibility: visible;
        }
        text-decoration: none;
      }
    }
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
    font-weight: 600;
    font-size: 0.85em;
    color: var(--color-fg-muted);
    .octicon-link {
      color: var(--color-fg-default);
      vertical-align: middle;
      visibility: hidden;
    }
    tt {
      padding: 0 0.2em;
      font-size: inherit;
    }
    code {
      padding: 0 0.2em;
      font-size: inherit;
    }
  }
  details {
    display: block;
    margin-top: 0;
    margin-bottom: 16px;
    summary {
      cursor: pointer;
    }
    &:not([open]) {
      > * {
        &:not(summary) {
          display: none !important;
        }
      }
    }
  }
  figcaption {
    display: block;
  }
  figure {
    display: block;
    margin: 1em 40px;
  }
  summary {
    display: list-item;
  }
  [hidden] {
    display: none !important;
  }
  a {
    background-color: transparent;
    color: var(--color-accent-fg);
    text-decoration: none;
    &:active {
      outline-width: 0;
    }
    &:hover {
      outline-width: 0;
      text-decoration: underline;
    }
    &:not([href]) {
      color: inherit;
      text-decoration: none;
    }
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
  }
  b {
    font-weight: 600;
  }
  strong {
    font-weight: 600;
  }
  dfn {
    font-style: italic;
  }
  mark {
    background-color: var(--color-attention-subtle);
    color: var(--color-text-primary);
  }
  small {
    font-size: 90%;
  }
  sub {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    bottom: -0.25em;
  }
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    top: -0.5em;
    > a {
      &::before {
        content: '[';
      }
      &::after {
        content: ']';
      }
    }
  }
  img {
    border-style: none;
    max-width: 100%;
    box-sizing: content-box;
    background-color: var(--color-canvas-default);
  }
  code {
    font-family: monospace, monospace;
    font-size: 1em;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    font-size: 12px;
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: var(--color-neutral-muted);
    border-radius: 6px;
    br {
      display: none;
    }
  }
  kbd {
    font-family: monospace, monospace;
    font-size: 1em;
    display: inline-block;
    padding: 3px 5px;
    font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    line-height: 10px;
    color: var(--color-fg-default);
    vertical-align: middle;
    background-color: var(--color-canvas-subtle);
    border: solid 1px var(--color-neutral-muted);
    border-bottom-color: var(--color-neutral-muted);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 var(--color-neutral-muted);
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
    margin-top: 0;
    margin-bottom: 0;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    font-size: 12px;
    word-wrap: normal;
    margin-top: 0;
    margin-bottom: 16px;
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: var(--color-canvas-subtle);
    border-radius: 6px;
    code {
      font-size: 100%;
      display: inline;
      max-width: auto;
      padding: 0;
      margin: 0;
      overflow: visible;
      line-height: inherit;
      word-wrap: normal;
      background-color: transparent;
      border: 0;
    }
    > code {
      padding: 0;
      margin: 0;
      word-break: normal;
      white-space: pre;
      background: transparent;
      border: 0;
    }
    tt {
      display: inline;
      max-width: auto;
      padding: 0;
      margin: 0;
      overflow: visible;
      line-height: inherit;
      word-wrap: normal;
      background-color: transparent;
      border: 0;
    }
  }
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  hr {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    border-bottom: 1px solid var(--color-border-muted);
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: var(--color-border-default);
    border: 0;
    &::before {
      display: table;
      content: '';
    }
    &::after {
      display: table;
      clear: both;
      content: '';
    }
  }
  input {
    font: inherit;
    margin: 0;
    overflow: visible;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    &::-webkit-outer-spin-button {
      margin: 0;
      -webkit-appearance: none;
      appearance: none;
    }
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
      appearance: none;
    }
  }
  [type='button'] {
    -webkit-appearance: button;
    &::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    &:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
  }
  [type='reset'] {
    -webkit-appearance: button;
    &::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    &:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
  }
  [type='submit'] {
    -webkit-appearance: button;
    &::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    &:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
  }
  [type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number'] {
    &::-webkit-inner-spin-button {
      height: auto;
    }
    &::-webkit-outer-spin-button {
      height: auto;
    }
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    &::-webkit-search-decoration {
      -webkit-appearance: none;
    }
  }
  &::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }
  &::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
    margin-top: 0;
    margin-bottom: 16px;
    th {
      font-weight: 600;
      padding: 6px 13px;
      border: 1px solid var(--color-border-default);
    }
    td {
      padding: 6px 13px;
      border: 1px solid var(--color-border-default);
    }
    tr {
      background-color: var(--color-canvas-default);
      border-top: 1px solid var(--color-border-muted);
      &:nth-child(2n) {
        background-color: var(--color-canvas-subtle);
      }
    }
    img {
      background-color: transparent;
    }
  }
  td {
    padding: 0;
  }
  th {
    padding: 0;
  }
  p {
    margin-top: 0;
    margin-bottom: 10px;
    margin-top: 0;
    margin-bottom: 16px;
  }
  blockquote {
    margin: 0;
    padding: 0 1em;
    color: var(--color-fg-muted);
    border-left: 0.25em solid var(--color-border-default);
    margin-top: 0;
    margin-bottom: 16px;
    > {
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em;
    margin-top: 0;
    margin-bottom: 16px;
    ol {
      list-style-type: lower-roman;
      margin-top: 0;
      margin-bottom: 0;
      ol {
        list-style-type: lower-alpha;
      }
    }
    ul {
      ol {
        list-style-type: lower-alpha;
      }
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em;
    margin-top: 0;
    margin-bottom: 16px;
    ol {
      list-style-type: lower-roman;
      margin-top: 0;
      margin-bottom: 0;
      ol {
        list-style-type: lower-alpha;
      }
    }
    ul {
      ol {
        list-style-type: lower-alpha;
      }
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  dd {
    margin-left: 0;
  }
  tt {
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    font-size: 12px;
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: var(--color-neutral-muted);
    border-radius: 6px;
    br {
      display: none;
    }
  }
  &::placeholder {
    color: var(--color-fg-subtle);
    opacity: 1;
  }
  .pl-c {
    color: var(--color-prettylights-syntax-comment);
  }
  .pl-c1 {
    color: var(--color-prettylights-syntax-constant);
  }
  .pl-s {
    .pl-v {
      color: var(--color-prettylights-syntax-constant);
    }
    .pl-s1 {
      color: var(--color-prettylights-syntax-storage-modifier-import);
    }
    color: var(--color-prettylights-syntax-string);
    .pl-pse {
      .pl-s1 {
        color: var(--color-prettylights-syntax-string);
      }
    }
  }
  .pl-e {
    color: var(--color-prettylights-syntax-entity);
  }
  .pl-en {
    color: var(--color-prettylights-syntax-entity);
  }
  .pl-smi {
    color: var(--color-prettylights-syntax-storage-modifier-import);
  }
  .pl-ent {
    color: var(--color-prettylights-syntax-entity-tag);
  }
  .pl-k {
    color: var(--color-prettylights-syntax-keyword);
  }
  .pl-pds {
    color: var(--color-prettylights-syntax-string);
  }
  .pl-sr {
    color: var(--color-prettylights-syntax-string);
    .pl-cce {
      color: var(--color-prettylights-syntax-string);
      font-weight: bold;
      color: var(--color-prettylights-syntax-string-regexp);
    }
    .pl-sre {
      color: var(--color-prettylights-syntax-string);
    }
    .pl-sra {
      color: var(--color-prettylights-syntax-string);
    }
  }
  .pl-v {
    color: var(--color-prettylights-syntax-variable);
  }
  .pl-smw {
    color: var(--color-prettylights-syntax-variable);
  }
  .pl-bu {
    color: var(--color-prettylights-syntax-brackethighlighter-unmatched);
  }
  .pl-ii {
    color: var(--color-prettylights-syntax-invalid-illegal-text);
    background-color: var(--color-prettylights-syntax-invalid-illegal-bg);
  }
  .pl-c2 {
    color: var(--color-prettylights-syntax-carriage-return-text);
    background-color: var(--color-prettylights-syntax-carriage-return-bg);
  }
  .pl-ml {
    color: var(--color-prettylights-syntax-markup-list);
  }
  .pl-mh {
    font-weight: bold;
    color: var(--color-prettylights-syntax-markup-heading);
    .pl-en {
      font-weight: bold;
      color: var(--color-prettylights-syntax-markup-heading);
    }
  }
  .pl-ms {
    font-weight: bold;
    color: var(--color-prettylights-syntax-markup-heading);
  }
  .pl-mi {
    font-style: italic;
    color: var(--color-prettylights-syntax-markup-italic);
  }
  .pl-mb {
    font-weight: bold;
    color: var(--color-prettylights-syntax-markup-bold);
  }
  .pl-md {
    color: var(--color-prettylights-syntax-markup-deleted-text);
    background-color: var(--color-prettylights-syntax-markup-deleted-bg);
  }
  .pl-mi1 {
    color: var(--color-prettylights-syntax-markup-inserted-text);
    background-color: var(--color-prettylights-syntax-markup-inserted-bg);
  }
  .pl-mc {
    color: var(--color-prettylights-syntax-markup-changed-text);
    background-color: var(--color-prettylights-syntax-markup-changed-bg);
  }
  .pl-mi2 {
    color: var(--color-prettylights-syntax-markup-ignored-text);
    background-color: var(--color-prettylights-syntax-markup-ignored-bg);
  }
  .pl-mdr {
    font-weight: bold;
    color: var(--color-prettylights-syntax-meta-diff-range);
  }
  .pl-ba {
    color: var(--color-prettylights-syntax-brackethighlighter-angle);
  }
  .pl-sg {
    color: var(--color-prettylights-syntax-sublimelinter-gutter-mark);
  }
  .pl-corl {
    text-decoration: underline;
    color: var(--color-prettylights-syntax-constant-other-reference-link);
  }
  [data-catalyst] {
    display: block;
  }
  g-emoji {
    font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1em;
    font-style: normal !important;
    font-weight: 400;
    line-height: 1;
    vertical-align: -0.075em;
    img {
      width: 1em;
      height: 1em;
    }
  }
  &::before {
    display: table;
    content: '';
  }
  &::after {
    display: table;
    clear: both;
    content: '';
  }
  > * {
    &:first-child {
      margin-top: 0 !important;
    }
    &:last-child {
      margin-bottom: 0 !important;
    }
  }
  .absent {
    color: var(--color-danger-fg);
  }
  .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
    &:focus {
      outline: none;
    }
  }
  dl {
    margin-top: 0;
    margin-bottom: 16px;
    padding: 0;
    dt {
      padding: 0;
      margin-top: 16px;
      font-size: 1em;
      font-style: italic;
      font-weight: 600;
    }
    dd {
      padding: 0 16px;
      margin-bottom: 16px;
    }
  }
  ul.no-list {
    padding: 0;
    list-style-type: none;
  }
  ol.no-list {
    padding: 0;
    list-style-type: none;
  }
  ol[type='1'] {
    list-style-type: decimal;
  }
  ol[type='a'] {
    list-style-type: lower-alpha;
  }
  ol[type='i'] {
    list-style-type: lower-roman;
  }
  div {
    > ol {
      &:not([type]) {
        list-style-type: decimal;
      }
    }
  }
  li {
    > p {
      margin-top: 16px;
    }
  }
  li + li {
    margin-top: 0.25em;
  }
  img[align='right'] {
    padding-left: 20px;
  }
  img[align='left'] {
    padding-right: 20px;
  }
  .emoji {
    max-width: none;
    vertical-align: text-top;
    background-color: transparent;
  }
  span.frame {
    display: block;
    overflow: hidden;
    > span {
      display: block;
      float: left;
      width: auto;
      padding: 7px;
      margin: 13px 0 0;
      overflow: hidden;
      border: 1px solid var(--color-border-default);
    }
    span {
      img {
        display: block;
        float: left;
      }
      span {
        display: block;
        padding: 5px 0 0;
        clear: both;
        color: var(--color-fg-default);
      }
    }
  }
  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
    > span {
      display: block;
      margin: 13px auto 0;
      overflow: hidden;
      text-align: center;
    }
    span {
      img {
        margin: 0 auto;
        text-align: center;
      }
    }
  }
  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
    > span {
      display: block;
      margin: 13px 0 0;
      overflow: hidden;
      text-align: right;
    }
    span {
      img {
        margin: 0;
        text-align: right;
      }
    }
  }
  span.float-left {
    display: block;
    float: left;
    margin-right: 13px;
    overflow: hidden;
    span {
      margin: 13px 0 0;
    }
  }
  span.float-right {
    display: block;
    float: right;
    margin-left: 13px;
    overflow: hidden;
    > span {
      display: block;
      margin: 13px auto 0;
      overflow: hidden;
      text-align: right;
    }
  }
  del {
    code {
      text-decoration: inherit;
    }
  }
  .highlight {
    margin-bottom: 16px;
    pre {
      margin-bottom: 0;
      word-break: normal;
      padding: 16px;
      overflow: auto;
      font-size: 85%;
      line-height: 1.45;
      background-color: var(--color-canvas-subtle);
      border-radius: 6px;
    }
  }
  .csv-data {
    td {
      padding: 5px;
      overflow: hidden;
      font-size: 12px;
      line-height: 1;
      text-align: left;
      white-space: nowrap;
    }
    th {
      padding: 5px;
      overflow: hidden;
      font-size: 12px;
      line-height: 1;
      text-align: left;
      white-space: nowrap;
      font-weight: 600;
      background: var(--color-canvas-subtle);
      border-top: 0;
    }
    .blob-num {
      padding: 10px 8px 9px;
      text-align: right;
      background: var(--color-canvas-default);
      border: 0;
    }
    tr {
      border-top: 0;
    }
  }
  .footnotes {
    font-size: 12px;
    color: var(--color-fg-muted);
    border-top: 1px solid var(--color-border-default);
    ol {
      padding-left: 16px;
    }
    li {
      position: relative;
      &:target {
        &::before {
          position: absolute;
          top: -8px;
          right: -8px;
          bottom: -8px;
          left: -24px;
          pointer-events: none;
          content: '';
          border: 2px solid var(--color-accent-emphasis);
          border-radius: 6px;
        }
        color: var(--color-fg-default);
      }
    }
    .data-footnote-backref {
      g-emoji {
        font-family: monospace;
      }
    }
  }
  .task-list-item {
    list-style-type: none;
    label {
      font-weight: 400;
    }
    .handle {
      display: none;
    }
  }
  .task-list-item.enabled {
    label {
      cursor: pointer;
    }
  }
  .task-list-item + .task-list-item {
    margin-top: 3px;
  }
  .task-list-item-checkbox {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }
  .contains-task-list {
    &:dir(rtl) {
      .task-list-item-checkbox {
        margin: 0 -1.6em 0.25em 0.2em;
      }
    }
  }
  &::-webkit-calendar-picker-indicator {
    filter: invert(50%);
  }
`
