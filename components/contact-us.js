import styles from './age_button.module.css';

const intro_title_styles = {
        fontFamily: "Arial",
        textAlign: "center",
        fontSize: "50px",
        textTransform: "uppercase",
        fontWeight: "bolder",
        wordSpacing: "12px",
        color: "rgba(0,0,0,0.8)",
        padding: "150px",
        textCenter: "true"
}
export default function ContactUs(){
    return (
    <div className='container col-md-6 text-center'>
    <form>
    <h2 class="major" style={intro_title_styles}>Contact us</h2>
      <div className="pt-0 mb-4">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-4">
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className={styles.btn_secondary}
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
  );
}