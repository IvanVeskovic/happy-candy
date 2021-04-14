import video from '../../assets/video.mp4';

const VideoSection = () => {
    return ( 
        <section className='video'>
            <video className='video__play' src={video} autoPlay muted loop></video>
        </section>
     );
}

export default VideoSection;