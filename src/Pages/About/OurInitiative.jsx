import React from 'react'
import { Box, Flex, Heading, Image} from '@chakra-ui/react'
const OurInitiative = () => {
  return (
    <Box>
         <Flex>
        <Box width={'50%'}>
            <Image height={'100%'} width={'100%'} src='https://i.shgcdn.com/a802e384-7312-4d13-bda1-8859e1afaecf/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='image' />
        </Box>
        <Box width={'50%'}>
            <Heading color={'green.900'}>Purity and Efficacy</Heading><br/>
            <p>The complexity and timing of the entire seed-to-shelf process for Himalaya and for the plants themselves, is highlighted by three important mandates: purity, efficacy, and batch-to-batch consistency.</p>
            <p>We know the success of traditional plant medicine is based on several integral parts that extend from the most advanced agricultural research and practices, to extraction methodologies, to formulating approaches and dosage strategies.</p>
            <p>To accomplish all of this, Himalaya maintains total control over the farming, harvesting, research, manufacturing, and distribution of all our products.</p>
            
        </Box>
    </Flex>
    <Flex>
    <Box width={'50%'}>
            <Heading color={'green.900'}>Our Farms</Heading><br/>
            <p>Himalaya's herbs are grown on over 1,000 acres of farmland through fair trade, farming partnerships. Herbs are also sustainably wildcrafted on over 5,000 acres.</p>
            <p>Farms are located in regions most suitable to the individual herb so that the best possible quality and potency are achieved in the harvest. Just as one wine grape has more character and flavor when grown in a very specific region, the plants used in healthcare often perform best when they’re grown and harvested in their own unique native soil.</p>
           
        </Box>
        <Box width={'50%'}>
            <Image height={'100%'} width={'100%'} src='https://i.shgcdn.com/6fdef74e-1e57-4bd4-8f3f-617132184feb/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='image' />
        </Box>
        
    </Flex>
    </Box>
  )
}

export default OurInitiative