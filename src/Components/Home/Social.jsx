import styles from "./Social.module.css"
import {FaFacebookF,FaInstagram} from "react-icons/fa"

const Social=()=>{
    return(
        <div className={styles.email}>
            <div>
                <h3 className={styles.us}>Follow us @himalayausa</h3>
            </div>
            <div className={styles.facebook}>
            <a href="https://www.instagram.com/himalayausa"><FaInstagram  size="40px" color="#a3b49b" /></a>
            <a href="https://www.facebook.com/HimalayaUSA "><FaFacebookF size="40px" color="#a3b49b" /></a>
           
            </div>
            

        </div>
    )
}
export default Social;