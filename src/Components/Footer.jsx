import React from "react";
import {
  Box,
  Flex,
  Link,
  Heading,

} from "@chakra-ui/react";
  
import {
    AiFillFacebook,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillYoutube,
  } from "react-icons/ai";
export const Footer = () => {
  return (
  
        <Box p="3rem" bg="
        #eef2f0" mt="3rem">
     <Flex justifyContent="space-between">
     <Flex flexDirection="column">
            <Heading size="md" color="black" >Info </Heading><br/>
            <Link to="/">Contact US</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Store Locator</Link>
            <Link to="/">Careers</Link>
          </Flex>
          <Flex flexDirection="column">
            <Heading size="md" color="black" >Policies </Heading><br/>
            <Link to="/">shiping& Returns</Link>
            <Link to="/">terms & condition</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">CCPA</Link>
            <Link to="/">Accessibility</Link>
          </Flex>
          <Flex flexDirection="column">
            <Heading size="md" color="black" >Contact Us </Heading><br/>
            <Heading size="md"  >Email: </Heading>
            <Link to="/">writeous@himalayausa.com</Link>
            <Heading size="md" >Phone: </Heading>
            <Link to="/">1-800-869-4640</Link>
            <Heading size="md"  >Mail: </Heading>
            <Link to="/">Himalaya Wellness</Link>
            <Link to="/">1101 Gillingham lane Sugar Land, TX 77478</Link>
          </Flex>
          <Flex flexDirection="column">
            <Heading size="md" color="black" >Subscribe to Our Newletter! </Heading><br/>
            <input type="text" placeholder ="Enter Your e-mail"/>
                <Link>By entering yout email, <br/> you agree to our terms & condition <br/> and Privacy Policy.</Link>
                <Box>
                <Flex flexDirection="column">
                    
                    <Heading size="md" color="black" >Follow Us: </Heading><br/>
                    <div style={{"display":"flex","margin":"-10px",fontSize:"40px"}}>
                    <Link to="/"><AiFillFacebook/></Link>
                    <Link to="/"><AiOutlineTwitter/></Link>
                    <Link to="/"><AiFillInstagram/></Link>
                   <Link to="/"><AiFillYoutube/></Link>
                   </div>
                </Flex>
                </Box>
          </Flex>
     </Flex>
        </Box>
  
   
  );
};
