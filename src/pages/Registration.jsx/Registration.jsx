import { Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { signupInit } from "../../Redux/AuthReducer/action";

const Registration = () => {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const currentUser = useSelector((store) => store.AuthReducer.currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser) {
            navigate('/checkout')
        }
    }, [currentUser, navigate])

    const { displayName, email, password, confirmPassword } = state;
   

    const handleChange = (e) => {
        
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password.length < 6){
            alert("Enter more than 6 digit password")
        }
        if (password !== confirmPassword) {
            return
        }
        dispatch(signupInit(email, password, displayName))
       // setState({ email: "", password: "", displayName: "", confirmPassword: "" })
    };
    return (
        <Box>
            <Container maxWidth={'400px'}>
                <Heading textAlign={'center'} color={'black'} fontWeight={'600'}>Create An Account</Heading><br /><br />
                <form onSubmit={handleSubmit}>
                <Flex flexDirection={'column'} gap={8} >
                    <Box>
                        <Heading size={'lg'} color={'black'} fontWeight={'500'}>Personal Information</Heading>
                    </Box>
                   
                        <Box>
                            <Flex justifyContent={'space-between'} fontSize={'15px'}><label>First Name<sup>*</sup></label><label><sup>*</sup>Required Fields</label></Flex>
                            <Input
                                type='text'
                                size={'md'}
                                placeholder='Enter Name'
                                name="displayName"
                                value={displayName}
                                onChange={handleChange}
                            />
                        </Box>
                        <Box>
                            <Text fontSize={'15px'}>Email <sup>*</sup></Text>
                            <Input
                                type='email'
                                size={'md'}
                                name="email"
                                value={email}
                                placeholder='Enter Email'
                                onChange={handleChange}
                                required
                            />
                        </Box>
                        <Box>
                            <Text fontSize={'15px'}>Password <sup>*</sup></Text>
                            <Input
                                type='password'
                                size={'md'}
                                placeholder='Enter Password'
                                name="password"
                                value={password}
                                onChange={handleChange}
                                required
                            />
                        </Box>
                        <Box>
                            <Text fontSize={'15px'}>Confirm Password <sup>*</sup></Text>
                            <Input
                                type='password'
                                size={'md'}
                                name="confirmPassword"
                                value={confirmPassword}
                                placeholder="repeat Password"
                                onChange={handleChange}
                                required
                            />
                        </Box>
                        <Box>
                            <Button colorScheme={'green'} width={'100%'} type='submit' >Create</Button>
                        </Box>
                        <Box>
                            <Text fontSize={'15px'} color={'black'}>or Return To Store</Text>
                        </Box>
                </Flex>
                </form>
            </Container>
        </Box>
    )
}

export default Registration