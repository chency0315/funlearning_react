
export default function FunVideos() {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-lg-5 mb-3'>
          <iframe
            title="Fun Video"
            src="https://www.youtube.com/embed/AjgD3CvWzS0"
            allowFullScreen
            width="100%"  // Use percentage width for responsiveness
            height={300}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
        <div className='col-lg-5 mb-3'>
          <iframe
            title="More Fun Videos"
            src="https://www.youtube.com/embed/bYE9plCf-L0"
            allowFullScreen
            width="100%"  // Use percentage width for responsiveness
            height={300}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </div>
    </div>
  );
}
