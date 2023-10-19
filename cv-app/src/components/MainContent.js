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
      <Box title="About me" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque" />
      <Box title="Education" content="" />
      
    </div>
  );
};

export default MainContent;

