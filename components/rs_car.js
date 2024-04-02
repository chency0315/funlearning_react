import websites from './websites.json';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./rs_car.module.css";
export default function Rs_Car({websities}){
    const settings = {
      dots: true,
      infintie : true,
      speed:500,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay:true
    }
    return(
        <div className="App">
        <Slider {...settings}>
          {websites.map((website) => (
            <div className="wrap">
              <a href={website.link}>
                <img src={website.img_src} className={styles.img}/>
                </a>
            </div>
          ))}
        </Slider>
      </div>
    );
}