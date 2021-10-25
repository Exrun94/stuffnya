import { useState } from 'react';

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const close = () => setToggle(false);
  const open = () => setToggle(true);

  return { toggle, close, open };
};

export default Toggle;
