import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/navbar";
import ProgressBar from '../../components/progressbar';
import Ages_Container from '../../components/ages_container';
import PhotoCarousel from '../../components/PhotoCarousel';
import { Container } from 'react-bootstrap';
import '../app/globals.css';
import Ed_Web from '../../components/educational_websites';
const images = [
  { src: '', alt: 'First slide', label: 'Welcome to FunLearning!!', description: 'This is a place for kids to explore and learn!' },
  { src: '', alt: 'Second slide', label: 'Educational videos', description: 'links for teachings from professionals, come check it out!!' },
  { src: '', alt: 'Third slide', label: 'About us', description: 'his website shows education resources for different ages' }
];
const websites = [
  { src: 'https://kids.nationalgeographic.com/',name:'National Geograhic kids',description:"It's for kids.", img_src:'/images/national-geographic-kids-vector-logo.png',lead_description:"Visit National Geographic Kids today!",button:'Take me there!'},
  { src: 'https://thecrashcourse.com/',name:'Crash Course',description:"educate yourself!", img_src:'/images/crashcourse.png',lead_description:"From courses like Astronomy to US History and Anatomy & Physiology it's got you covered with an awesome variety of AP high school curriculum topics. With various witty hosts at your service, you won't even notice you're getting smarter.",button:'Take me there!'},
  { src: 'https://www.khanacademy.org/',name:'Khan academy',description:"Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine and more.", img_src:'/images/khan.png',lead_description:"self-learning",button:'Take me there!'},
];
export default function HomePage({ Component, pageProps }) {
  return (
    <body className='body' >
      <Navbar />
      <ProgressBar />
      <PhotoCarousel images={images} />
      <Ages_Container />
      <Container className="text-center">
        <hr className='class="featurette-divider"'></hr>
        <h2>Explore popular websites</h2><br></br>
        <hr className='class="featurette-divider"'></hr>
        <h2 id = 'introtitle'>fun videos</h2><br></br>
        <hr className="featurette-divider"></hr>
        <h2 id = 'introtitle'>Educational websites</h2>
      </Container>
        <div>
            {websites.map((website,index)=><Ed_Web websites={website}/>))};
        </div>
    </body>
  );
}
