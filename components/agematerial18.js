import Container from 'react-bootstrap/Container';
import styles from './age_button.module.css';

export default function AgeMaterial18(){
    return(<Container>
        <div className='row featurette ' styles={{ margin: '-3% 0'}}>
            <div className="col-md-1"></div>
                <div className='col-md-5' style = {{margin: '3% 0'}}>
                <h2 class="featurette-heading fw-normal lh-1">BRIGHT SIDE<br/></h2>
                    <p class="lead">Whether you're into recent discoveries, space exploration, true stories, fitness, fun tests, and riddles, or useful tips for self-improvement, psychology, gadgets, or just your day-to-day routine, there's something for everyone!<br/>
            You can expect all that and more coming at you in 3 top-quality videos every single day. <br/>
            If youve got a thirst for knowledge that never quits, then join a community of tens of millions and growing! We have a good time, so take your shoes off, kick back, and make yourself at home here on the Bright Side of life!

                    </p>
                    <a href="https://www.youtube.com/@BRIGHTSIDEOFFICIAL/featured" className={styles.btn_secondary} style={{textDecoration:"none"}}>Take me there!</a>
                </div>
                <div class="col-md-5" style={{margin: "-10% 0"}}>
                    <img src = 'images/BRIGHTSIDE.jpg' style={{ position: 'relative', top: '200px', width: '300px', height: '300px', borderRadius: '50%', left: '100px' }}/>
                </div>
                <div className="col-md-1"></div>
        </div>
        <div className='happy' style={{margin: "13% 20%", display: 'flex', justifyContent: 'center' }}>
            <div className='bdcard' style={{marginRight: "20px"}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GhO_2lGqaEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="bdtext">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZVJulFwPFtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <hr className="featurette-divider"/>
        <div className='row featurette text-center' styles={{ margin: '-2% 0'}}>
            <div className="col-md-1"></div>
                <div className='col-md-5' styles = {{margin: '3% 0'}}>
                    <div style={{ position: 'relative', top:"100px"}}>
                        <h2 class="featurette-heading fw-normal lh-1 text-center">Spark<br/></h2>
                        <p class="lead">Welcome to Spark, the home of science, tech, engineering and more. <br/>
                                        We will be uploading award-winning documentaries and mind blowing shows every week 
                                        from the best producers on the planet.</p>
                        <a href="https://www.youtube.com/@SparkDocs/videos" className={styles.btn_secondary} style={{textDecoration:"none"}}>Take me there!</a>
                    </div>
                </div>
                <div class="col-md-4" style={{margin: "-10% 0"}}>
                    <img src = 'images/spark.jpg' style={{ position: 'relative', top: '200px', width: '300px', height: '300px', borderRadius: '50%', right: '50px', left:'20px'}}/>
                </div>
                <div className="col-md-1"></div>
        </div>
            <div className='happy' style={{margin: "13% 20%", display: 'flex', justifyContent: 'center' }}>
                <div className='bdcard' style={{marginRight: "20px"}}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fEMTYjyLo9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="bdtext">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/J0BRlFMK0lY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
    </Container>);
}