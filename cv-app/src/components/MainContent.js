import React from 'react';
import Box from './Box';

const MainContent = ({ isOpen }) => {
  const mainContentClasses = `transition-margin ${
    isOpen
      ? "-ml-4 sm:ml-[-5rem] md:ml-[-5rem] lg:ml-[-5rem]"
      : "ml-10 sm:ml-8 md:ml-10 lg:ml-10"
  }`;

  return (
    <div className={mainContentClasses}>
      <Box title="Text for the Title" content="Some Text" />
    </div>
  );
};

export default MainContent;

