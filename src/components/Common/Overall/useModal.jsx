import { useState } from 'react';

const useModal = () => {
  const [isWatch, setIsWatch] = useState(false);

  function Popup() {
    setIsWatch(!isWatch);
  }

  return {
    isWatch,
    Popup,
  }
};

export default useModal;