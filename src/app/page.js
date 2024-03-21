"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/navbar";
import ProgressBar from '../../components/progressbar';
import Ages_Container from '../../components/ages_container';
import PhotoCarousel from '../../components/PhotoCarousel';
import { Container } from 'react-bootstrap';
import '../app/globals.css';
import Ed_Web from '../../components/educational_websites';
import FunVideos from '../../components/fun_videos';
import Link from 'next/link';
import Web_Sliders from '../../components/websites_slider';
import data from '../../components/websites.json';
import styles from '../../components/websites_slider.module.css';
import new_styles from '../../components/nav-bar-buttons.module.css';
import React, {useState,useEffect} from 'react';
import Image from 'next/image';

const images = [
  { src: '/images/background_original.jpeg', alt: 'First slide', label: 'Welcome to FunLearning!!', description: 'This is a place for kids to explore and learn!' },
  { src: '/images/kid_raising_original.jpg', alt: 'Second slide', label: 'Educational videos', description: 'links for teachings from professionals, come check it out!!' },
  { src: '/images/college_original.jpg', alt: 'Third slide', label: 'About us', description: 'This website shows education resources for different ages' }
];
const websites = [
  { src: 'https://kids.nationalgeographic.com/',name:'National Geograhic kids',description:"It's for kids.", img_src:'/images/national-geographic-kids-vector-logo.png',lead_description:"Visit National Geographic Kids today!"},
  { src: 'https://thecrashcourse.com/',name:'Crash Course',description:"educate yourself!", img_src:'/images/cc.png',lead_description:"From courses like Astronomy to US History and Anatomy & Physiology it's got you covered with an awesome variety of AP high school curriculum topics. With various witty hosts at your service, you won't even notice you're getting smarter."},
  { src: 'https://www.khanacademy.org/',name:'Khan academy',description:"self-learning", img_src:'/images/khan.png',lead_description:"Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history, and more."},
];
const websites_car = data;

export default function HomePage() {
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
    setPosition(Math.min(newPosition, 0));
  };
  const handleScrollRight = () => {
    // setPosition(prePosition => prePosition-100)
    const newPosition = position - 100;
    const maxPosition = -(containerWidth-window.innerWidth);
    setPosition(Math.max(Math.min(newPosition, 0),maxPosition));
  };

  const intro_title_styles={
        fontFamily: "Arial",
        textAlign: "center",
        fontSize: "45px",
        textTransform: "uppercase",
        fontWeight: "bolder",
        wordSpacing: "12px",
        color: "rgba(0,0,0,0.5)",
        padding: "20px",
        marginTop: "30px",
        marginBottom: "-30px",
  }
  return (
    <body className='body'>
      <Navbar />
      <ProgressBar />
      <div style ={{marginTop:'70px'}}>
      <PhotoCarousel images={images} />
      </div>
      <Ages_Container />
      <Container className="text-center">
        <hr className="featurette-divider"></hr>
        <h2 style = {intro_title_styles}>Explore popular websites</h2><br/>
        <div className={styles.row_n}>
            <div className={styles.row__inner} style = {{transform: `translateX(${position}%)`}}>
              <Web_Sliders websites_car={websites_car}/>
            </div>
        </div>
        <button className={styles.left_btn}>
          < Image src = "/images/left_arrow.png"  width={50} height={40} onClick={handleScrollLeft} alt ='left'/>
        </button>
        <button className={styles.right_btn}>
          <Image src = "/images/right_arrow.png" width={50} height={40} onClick={handleScrollRight} alt = 'right'/>
        </button>
        <hr className="featurette-divider"></hr>
        <h2 style = {intro_title_styles}>fun videos</h2><br/>
        <FunVideos/>
        <hr className="featurette-divider"></hr>
        <h2 style = {intro_title_styles}>Educational websites</h2>
      </Container>
      <Container styles={{padding:'1px'}}>
      <Ed_Web websites={websites}/>
      <footer className="container">
        <Link className=" btn float-end" href = "/"><button className={new_styles.footer_btn}>Back to top</button></Link>
        <p>&copy; FunLearning Company, Inc. &middot; <a href="/" style={{ textDecoration: 'none' }}>About us</a></p>
      </footer>
      </Container>
    </body>
  );
}
