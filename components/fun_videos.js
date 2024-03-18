import styles from './fun_videos.module.css';

export default function FunVideos() {
  return (
    <div className={styles.happy}>
      <div className={styles.bdcard}>
        <iframe
          title="Fun Video"
          src="https://www.youtube.com/embed/AjgD3CvWzS0"
          frameBorder="0"
          allowFullScreen
          width={560}
          height={315}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
      <div className={styles.bdtext}>
        <iframe
          title="More Fun Videos"
          src="https://www.youtube.com/embed/bYE9plCf-L0"
          frameBorder="0"
          allowFullScreen
          width={560}
          height={315}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
}
