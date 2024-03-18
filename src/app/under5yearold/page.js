import ProgressBar from "../../../components/progressbar";

const intro_title_styles={
    fontFamily: "Arial",
    textAlign: "center",
    fontSize: "45px",
    textTransform: "uppercase",
    fontWeight: "bolder",
    wordSpacing: "12px",
    color: "rgba(0,0,0,0.5)",
    padding: "100px"
}

export default function Under5yearold() {
    return (
        <body>
        <ProgressBar/>
        <h4 id = 'introtitle' styles = {intro_title_styles}>For under 5 years old</h4>
    </body>
    );
}