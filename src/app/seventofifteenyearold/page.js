import Navbar from '../../../components/navbar';
import ProgressBar from '../../../components/progressbar';
import Link from 'next/link';
import AgeMaterial7to15 from '../../../components/agematerial7to15';
import styles from '../../../components/nav-bar-buttons.module.css';
export default function SevenToFifteenyearold() {
    const intro_title_styles={
        fontFamily: "Arial",
        textAlign: "center",
        fontSize: "30px",
        textTransform: "uppercase",
        fontWeight: "bolder",
        wordSpacing: "12px",
        color: "rgba(0,0,0,0.8)",
        padding: "150px",
        textCenter: "true"
  }
    return (
        <body className="body">
            <Navbar/>
            <h4 style={intro_title_styles}>7 to 15 year old</h4>
            <AgeMaterial7to15/>
            <hr className="featurette-divider"></hr>
            <ProgressBar/>
            <footer class="container">
                <Link class=" btn float-end" href = "/seventofifteenyearold"><button className={styles.footer_btn}>Back to top</button></Link>
                <p>&copy; FunLearning Company, Inc. &middot; <a href="/" style={{ textDecoration: 'none' }}>About us</a></p>
            </footer>
        </body>
    )
}