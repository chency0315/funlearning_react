import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import styles from './age_button.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
export default function Ages_Container() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh", minWidth: "100%" }}>
      <Row>
        <Col md={4} className="d-flex flex-column align-items-center justify-content-center text-center">
          <Image src='/images/playtime.png' width={150} height={150} />
          <h2 className="fw-normal">under 5 years old</h2>
          <p>Learn some basics before elementary school. </p>
          <p>
            <Link href="/new_page" className={styles.btn_secondary} id="5Y">
              View details &raquo;
            </Link>
          </p>
        </Col>
        <Col md={4} className="d-flex flex-column align-items-center justify-content-center text-center">
          <Image src='/images/student.png' width={150} height={150} />
          <h2 className="fw-normal">7-15 year old</h2>
          <p>Learn all subjects before going to college.</p>
          <p>
            <Link href="/" className={styles.btn_secondary} id="715Y">
              View details &raquo;
            </Link>
          </p>
        </Col>
        <Col md={4} className="d-flex flex-column align-items-center justify-content-center text-center">
          <Image src='/images/student1.png' width={150} height={150} />
          <h2 className="fw-normal">over 18 years old</h2>
          <p> Knowledge for your area of study!!</p>
          <p>
            <Link href="/" className={styles.btn_secondary} id="18Y">
              View details &raquo;
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
