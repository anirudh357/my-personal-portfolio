import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 6, text: 'Open Source Projects'},
  { number: 2, text: '⭐ Codechef CP', },
  { number: 5, text: '⭐ Hackerrank and 3 ⭐ SQL', },
  { number: 2, text: 'Professional Certificates from Google and IBM', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
         <BoxNum>{card.number}+</BoxNum>
         <BoxText>{card.text}</BoxText>
        </Box> 
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
