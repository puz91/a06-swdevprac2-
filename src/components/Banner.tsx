import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={'/img/event.jpg'} 
            alt="Event" 
            fill={true}
            priority={true}
            style={{ objectFit: 'cover' }} />
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>where every event finds its venue</h1>
                <h3 className='text-xl font-serif'>Find the cool event venues you're looking for here.</h3>
            </div>
        </div>
        
    );
}