"use client";
import Navbar from "../../../components/navbar"
import styles from '../../../components/age_button.module.css';
import { Container } from "react-bootstrap";
import {useState} from 'react';

const initValues = {
    name:"",
    email:"",
    subject:"",
    message:"",
}
let btn_name = "Send a message";
const initState={values:initValues};

export default function Contactus(){
    const intro_title_styles = {
        fontFamily: "Arial",
        textAlign: "center",
        fontSize: "50px",
        textTransform: "uppercase",
        fontWeight: "bolder",
        wordSpacing: "12px",
        color: "rgba(0,0,0,0.8)",
        padding: "200px",
        textCenter: "true"
}
    const [state, setState] = useState(initState);
    const {values} = state;
  
    const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
    return (
        <Container>
            <Navbar />
      <div>
      <h2 className="major" style={intro_title_styles}>Contact us</h2>
    <div className='container col-md-6 text-center' style = {{marginTop: '-150px'}}>
    <form>
      <div >
      <div className="pt-0 mb-4" >
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
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
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-4">
        <input 
          type="text"
          placeholder='subject'
          name="subject"
          value={values.subject}
          onChange={handleChange}
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required/>
      </div>
      <div className="pt-0 mb-4">
        <textarea
          type = "text"
          placeholder="Your message"
          name="message"
          value={values.message}
          onChange={handleChange}
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className={styles.btn_secondary}
          type="submit"
          disabled={!values.name || !values.email || !values.subject || !values.message}
          onClick={onSubmit}
          >
          {btn_name}
        </button>
      </div>
      </div>
    </form>
    <div>
        <h5 style = {{fontSize:"15px"}}>If you have any questions or suggestions 
        <br/>please do not hesitate to contact us.</h5>
      </div>
    </div>
    </div>
    </Container>
    )
}
