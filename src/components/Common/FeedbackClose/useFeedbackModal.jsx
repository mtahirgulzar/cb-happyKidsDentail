import { useState } from 'react';

const useModal = () => {
  const [islook, setIsLook] = useState(false);

  function lookUp() {
    setIsLook(!islook);
  }

  return {
    islook,
    lookUp,
  }
};

export default useModal;