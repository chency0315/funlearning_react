import styles from './websites_slider.module.css';
import Image from 'next/image';
export default function Web_Sliders({websites_car}){
    return(
            websites_car.map((website,index)=>(
                <div className={styles.tile} key = {index}>
                    <div className={styles.tile__media}>
                        <a href = {`${website.link}`}><Image class={styles.tile__img} src={website.img_src} alt="" /></a>
                </div>
                    <div className={styles.tile__details}>
                    <div className={styles.tile__title}>
                        <a className = {styles.word_n} href = {website.link}>{website.name}</a>
                    </div>
                </div>
                </div>
            )
        )       
    );
}