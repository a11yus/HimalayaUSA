import { Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Registration = () => {
    return (
        <Box>
            <Container maxWidth={'400px'}>
                <Heading textAlign={'center'} color={'black'} fontWeight={'600'}>Create An Account</Heading><br/><br/>
                <Flex flexDirection={'column'} gap={8} >
                    <Box>
                        <Heading size={'lg'} color={'black'} fontWeight={'500'}>Personal Information</Heading>
                    </Box>
                    <Box>
                        <Flex justifyContent={'space-between'} fontSize={'15px'}><label>First Name<sup>*</sup></label><label><sup>*</sup>Required Fields</label></Flex>
                        <Input type='text' size={'md'} placeholder='Enter First Name' />
                    </Box>
                    <Box>
                        <Text fontSize={'15px'}>Last Name <sup>*</sup></Text>
                        <Input type='text' size={'md'} placeholder='Enter Last Name' />
                    </Box>
                    <Box>
                        <Text fontSize={'15px'}>Email <sup>*</sup></Text>
                        <Input type='email' size={'md'} placeholder='Enter Email' />
                    </Box>
                    <Box>
                        <Text fontSize={'15px'}>Password <sup>*</sup></Text>
                        <Input type='password' size={'md'} placeholder='Enter Password' />
                    </Box>
                    <Box>
                       <Button colorScheme={'green'} width={'100%'}>Create</Button>
                    </Box>
                    <Box>
                        <Text fontSize={'15px'} color={'black'}>or Return To Store</Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Registration