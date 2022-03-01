import React from 'react';
import { DiCodeBadge, DiDropbox, DiFirebase, DiGitPullRequest, DiGoogleCloudPlatform, DiPostgresql, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="skills">
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I am working with a range of technologies in Computer Science field as my passion.
    </SectionText>
    <List>
      <ListItem>
         <DiCodeBadge size="3rem" />
         <ListContainer>
           <ListTitle>C++</ListTitle>
           <ListParagraph>
              Hackerrank <br />
              5 star
           </ListParagraph>
         </ListContainer>
      </ListItem>
      <ListItem>
         <DiPostgresql size="3rem" />
         <ListContainer>
           <ListTitle>SQL</ListTitle>
           <ListParagraph>
              Hackerrank <br />
              3 star
           </ListParagraph>
         </ListContainer>
      </ListItem>
    <ListItem>
         <DiDropbox size="3rem" />
         <ListContainer>
           <ListTitle>Problem-Solving</ListTitle>
           <ListParagraph>
              Codechef <br />
              2 star
           </ListParagraph>
         </ListContainer>
      </ListItem>
      <ListItem>
         <DiReact size="3rem" />
         <ListContainer>
           <ListTitle>Front-End</ListTitle>
           <ListParagraph>
              Experience with <br />
              React.js projects
           </ListParagraph>
         </ListContainer>
      </ListItem>
      <ListItem>
         <DiFirebase size="3rem" />
         <ListContainer>
           <ListTitle>Back-End</ListTitle>
           <ListParagraph>
              Experience with <br />
              Node and Databases
           </ListParagraph>
         </ListContainer>
      </ListItem>
      <ListItem>
         <DiGoogleCloudPlatform size="3rem" />
         <ListContainer>
           <ListTitle>API</ListTitle>
           <ListParagraph>
              Experience with <br />
              API working
           </ListParagraph>
         </ListContainer>
      </ListItem>
    </List>  
  </Section>
);

export default Technologies;
