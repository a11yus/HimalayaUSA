import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from './About.module.css'
import OurStory from './OurStory'
import OurRoots from './OurRoots'
import OurProcess from './OurProcess'
import OurScience from './OurScience'
import OurInitiative from './OurInitiative'

const About = () => {
    const [ourStory, setOurStory] = useState(false);
    const [ourRoots, setOurRoots] = useState(false);
    const [ourProcess, setOurProcess] = useState(false);
    const [ourScience, setOurScience] = useState(false);
    const [ourInitiative, setOurInitiative] = useState(false);

    const handleStory = () =>{
        setOurStory(true);
        setOurRoots(false);
        setOurProcess(false);
        setOurScience(false);
        setOurInitiative(false);
    }
    const handleRoots = () =>{
        setOurStory(false);
        setOurRoots(true);
        setOurProcess(false);
        setOurScience(false);
        setOurInitiative(false);
    }
    const handleProcess = () =>{
        setOurStory(false);
        setOurRoots(false);
        setOurProcess(true);
        setOurScience(false);
        setOurInitiative(false);
    }
    const handleScience = () =>{
        setOurStory(false);
        setOurRoots(false);
        setOurProcess(false);
        setOurScience(true);
        setOurInitiative(false);
    }
    const handleInitiative = () =>{
        setOurStory(false);
        setOurRoots(false);
        setOurProcess(false);
        setOurScience(false);
        setOurInitiative(true);
    }
    useEffect(()=>{
        setOurStory(true);
    },[])
    return (
        <Box>
            <Box className={styles.about_box}>
                <Flex justifyContent={'center'} color={'white'}>
                    <Flex flexDirection={'column'} textAlign={'center'} pt={150} width={'700px'} margin={'auto'}>
                        <Heading size={'2xl'}>Our Story</Heading>
                        <Text fontWeight={600} >Founded in 1930, Himalaya remains family owned withproducts offered in over 100 countries.</Text>
                    </Flex>
                </Flex>
            </Box>
            <Box>
                <Flex justifyContent={'space-around'} className={styles.menu_box}>
                    <Box><Button colorScheme={'green'} onClick={handleStory} >OUR STORY</Button></Box>
                    <Box><Button colorScheme={'green'} onClick={handleRoots}>OUR ROOTS</Button></Box>
                    <Box><Button colorScheme={'green'} onClick={handleProcess}>OUR PROCESS</Button></Box>
                    <Box><Button colorScheme={'green'} onClick={handleScience}>OUR SCIENCE</Button></Box>
                    <Box><Button colorScheme={'green'} onClick={handleInitiative}>OUR INITIATIVES</Button></Box>
                </Flex>
            </Box>
            <Box>
                {
                    ourStory?<OurStory />:""
                }
                {
                    ourRoots?<OurRoots/>:""
                }
                {
                    ourProcess?<OurProcess />:""
                }
                {
                    ourScience?<OurScience />:""
                }
                {
                    ourInitiative?<OurInitiative />:""
                }
            </Box>


        </Box>
    )
}

export default About