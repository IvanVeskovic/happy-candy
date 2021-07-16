const Button = ({text, classType, bgColor, width, callbackFunction}) => {
    return ( 
            <button type='button' className={`btn ${classType}`} onClick={callbackFunction} style={{backgroundColor: `${bgColor ? bgColor : ''}`, width: `${width}`}} >{text}</button>
     );
}
 
export default Button;