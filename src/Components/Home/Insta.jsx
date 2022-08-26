import styles from "./Insta.module.css";
import {FaInstagram} from "react-icons/fa"

const card=[
    {
        img:"https://scontent.cdninstagram.com/v/t51.2885-15/279060214_1028931348020017_977861928696093797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=0HX1_OIczBgAX-clmvZ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_O3CDNlFiIsT8-D9PykHeJCFyWTIXoPG9yyZcYmbiLxw&oe=630CC887"
    },
    {
        img:"https://scontent.cdninstagram.com/v/t51.2885-15/210602775_2989071524684964_2920882526894167214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=JLnaEdQQBAEAX97_j_W&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-0rocL9iAdqKNAikPM3RsFvXh5sVhQ7asSkExUFktmgw&oe=630CA545",
    },
    {
        img:"https://scontent.cdninstagram.com/v/t51.2885-15/210602775_2989071524684964_2920882526894167214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=JLnaEdQQBAEAX97_j_W&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-0rocL9iAdqKNAikPM3RsFvXh5sVhQ7asSkExUFktmgw&oe=630CA545",
    },
    {
        img:"https://scontent.cdninstagram.com/v/t51.2885-15/204274359_2975479076040360_2380187042423867081_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=5BgTruXp-VoAX9iTNnN&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_CMC0WKWED3sToyfI0R76btf-2yyz6rzhZ8iRXyIZrVA&oe=630D2AEB"
    }
]







const Insta=()=>{
    return(
        
        <div className={styles.lady}>
            {card.map((item)=>(
                <div >
                    <div className={styles.container}>
                    <img src={item.img} className={styles.image} width="300px"/>
                    <div className={styles.middle}>
                        <div className={styles.text}> < FaInstagram size="20px" color="#a3b49b" /></div>
                        </div>
                   </div>
                </div>
            ))}


        </div>
        
    )
}
export default Insta