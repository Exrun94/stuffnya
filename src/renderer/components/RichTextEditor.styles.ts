/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import css from 'react-quill/dist/quill.global.css';

export const StyledReactQuill = styled(ReactQuill)`
  ${css};

  // keeps the editor content from pushing items to the left: TO DO - add Media Queries
  .ql-editor {
    @media screen and (width: 1200px) {
      width: 37em;
    }

    @media screen and (width: 1440px) {
      width: 45em;
    }

    @media screen and (width: 1440px) {
      width: 45em;
    }

    @media screen and (width: 1920px) {
      width: 61em;
    }
  }

  .ql-toolbar {
    border: none;
    border-bottom: 1px solid var(--primary-400);
  }

  .ql-container.ql-snow {
    border: none;
  }

  .ql-formats {
    /* border-right: 1px solid var(--primary-400); */
  }

  .ql-toolbar.ql-snow .ql-formats {
    margin-right: 0;
  }

  .ql-snow.ql-toolbar button {
    padding: 4px;
    width: 20px;
    height: 22px;
  }

  .ql-snow .ql-editor blockquote {
    background-color: var(--primary-800);
  }
  .ql-video {
    margin: auto;
  }
`;
