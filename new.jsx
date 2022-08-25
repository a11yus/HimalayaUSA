import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Iconsoc,
} from "./Newstyle";
  
import {
    AiFillFacebook,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillYoutube,
  } from "react-icons/ai";
export const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Info</Heading>
            <FooterLink href="#">Contact US</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Store Locator</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
          </Column>
          <Column>
            <Heading>Policies</Heading>
            <FooterLink href="#">shiping& Returns</FooterLink>
            <FooterLink href="#">terms & condition</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">CCPA</FooterLink>
            <FooterLink href="#">Accessibility</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <Heading>Email:</Heading>
            <FooterLink href="#">writeous@himalayausa.com</FooterLink>
            <Heading>Phone:</Heading>
            <FooterLink href="#">1-800-869-4640</FooterLink>
            <Heading>Mail:</Heading>
            <FooterLink href="#">Himalaya Wellness</FooterLink>
            <FooterLink href="#">1101 Gillingham lane Sugar Land, TX 77478</FooterLink>
          </Column>
          <Column>
            <Heading>Subscribe to Our Newletter!</Heading>
            <input type="text" placeholder ="Enter Your e-mail"/>
                <FooterLink>By entering yout email, you agree to our terms & condition and Privacy Policy.</FooterLink>
                <Row>
                <Column >
                    
                    <Heading>Follow Us:</Heading>
                    <div style={{"display":"flex","margin":"-10px"}}>
                    <Iconsoc href="#"><AiFillFacebook/></Iconsoc>
                    <Iconsoc href="#"><AiOutlineTwitter/></Iconsoc>
                    <Iconsoc href="#"><AiFillInstagram/></Iconsoc>
                   <Iconsoc href="#"><AiFillYoutube/></Iconsoc>
                   </div>
                </Column>
                </Row>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
