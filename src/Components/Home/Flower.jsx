import { Box } from "@chakra-ui/react";
import styles from "./Flower.module.css";

const Flower=()=>{
    return(
      <Box>
        
        <div className={styles.unlock}>
   <div>
    <img className={styles.flow} src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/StressCareA-Main-647x1024.png?v=1591359475"/>
   </div>
   <div>
   <h1 className={styles.wisdom}>Unlock the Wisdom of Herbs</h1>
   <span className={styles.with}>with Herbal Supplements, Toothpaste & More!</span>
   <p className={styles.since}>Since 1930, Himalaya has been passionate about the healing wisdom of herbs. We offer a wide range of clinically-
    <br/>studied herbal supplements, toothpaste and personal care products that unlock the powerful healing benefits of
    <br/> herbs.</p>
   </div>
     
        </div>
       
      </Box>



    )
}
export default Flower