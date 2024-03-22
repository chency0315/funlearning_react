import Container from 'react-bootstrap/Container';
import styles from './age_button.module.css';
import Image from 'next/image';
export default function AgeMaterial7to15() {
    return (
        <Container>
            <div className='row featurette text-center' styles={{ margin: '-2% 0'}}>
                <div className="col-md-1"></div>
                    <div className='col-md-5' style = {{margin: '3% 0'}}>
                    <h2 class="featurette-heading fw-normal lh-1">RayDu English<br/></h2>
                        <p class="lead">Hello, I am Du, and I will be sharing English on this 
                        channel through a variety of interesting topics. I hope it will rekindle your interest in learning English! Occasionally, I will also share my life through videos.
                        </p>
                        <a href="https://www.youtube.com/@rayduenglish/about" className={styles.btn_secondary} style={{textDecoration:"none"}}>Take me there!</a>
                    </div>
                    <div class="col-md-5" style={{margin: "-10% 0"}}>
                        <Image src = '/images/raydu.jpg' style={{ position: 'relative', top: '130px', width: '300px', height: '300px', borderRadius: '50%' }} width = {300}  height={300} alt=''/>
                    </div>
                    <div className="col-md-1"></div>
            </div>
            <div className='happy' style={{margin: "13% 20%", display: 'flex', justifyContent: 'center' }}>
                <div className='bdcard' style={{marginRight: "20px"}}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HpAV5iIR_Ow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="bdtext">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PGfok91i100" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <hr className="featurette-divider"/>
            <div className='row featurette text-center' styles={{ margin: '-2% 0'}}>
                <div className="col-md-1"></div>
                    <div className='col-md-6 ' style = {{margin: '3% 0'}}>
                        <div style={{ position: 'relative', top:"100px"}}>
                            <h2 class="featurette-heading fw-normal lh-1 text-center">OverSimplified<br/></h2>
                            <p class="lead">Explaining things in an OverSimplified way</p>
                            <a href="https://www.youtube.com/@OverSimplified/featured" className={styles.btn_secondary} style={{textDecoration:"none"}}>Take me there!</a>
                        </div>
                    </div>
                    <div class="col-md-4" style={{margin: "-10% 0"}}>
                        <Image src = '/images/OverSimplified.jpg' style={{ position: 'relative', top: '180px', width: '300px', height: '300px', borderRadius: '50%', right: '50px' }} width = '300' height = '300'alt =''/>
                    </div>
                    <div className="col-md-1"></div>
            </div>

                <div className='happy' style={{margin: "13% 20%", display: 'flex', justifyContent: 'center' }}>
                    <div className='bdcard' style={{marginRight:"20px"}}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/26EivpCPHnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="bdtext">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/hRSGxw2AQnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
        </Container>
    );
}