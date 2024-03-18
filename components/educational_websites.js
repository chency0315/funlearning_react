import Image from 'next/image';
import Link from 'next/link';
export default function Ed_Web({websites}){
    return (
    <div class="row featurette">
        <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">{websites.name}<br></br>
            <span class="text-muted"></span></h2>
            <p class="lead">{websites.lead_descripition}</p>
            <Link href="websites.link" class="btn btn-secondary" style="text-decoration:none;">{websites.button}</Link>
            </div>
        <div class="col-md-5">
      <Image src = {websites.img_src} width = {500} height ={500}/>
    </div>
  </div>
  );
}