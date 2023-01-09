import { useEffect, useState } from 'react';

const useTitle = (iniitialTitle: string) => {
  const [title, setTitle] = useState(iniitialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    if (htmlTitle) {
      htmlTitle.innerText = title;
    }
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default useTitle;
