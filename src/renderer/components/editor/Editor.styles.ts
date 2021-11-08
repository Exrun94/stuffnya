import styled from 'styled-components';
import ReactQuill from 'react-quill';
import css from 'react-quill/dist/quill.global.css';

export const StyledReactQuill = styled(ReactQuill)`
  ${css};

  .ql-toolbar {
    border: none;
    border-bottom: 1px solid var(--primary-400);
  }

  .ql-container {
    height: auto;
  }

  .ql-editor {
    height: auto;
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

export const Title = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: normal;
  font-weight: 400;
  margin-bottom: 1rem;
  color: white;
  outline: none;
  background: transparent;
  border: none;
  word-wrap: break-word;
  word-break: break-all;
  height: 80px;

  &::placeholder {
    color: white;
  }
`;

export const TitleBar = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: normal;
  font-weight: 400;
  margin-bottom: 1rem;
  color: white;
  outline: none;
  background: transparent;
  border: none;

  &::placeholder {
    color: white;
  }
`;

export const Select = styled.select`
  width: 40%;
  outline: none;
  background-color: var(--primary-600);
  color: var(--primary-400);
  height: 24px;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  padding-left: 4px;
`;

export const Option = styled.option`
  background-color: var(--primary-500);
`;

export const TagIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 2rem;
`;

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;

  > * {
    margin-left: 5px;
  }
`;

export const Separator = styled.div`
  border-bottom: 1px solid var(--primary-400);
  margin-top: 40px;
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const AddTags = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-weight: 400;
  color: var(--primary-400);
  &:hover {
    color: var(--royal-base);
    cursor: pointer;
  }
`;
