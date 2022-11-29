import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function SocialIcons() {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='flex text-5xl justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
      <AiFillLinkedin
        className='cursor-pointer'
        onClick={() =>
          openInNewTab('https://www.linkedin.com/in/kerolos-fawzy-07381a117/')
        }
      />
      <AiFillGithub
        className='cursor-pointer'
        onClick={() => openInNewTab('https://github.com/kerolosFawzy')}
      />
    </div>
  );
}

export default SocialIcons;
