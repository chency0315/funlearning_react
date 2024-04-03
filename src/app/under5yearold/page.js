import ProgressBar from "../../../components/progressbar";
import AgeMaterial from "../../../components/agematerial5";
import Navbar from "../../../components/navbar";
import Link from "next/link";
import styles from "../../../components/nav-bar-buttons.module.css";
export default function Under5yearold() {
  const intro_title_styles = {
    fontFamily: "Arial",
    textAlign: "center",
    fontSize: "30px",
    textTransform: "uppercase",
    fontWeight: "bolder",
    wordSpacing: "12px",
    color: "rgba(0,0,0,0.8)",
    padding: "150px",
    textCenter: "true",
  };
  return (
    <body className="body">
      <Navbar />
      <h4 style={intro_title_styles}>For under 5 years old</h4>
      <AgeMaterial />
      <hr className="featurette-divider"></hr>
      <ProgressBar />
      <footer className="container">
        <Link className={`btn ${styles.footer_btn} float-end`} href="/under5yearold">
          Back to top
        </Link>
        <p>
          &copy; FunLearning Company, Inc. &middot;{" "}
          <a href="/" style={{ textDecoration: "none", color: "grey" }}>
            About us
          </a>
        </p>
      </footer>
    </body>
  );
}
