import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/navbar";
import ProgressBar from '../../components/progressbar';
import PhotoCarousel from '../../components/PhotoCarousel';
import Ages_Container from '../../components/ages_container';

export default function Home({Component, pageProps}) {
  return (
    <div >
      <Navbar/>
      <ProgressBar/>
      <PhotoCarousel/>
      <Ages_Container/>
      <h4 id = 'introtitle'>explore popular websites</h4>
      
    </div>
  );
}
