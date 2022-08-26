
import styles from "./DisplayBox.module.css"
import { Box, Button} from '@chakra-ui/react'
const DisplayBox=()=>{
    return(
        <Box>
        <div className={styles.top}>
        <div className={styles.back}>
            <div  className={styles.ash}>
            <div  className={styles.gandha}>ASHWAGANDHA</div>
        <p className={styles.star}>A star performer for stress and energy in a <br/>potent, organic caplet.</p>
     <button className={styles.blue}  ><a href="">SHOP NOW</a></button> 
     </div>
        </div>
        </div>
        </Box>

    )
}
export default DisplayBox