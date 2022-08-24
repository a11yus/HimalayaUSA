import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AllRoutes from './AllRoutes'

const Layout = ({children}) => {
    return (
        <Box>
           <Navbar />
           <Box marginTop={'135px'}>
           <AllRoutes />
           </Box>
            {children}  
        </Box>
      )
}

export default Layout