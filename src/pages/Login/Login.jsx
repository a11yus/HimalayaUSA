import { Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { googleSigninInit, loginInit } from "../../Redux/Authreducer/action";

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
      });
    
      const { email, password } = state;
      const currentUser = useSelector((store) => store.AuthReducer.currentUser);
      const dispatch = useDispatch();
      const navigate = useNavigate();
      
          

      useEffect(() => {
        if (currentUser) {
          navigate("/");
        }
      }, [currentUser, navigate]);
    

      const handleGoogleSignin = () =>{
        dispatch(googleSigninInit());
      }  


      const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
          return;
        }
        if(password.length < 6){
            alert("Enter more than 6 digit password")
        }
        dispatch(loginInit(email, password));
        setState({ email: "", password: "" });
      };
    return (
        <Box>
            <Container maxWidth={'400px'}>
                <Heading textAlign={'center'} color={'black'} fontWeight={'600'}>Already Registered</Heading><br /><br />
                
                    <Flex flexDirection={'column'} gap={8} >
                        
                        <Box>
                            <Heading size={'lg'} color={'black'} fontWeight={'500'}>Login</Heading>
                        </Box>
                        <form onSubmit={handleSubmit}>
                        <Button onClick={handleGoogleSignin} width={'100%'} colorScheme={'red'}>Login With Google</Button><br/><br/>
                        <Box>
                            <Flex justifyContent={'space-between'} fontSize={'15px'}><label>E-mail<sup>*</sup></label><label><sup>*</sup>Required Fields</label></Flex>
                            <Input
                                type='email'
                                size={'md'}
                                placeholder='Enter E-mail'
                                name="email"
                                value={email}
                                onChange={handleChange}
                                required
                            />
                        </Box>
                        <br/>
                        <Box>
                            <Text fontSize={'15px'}>Password <sup>*</sup></Text>
                            <Input
                                size={'md'}
                                type='password'
                                placeholder='Enter Password'
                                name="password"
                                value={password}
                                onChange={handleChange}
                                required
                            />
                        </Box>
                        <br/>
                        <Box>
                            <Button type='submit' colorScheme={'green'} width={'100%'}>LOGIN</Button>
                        </Box>
                        </form>
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
                            <Button colorScheme={'green'} width={'100%'}><Link to='/registration'>CREATE AN ACCOUNT</Link></Button>
                        </Box>
                        <br />
                    </Flex>
                
            </Container>
        </Box>
    )
}

export default Login