import { useState } from 'react';

const useModal = () => {
  const [isSee, setIsSee] = useState(false);

  function Seeup() {
    setIsSee(!isSee);
  }

  return {
    isSee,
    Seeup,
  }
};

export default useModal;