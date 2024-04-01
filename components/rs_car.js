import websites from './websites.json';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./rs_car.module.css";
export default function Rs_Car(){
    return(
        <div className="App">
        <Slider>
          {websites.map((website) => (
            <div className="wrap">
              <img src={website.img_src} className={styles.img}/>
            </div>
          ))}
        </Slider>
      </div>
    );
}