const ContentBox = ({img, title, text}) => {
    return ( 
        <div className="box">
            <img src={img} alt="" className="box__img"/>
            <h4 className="box__title">
                {title}
            </h4>
            <p className="box__text">
                {text}
            </p>
        </div>
     );
}
 
export default ContentBox;