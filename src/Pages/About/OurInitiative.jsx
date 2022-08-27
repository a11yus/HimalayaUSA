import React from 'react'
import { Box, Flex, Heading, Image } from '@chakra-ui/react'
const OurInitiative = () => {
    return (
        <Box>
            <Flex>

                <Box width={'50%'} p={7}>
                    <Heading color={'green.900'}>Biodiversity Conservation for Sustainable Living</Heading><br />
                    <p>The complexity and timing of the entire seed-to-shelf process for Himalaya and for the plants themselves, is highlighted by three important mandates: purity, efficacy, and batch-to-batch consistency.</p>
                    <p>We know the success of traditional plant medicine is based on several integral parts that extend from the most advanced agricultural research and practices, to extraction methodologies, to formulating approaches and dosage strategies.</p>
                    <p>To accomplish all of this, Himalaya maintains total control over the farming, harvesting, research, manufacturing, and distribution of all our products.</p>

                </Box>
                <Box width={'50%'} p={5}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/brv43nDmNgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Box>
            </Flex>
            <Flex>
                <Box width={'50%'} p={7}>
                    <Image height={'100%'} width={'100%'} src='https://i.shgcdn.com/6288998b-545b-4de3-946e-6317b6fe72f6/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='image' />
                </Box>
                <Box width={'50%'} p={7}>
                    <Heading color={'green.900'}>Commitment to Farmers</Heading><br />
                    <p>Himalaya's herbs are grown on over 1,000 acres of farmland through fair trade, farming partnerships. Herbs are also sustainably wildcrafted on over 5,000 acres.</p>
                    <p>Farms are located in regions most suitable to the individual herb so that the best possible quality and potency are achieved in the harvest. Just as one wine grape has more character and flavor when grown in a very specific region, the plants used in healthcare often perform best when they’re grown and harvested in their own unique native soil.</p>

                </Box>


            </Flex>
            <Flex>

                <Box width={'50%'} p={7}>
                    <Heading color={'green.900'}>Partnership with Vitamin Angels</Heading><br />
                    <p>Farms are located in regions most suitable to the individual herb so that the best possible quality and potency are achieved in the harvest. Just as one wine grape has more character and flavor when grown in a very specific region, the plants used in healthcare often perform best when they’re grown and harvested in their own unique native soil.</p>
                    <p>Himalaya's herbs are grown on over 1,000 acres of farmland through fair trade, farming partnerships. Herbs are also sustainably wildcrafted on over 5,000 acres.</p>
                    <p>Farms are located in regions most suitable to the individual herb so that the best possible quality and potency are achieved in the harvest. Just as one wine grape has more character and flavor when grown in a very specific region, the plants used in healthcare often perform best when they’re grown and harvested in their own unique native soil.</p>

                </Box>

                <Box width={'50%'} p={7}>
                    <Image height={'100%'} width={'100%'} src='https://i.shgcdn.com/68587d5b-0706-4d21-b1f1-59e35de255e8/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='image' />
                </Box>
            </Flex>
        </Box>
    )
}

export default OurInitiative