export const modules = {
  toolbar: [
    [
      'bold',
      'italic',
      'underline',
      'strike',
      { script: 'sub' },
      { script: 'super' },
    ],
    [{ header: 1 }, { header: 2 }],
    [
      { align: '' },
      { align: 'center' },
      { align: 'right' },
      { align: 'justify' },
    ],
    [
      { indent: '-1' },
      { indent: '+1' },
      { list: 'ordered' },
      { list: 'bullet' },
    ],
    [{ color: [] }, { background: [] }],
    ['link', 'image', 'video'],
    ['code-block', 'blockquote'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
  syntax: true,
};

export const modulesReadOnly = {
  toolbar: false,
  syntax: true,
  clipboard: {
    matchVisual: false,
  },
};

export const textFormats = [
  'font',
  'header',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'background',
  'color',
  'script',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'clean',
  'code-block',
  'indent',
  'list',
  'align',
];
