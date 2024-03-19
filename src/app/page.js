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

const images = [
  { src: '/images/background1.jpeg', alt: 'First slide', label: 'Welcome to FunLearning!!', description: 'This is a place for kids to explore and learn!' },
  { src: '/images/kid_raising.jpg', alt: 'Second slide', label: 'Educational videos', description: 'links for teachings from professionals, come check it out!!' },
  { src: '/images/college.jpg', alt: 'Third slide', label: 'About us', description: 'This website shows education resources for different ages' }
];
const websites = [
  { src: 'https://kids.nationalgeographic.com/',name:'National Geograhic kids',description:"It's for kids.", img_src:'/images/national-geographic-kids-vector-logo.png',lead_description:"Visit National Geographic Kids today!"},
  { src: 'https://thecrashcourse.com/',name:'Crash Course',description:"educate yourself!", img_src:'/images/cc.png',lead_description:"From courses like Astronomy to US History and Anatomy & Physiology it's got you covered with an awesome variety of AP high school curriculum topics. With various witty hosts at your service, you won't even notice you're getting smarter."},
  { src: 'https://www.khanacademy.org/',name:'Khan academy',description:"self-learning", img_src:'/images/khan.png',lead_description:"Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history, and more."},
];

export default function HomePage({ Component, pageProps }) {
  const intro_title_styles={
        fontFamily: "Arial",
        textAlign: "center",
        fontSize: "45px",
        textTransform: "uppercase",
        fontWeight: "bolder",
        wordSpacing: "12px",
        color: "rgba(0,0,0,0.5)",
        padding: "20px"
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
        <Web_Sliders/>
        <hr className="featurette-divider"></hr>
        <h2 style = {intro_title_styles}>fun videos</h2><br/>
        <FunVideos/>
        <hr className="featurette-divider"></hr>
        <h2 style = {intro_title_styles}>Educational websites</h2>
      </Container>
      <Container styles={{padding:'1px'}}>
      <Ed_Web websites={websites}/>
      <footer class="container">
        <Link class=" btn float-end" href = "/">Back to top</Link>
        <p>&copy; FunLearning Company, Inc. &middot; <a href="/" style={{ textDecoration: 'none' }}>About us</a></p>
      </footer>
      </Container>
    </body>
  );
}
