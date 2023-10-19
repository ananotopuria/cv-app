import React from 'react';
import Box from './Box';
import Timeline from '../components/Timeline';
import Expertise from '../components/Expertise';
import Portfolio from '../components/Portfolio';
import Feedback from '../components/Feedback';
import userimage from '../assets/images/userimage.png';
import Address from '../components/Address';


const MainContent = ({ isOpen }) => {
  const mainContentClasses = `transition-margin ${
    isOpen
      ? "-ml-4 sm:ml-[-5rem] md:ml-[-5rem] lg:ml-[-5rem]"
      : "ml-10 sm:ml-8 md:ml-10 lg:ml-10"
  }`;
  return (
    <div className={mainContentClasses}>
      <Box title="About me" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque" />
      <Box title="Education"/>
      <Timeline
          id="education"
          data={[
            {
              date: 2016,
              title: 'Bachelors degree, law',
              text: 'Caucasus University',
            },
            {
              date: 2019,
              title: 'Masters degree, law',
              text: 'Georgian Technical University',
            },
            {
              date: 2023,
              title: 'Learn Digital Platform - EPAM',
              text: 'EPAM',
            },
          ]}
        />
        <Box title="Experience" />
        <Expertise
          id="experience"
          data={[
            {
              date: '2020 – 2022',
              info: {
                company: 'Adjara group',
                job: 'UX/UI Designer',
                description:
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
              },
            },
            {
              date: '2023',
              info: {
                company: 'Google',
                job: 'Front-End Developer',
                description:
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
              },
            },
          ]}
        />
      <Box title="Skills" />
      <Box title="Portfolio" />
      <Portfolio />
      <Box title="Contact" />
      <Address id="contacts"/>
      <Box title="Feedback" />
      <Feedback
          data={[
            {
              feedback:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  ',
              reporter: {
                photoUrl: userimage,
                name: 'John Doe Programer',
                citeUrl: 'https://www.citeexample.com',
              },
            },
            {
              feedback:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  ',
              reporter: {
                photoUrl: userimage,
                name: 'John Doe Programer',
                citeUrl: 'https://www.citeexample.com',
              },
            },
          ]}
          id="feedback"
          
        />

    </div>
  );
};

export default MainContent;
