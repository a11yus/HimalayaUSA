import styles from "./Text.module.css";
import {Link} from 'react-router-dom';

const text=[
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1607451904",
        head:"Supplements",
        des:"See All Supplements"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_1024x.png?v=1607451904",
        head:"Oral Care",
        des:"See All Oral Care"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/files/Face_Wash-Balancing-Box-Bottle-square_1024x.png?v=1607451904",
        head:"Personal Care",
        des:"See All Personal Care"
    }
]





const Text=()=>{
    return(
        <div >
            <h3 className={styles.by}>Shop By Category</h3>
            <Link to='/productPage'>
        <div className={styles.shop} >
            {text.map((item)=>(
                <div className={styles.cat}>
                <img src={item.img} width="380px"/>
              <a><h2 className={styles.black}>{item.head}</h2></a>
               <p className={styles.see}>{item.des}</p>
                </div>
            ))}

        </div>
        </Link>
        </div>
    )
}
export default Text;