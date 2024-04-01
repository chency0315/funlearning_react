import styles from './websites_slider.module.css';
import Image from 'next/image';
import websites from './websites.json';
import { useState, useEffect } from 'react';

export default function Web_Sliders({websites_car = websites}){

    const [position, setPosition] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const container = document.querySelector(`.${styles.row_n}`);
    if (container) {
      setContainerWidth(container.scrollWidth);
    }
  }, []);
  const handleScrollLeft = () => {
    // setPosition(prePosition => prePosition+100)
    const newPosition = position + 100;
    setPosition(Math.min(newPosition,0));
  };
  const handleScrollRight = () => {
    const container = document.querySelector(`.${styles.row_n}`);
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      setPosition(Math.max(position - 100, -maxScroll));
    }
  };

    return(
        <div>
        <div className={styles.row_n}>
            <div className={styles.row__inner} style = {{transform: `translateX(${position}%)`}}>
            {websites_car.map((website,index)=>(
                <div className={styles.tile} key = {index}>
                    <div className={styles.tile__media}>
                        <a href = {`${website.link}`}><Image class={styles.tile__img} src={website.img_src} alt=""  width={250}
  height = {155}/></a>
                </div>
                    <div className={styles.tile__details}>
                    <div className={styles.tile__title}>
                        <a className = {styles.word_n} href = {website.link}>{website.name}</a>
                    </div>
                </div>
                </div>
            )
        )} 
        </div>
    </div>  
        <button className={styles.left_btn}>
          < Image src = "/images/left_arrow.png"  width={40} height={40} onClick={handleScrollLeft} alt ='left'/>
        </button>
        <button className={styles.right_btn}>
          <Image src = "/images/right_arrow.png" width={40} height={40} onClick={handleScrollRight} alt = 'right'/>
        </button>
    </div>
    );
}

