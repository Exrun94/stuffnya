import React from 'react';

export function useEditor() {
  const [readOnly, SetReadOnly] = React.useState(false);

  const changeEditorState = () => SetReadOnly(!readOnly);

  return { changeEditorState, readOnly }
}

