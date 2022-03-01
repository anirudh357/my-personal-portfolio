import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
         <LinkColumn>
           <LinkTitle>Call</LinkTitle>
           <LinkItem href="tel:+91-9354637449">+91-9354637449</LinkItem>
         </LinkColumn>
         <LinkColumn>
           <LinkTitle>Email</LinkTitle>
           <LinkItem href="mailto:anirudhsharma.3578@gmail.com">anirudhsharma.3578@gmail.com</LinkItem>
         </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>The Best Way You can Predict The Future is To Create It </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/anirudh357">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/anirudh-sharma-33b592189/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/anirudh867/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
