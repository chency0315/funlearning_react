import Link from "next/link"
import ContactUs from "../../../components/contact-us"
import Navbar from "../../../components/navbar"
const footer = {
    marginTop: "auto",
    position:"absolute" 
}
export default function Contactus(){
    return (
        <body className='body' >
            <Navbar />
            <ContactUs/>
        </body>
    )
}