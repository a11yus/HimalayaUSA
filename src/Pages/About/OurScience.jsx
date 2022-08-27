import React from 'react'
import { Box, Flex, Heading, Image} from '@chakra-ui/react'

const OurScience = () => {
  return (
    <Box>
         <Flex>
        <Box width={'50%'} p={4}>
            <Image height={'100%'} width={'100%'} src='https://i.shgcdn.com/a094b44f-0f48-4abf-b25b-549315cc3d98/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='image' />
        </Box>
        <Box width={'50%'} p={4}>
            <Heading color={'green.900'}>Our Science</Heading><br/>
           <p>Himalaya's core interest has always been to ensure the health benefits of our herbal formulas and standalone solo herbs with product-specific, double-blind, placebo-controlled human clinical trials on all of our products.</p>
           <p>Our commitment to Ayurvedic principles, and research to produce natural, safe, and effective health products is driven by our soul mission, which is to help individual people maintain a healthy, long, and high-quality of life. We like to think of ourselves as providing solutions for you, which helps make our world well, one person at a time.</p>
           <p>We take pride in the fact that our formulas undergo years of primary research before we offer them to you. Our commitment to ensure we have product-specific science on hand before we launch a product into the marketplace is exceptional within the natural products industry.</p>
           <p>Himalaya has conducted over 1,200 clinical studies, many of which have been published in numerous, highly-regarded medical journals including The European Journal of Pharmacology, Phytotherapy Research, The Indian Journal of Clinical Practice, Australian Journal of Medical Herbalism, and JAMA, India.</p>
        </Box>
    </Flex>
    <Flex>
    <Box width={'50%'} p={5}>
            <Heading color={'green.900'}>Our Distribution</Heading><br/>
            <p>After being grown, manufactured and packaged in India, finished Himalaya products are shipped to our North American corporate office, warehouse and distribution center located in Sugar Land, Texas.</p>
            <p>Here we maintain state-of-the-art storage and shipping processes in climate-controlled environments until our products make their way to our retailers, and then to your home.</p>
       
        </Box>
        <Box width={'50%'}>
            <Image height={'100%'} width={'100%'} src='https://i.shgcdn.com/5a1a59af-3931-4d16-bff2-004468e44137/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='image' />
        </Box>
        
    </Flex>
    </Box>
  )
}

export default OurScience