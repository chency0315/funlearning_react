import ProgressBar from "../../../components/progressbar";
import AgeMaterial from "../../../components/agematerial";
import Navbar from "../../../components/navbar";
export default function Under5yearold() {
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
        <body className='body'>
            <Navbar/>
            <h4 id = 'introtitle' style={intro_title_styles}>For under 5 years old</h4>
            <AgeMaterial/>
            <ProgressBar/>
        </body>
    );
}