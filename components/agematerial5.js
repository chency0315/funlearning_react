import styles from "./agebutton.module.css";
import { Container } from "react-bootstrap";

export default function AgeMaterial() {
  return (
    <Container>
      <div className="row featurette" styles={{ margin: "3% 20%" }}>
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <img
            src="images/babybus.png"
            style={{ width: "400px", height: "350px", borderRadius: "50%" }}
            alt=""
          />
        </div>
        <div className="col-md-6" style={{ margin: "-4% 0" }}>
          <h2 className="featurette-heading fw-normal lh-1">
            Toddler Learning Videos
            <br />
            <br />
          </h2>
          <p className="lead">
            Baby Bus, the first choice for 300 million families worldwide,
            <br />
            is your neighborhood expert in early childhood education. At
            BabyBus, our goal is to make learning a fun and imaginative
            experience for kids aged 2 - 6 by creating classic nursery rhymes,
            kid songs, and stories with 2D & 3D animations.
            <br />
            <ul>
              <li>Think independently</li>
              <li>Build self-confidence</li>
              <li>Respect others</li>
              <li>Explore the world</li>
            </ul>
          </p>
          <a
            href="https://www.youtube.com/@BabyBusTC/featured"
            className={styles.btn_secondary}
            style={{ textDecoration: "none" }}
          >
            Take me there!
          </a>
        </div>
      </div>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row justify-content-center">
          <div className="col-lg-5 mb-3">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/BLMHtWt_R1A"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="col-lg-5 mb-3">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/KU1I-kW3IfU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <hr className="featurette-divider" />
      <br />
      <div className="row featurette" styles={{ margin: "3% 20%" }}>
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <img
            src="images/Songs for Littles - Toddler Learning Videos .jpg"
            style={{ width: "350px", height: "350px", borderRadius: "50%" }}
            alt=""
          />
        </div>
        <div className="col-md-6" style={{ margin: "-2% 0" }}>
          <h2 className="featurette-heading fw-normal lh-1">
            Toddler Learning Videos
            <br />
          </h2>
          <p className="lead">
            Toddler learning videos and baby learning videos that help children
            learn to talk, learn letters, numbers, colors, animal sounds and
            more! Ms Rachel is a real teacher who teaches through play, nursery
            rhymes & kids songs & techniques recommended by speech therapists
            and early childhood experts! She is a master at encouraging speech
            and language.
            <br />
            Our educational videos for kids are informed by research and are
            full of learning standards that will help preschoolers thrive! Along
            with baby videos and toddlers videos, we have preschool videos for
            children. We also have music classes and teach sign language. <br />
          </p>
          <a
            href="https://www.youtube.com/@msrachel/videos"
            className={styles.btn_secondary}
            style={{ textDecoration: "none" }}
          >
            Take me there!
          </a>
        </div>
      </div>
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row justify-content-center">
          <div className="col-lg-5 mb-3">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/47MNn4bsmSw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="col-lg-5 mb-3">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/HsT3iI6dT5U"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
