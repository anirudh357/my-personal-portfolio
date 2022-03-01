import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey There! <br />
        Welcome To <br />            
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
         I am Anirudh, Aspiring Software Developer | Seeking internships | Hackerrank 5 ⭐ C++ | 2 ⭐ @CodeChef | DS Algo Learner | 2024 Graduation | I am passionate about coding and how to apply it in real life scenerio
      </SectionText>
      <Button onClick={() => window.location = 'https://www.hackerrank.com/anirudhsharma_31?hr_r=1'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;