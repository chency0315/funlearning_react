"use client";
import Navbar from "../../../components/navbar";
import styles from "../../../components/age_button.module.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import sendContact from "../../../api/http/contactUs";
const initValues = {
  name: "",
  phone: "",
  email: "",
  department: "",
  subject: "",
  content: "",
};

const initState = { values: initValues };

export default function Contactus() {
  const intro_title_styles = {
    fontFamily: "Arial",
    textAlign: "center",
    fontSize: "50px",
    textTransform: "uppercase",
    fontWeight: "bolder",
    wordSpacing: "12px",
    color: "rgba(0,0,0,0.8)",
    padding: "200px",
    // textCenter: "true"
  };
  const [state, setState] = useState(initState);
  const { values, btn } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  // on submit contact form
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      btn: true,
    }));
    //call send email api
    try {
      await sendContact(values);
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };

  return (
    <Container>
      <Navbar />
      <div>
        <h2 className="major" style={intro_title_styles}>
          Contact
        </h2>
        <div
          className="container col-mb-4 text-center"
          style={{ marginTop: "-150px" }}
        >
          <form>
            <div>
              <div className="pt-0 mb-4">
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="focus:outline-none focus:ring relative w-full px-4 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                  required
                />
              </div>
              <div className="pt-0 mb-4">
                <input
                  type="tel"
                  placeholder="phone number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  className="focus:outline-none focus:ring relative w-full px-4 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                  required
                />
              </div>
              <div className="pt-0 mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className="focus:outline-none focus:ring relative w-full px-4 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                  required
                />
              </div>
              <div className="pt-0 mb-4">
                <input
                  type="text"
                  placeholder="company/department"
                  name="department"
                  value={values.department}
                  onChange={handleChange}
                  className="focus:outline-none focus:ring relative w-full px-4 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                  required
                />
              </div>
              <div className="pt-0 mb-4">
                <input
                  type="text"
                  placeholder="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  className="focus:outline-none focus:ring relative w-full px-4 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                  required
                />
              </div>
              <div className="pt-0 mb-4">
                <textarea
                  type="text"
                  placeholder="Your message"
                  name="content"
                  value={values.content}
                  onChange={handleChange}
                  className="focus:outline-none focus:ring relative w-full px-4 py-4 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                  required
                />
              </div>
              <div className="pt-0 mb-3">
                <button
                  className={styles.btn_secondary}
                  type="submit"
                  disabled={
                    !values.name ||
                    !values.email ||
                    !values.subject ||
                    !values.content ||
                    !values.department ||
                    !values.phone
                  }
                  onClick={onSubmit}
                >
                  {btn ? "Message sent" : "Send a message"}
                </button>
              </div>
            </div>
          </form>
          <div>
            <h5 style={{ fontSize: "15px" }}>
              If you have any questions or suggestions
              <br />
              please do not hesitate to contact us.
            </h5>
          </div>
        </div>
      </div>
    </Container>
  );
}
