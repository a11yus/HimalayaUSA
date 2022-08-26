import React from 'react'
import {Box} from '@chakra-ui/react'
// import styles from "./Mainpage.module.css";
import DisplayBox from '../../Components/Home/DisplayBox';
import Text from '../../Components/Home/Text';
import Flower from '../../Components/Home/Flower';
import Social from '../../Components/Home/Social';
import Insta from '../../Components/Home/Insta';
import Test from '../../Components/Home/Test';
import Slider from '../../Components/Home/Slider';


const Mainpage = () => {
  return (
    <Box >
    <DisplayBox/>
    <Text/>
    <Slider/>
    <Flower/>
    <Test/>
    <Social/>
    <Insta/>
    </Box>
  )
}

export default Mainpage