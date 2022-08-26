import React from 'react'
import { Box, Flex, Text, Image, Spacer, useDisclosure, Heading, Button } from "@chakra-ui/react";
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import logo from '../../image/logo.png';
import { useSelector,useDispatch} from 'react-redux';
import { logoutInit } from "../../Redux/Authreducer/action";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import {BsHandbag} from 'react-icons/bs'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentUser = useSelector((store) => store.authReducer.currentUser);
  const dispatch = useDispatch();
  const handleAuth=()=>{
    if(currentUser){
      dispatch(logoutInit())
    }
  }
  return (
    <>
      <Box className={styles.Navcontainer}>
        <Box className={styles.topBox}>
          <Text className={styles.toptext}><b className={styles.bold}>Free shipping</b> on all orders over $35!! </Text>
        </Box>
        <Box px={'50px'} py={'10px'} className={styles.navBox}>
          <Flex gap={6} alignItems={'center'} justifyContent={'center'}>
            <Link to="/">
              <Box height={'70px'} width={"200px"}>
                <Image
                  src={logo}
                  alt='logo'
                  height={'100%'}
                  width={'100%'}
                />
              </Box>
            </Link>
            <Menu isOpen={isOpen}>
              <MenuButton
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                Shop
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} style={{ width: "1350px", marginRight: "17px", marginTop: "10px", fontSize: "16px", padding:"30px 20px ",}}>
                <Box>
                  <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Box  mx={5} p={10}  style={{ width: "100%", lineHeight:"18px" }}>
                      <Flex justifyContent={'space-between'}>
                        <Box>
                          <Heading size={'md'}>&nbsp;&nbsp;Herbal Supplements</Heading><br />
                          <MenuItem>single Herbs Supplements</MenuItem>
                          <MenuItem>Multi-Ingredient Supplements</MenuItem>
                        </Box>
                        <Box>
                          <Heading size={'md'}>&nbsp;&nbsp;Oral Care</Heading><br />
                          <MenuItem>Adult Toothpaste</MenuItem>
                          <MenuItem>Kids Toothpaste</MenuItem>
                        </Box>
                        <Box>
                          <Heading size={'md'}>&nbsp;&nbsp;Personal Care</Heading><br />
                          <MenuItem>Face Care</MenuItem>
                          <MenuItem>Cleansing Bars</MenuItem>
                          <MenuItem>Balm</MenuItem>
                        </Box>
                      </Flex>
                      <hr />
                      <br />
                      <Flex justifyContent={'space-between'}>
                        <Box textAlign={'left'}>
                          <Heading size={'md'}>&nbsp;&nbsp;Health Interests</Heading>
                          <br />
                          <MenuItem>Blood Sugar</MenuItem>
                          <MenuItem>Brain & Cognitive</MenuItem>
                          <MenuItem>Digestion</MenuItem>
                          <MenuItem>Energy & Vitality</MenuItem>
                          <MenuItem>Hair, Skin & Nails</MenuItem>
                        </Box>
                        <Box>
                          <br />
                          <br/>
                          <MenuItem>Heart & cardio</MenuItem>
                          <MenuItem>Immune Support</MenuItem>
                          <MenuItem>Joint & Mobility</MenuItem>
                          <MenuItem>Liver & Cleanse</MenuItem>
                          <MenuItem>Men's Wellness</MenuItem>
                        </Box>
                        <Box>
                          <br />
                          <br/>
                          <MenuItem>Respiratory </MenuItem>
                          <MenuItem>Sleep </MenuItem>
                          <MenuItem>Stress & Mood</MenuItem>
                          <MenuItem>Urinary </MenuItem>
                          <MenuItem>Weight Management</MenuItem>
                          <MenuItem>Women's Wellness</MenuItem>
                        </Box>
                      </Flex>
                    </Box>

                    <Box p={5} style={{ width:"40%", textAlign:"center" }}>
                      <Image
                        src='https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA_Ashwagandha_90ct_Carton_Bottle_410x.jpg?v=1603142607'
                        alt="menu_image"
                      />
                      <Button mt={-10} colorScheme={'red'}>Featured Product</Button>
                      <Text> Find out why everyone loves bestselling Organic Ashwagandha</Text>
                    </Box>
                  </Flex>
                </Box>
              </MenuList>
            </Menu>
            <Link to='/'>
              <Text>About</Text>
            </Link>
            <Link to='/'>
              <Text>store Locator</Text>
            </Link>
            <Spacer />
            <Link to="/">{currentUser?currentUser.email:""}</Link>
            <Link title='Search' to="/"><Search2Icon /></Link>
            <Menu>
              <MenuButton title='My Account' >
                <i class="fa-regular fa-user"></i>
              </MenuButton>
              <MenuList mt={5} fontSize="16px">
                <Flex flexDirection={'column'} justifyContent={'center'} px={8} py={5} >
                  <Link to='/login'><button onClick={handleAuth}>{currentUser?"Logout":"Sign In"}</button></Link>
                  <Link to='/registration'>Register</Link>
                  <Link to='/checkout'>CheckOut</Link>
                </Flex>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton title='Cart' >
               <BsHandbag />
              </MenuButton>
              <MenuList>
                <Box style={{ height: "300px", width: "400px" }}>
                  <Text>No product in the cart</Text>
                </Box>
              </MenuList>
            </Menu>
            <Link to="/"></Link>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Navbar