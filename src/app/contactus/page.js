import Link from "next/link"
import ContactUs from "../../../components/contact-us"
export default function Contactus(){
    return (
        <body className='body'>
            <ContactUs/>
            <hr className="featurette-divider"/>
            <footer class="container">
                <Link class=" btn float-end" href = "/contactus">Back to top</Link>
                <p>&copy; FunLearning Company, Inc. &middot; <a href="/" style={{ textDecoration: 'none' }}>About us</a></p>
            </footer>
        </body>
    )
}