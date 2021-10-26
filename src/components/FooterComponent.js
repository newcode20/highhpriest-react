import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  Box,
  Container,
  Column, 
  Row,
  FooterLink,
  Heading
} from "./FooterStyles";

  
const Footer = () => {
  return (
    <Box>
      
      <Container>
        <Row style={{alignItems:'center'}}>
          <Column>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </Column>
          <Column style={{display:"inline-block", margin:"auto"}}>
            <Heading>Social</Heading>
            <FooterLink href="#" style={{margin:"auto", textDecoration:"none"}}> <FontAwesomeIcon icon={faInstagram} color="#517fa4" size="lg"/></FooterLink>
            <FooterLink href="#" style={{margin:"auto", textDecoration:"none"}}> <FontAwesomeIcon icon={faTwitter} color=" #00aced" size="lg"/></FooterLink>
            <FooterLink href="#" style={{margin:"5px"}}><FontAwesomeIcon icon={faYoutube} color="#bb0000" size="lg"/></FooterLink>
            
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">thehighhpriest@gmail.com</FooterLink>
          </Column>
          
        </Row>
      </Container>
    </Box>
  );
};

    
export default Footer;