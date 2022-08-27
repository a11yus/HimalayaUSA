import React from 'react'
import { Box, Flex, Heading, Image} from '@chakra-ui/react'

const OurProcess = () => {
  return (
    <Box px={10}>
    <Flex>
        <Box width={'50%'} p={7}>
            <Image height={'100%'} width={'100%'} src='https://i.shgcdn.com/a802e384-7312-4d13-bda1-8859e1afaecf/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='image' />
        </Box>
        <Box width={'50%'} p={7}>
            <Heading color={'green.900'}>Purity and Efficacy</Heading><br/>
            <p>The complexity and timing of the entire seed-to-shelf process for Himalaya and for the plants themselves, is highlighted by three important mandates: purity, efficacy, and batch-to-batch consistency.</p>
            <p>We know the success of traditional plant medicine is based on several integral parts that extend from the most advanced agricultural research and practices, to extraction methodologies, to formulating approaches and dosage strategies.</p>
            <p>To accomplish all of this, Himalaya maintains total control over the farming, harvesting, research, manufacturing, and distribution of all our products.</p>
            
        </Box>
    </Flex>
    <Flex>
    <Box width={'50%'}  p={7}>
            <Heading color={'green.900'}>Our Farms</Heading><br/>
            <p>Himalaya's herbs are grown on over 1,000 acres of farmland through fair trade, farming partnerships. Herbs are also sustainably wildcrafted on over 5,000 acres.</p>
            <p>Farms are located in regions most suitable to the individual herb so that the best possible quality and potency are achieved in the harvest. Just as one wine grape has more character and flavor when grown in a very specific region, the plants used in healthcare often perform best when they’re grown and harvested in their own unique native soil.</p>
           
        </Box>
        <Box width={'50%'}  p={7}>
            <Image height={'100%'} width={'100%'} src='https://i.shgcdn.com/6fdef74e-1e57-4bd4-8f3f-617132184feb/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='image' />
        </Box>
        
    </Flex>
    <Box  p={7}>
        <p>Himalaya chooses farm lands based on soil fertility, suitability and quality, visiting the selected land first to ensure the land is free from soil and water erosion, free from pollution and away from industrial zones, free from municipal waste and the flow of rain water from neighboring fields.</p>
        <p>Farmers are trained in preparing the land, through to post-harvest management of the herbs, and even in proper drying, packaging, storing and labeling.</p>
        <p>Himalaya’s farmers use only authenticated starting materials; viable seeds with a good germination percentage. A respective Package of Practices (POP) assures adherence to quality, sustainability and careful environmental stewardship at all times.</p>
        <p>In addition to initial training, two residential workshops are conducted per year, and supervisors visit the farmer’s field regularly to check for compliance in areas such as proper crop management, no chemical usage, no child labor, and appropriate labor hours for adults. Violations do not occur.</p>
        <p>Farmers are trained on earth-friendly organic practices, soil bed preparation, proper irrigation, fertilization and sustainable harvesting, crop rotation, cover crop cultivation and organic soil enrichment. No pesticides are allowed to be used.</p>
    </Box>
</Box>
  )
}

export default OurProcess