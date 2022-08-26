import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AllRoutes from './AllRoutes';
import {Footer} from "../Components/Footer"

const Layout = ({children}) => {
    return (
        <Box>
           <Navbar />
           <Box marginTop={'135px'}>
           <AllRoutes />
           </Box>
            {children}  
            <Footer/>
        </Box>
      )
}

export default Layout