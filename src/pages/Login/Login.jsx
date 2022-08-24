import { Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Box>
            <Container maxWidth={'400px'}>
                <Heading textAlign={'center'} color={'black'} fontWeight={'600'}>Already Registered</Heading><br/><br/>
                <Flex flexDirection={'column'} gap={8} >
                    <Box>
                        <Heading size={'lg'} color={'black'} fontWeight={'500'}>Login</Heading>
                    </Box>
                    <Box>
                        <Flex justifyContent={'space-between'} fontSize={'15px'}><label>E-mail<sup>*</sup></label><label><sup>*</sup>Required Fields</label></Flex>
                        <Input type='email' size={'md'} placeholder='Enter E-mail' />
                    </Box>
                    <Box>
                        <Text fontSize={'15px'}>Password <sup>*</sup></Text>
                        <Input size={'md'} type='password' placeholder='Enter Password' />
                    </Box>
                    <Box>
                       <Button colorScheme={'green'} width={'100%'}>LOGIN</Button>
                    </Box>
                    <Box>
                        <Text fontSize={'15px'} color={'black'}> Lost your password? </Text>
                    </Box>
                    <Box>
                        <Heading size={'lg'} color={'black'} fontWeight={'500'}>New Customer</Heading>
                    </Box>
                    <Box>
                        <Text>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more. </Text>
                    </Box>
                    <Box>
                       <Button colorScheme={'green'} width={'100%'}>CREATE AN ACCOUNT</Button>
                    </Box>
                    <br/>
                </Flex>
            </Container>
        </Box>
  )
}

export default Login