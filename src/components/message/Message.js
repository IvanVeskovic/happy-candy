const Message = ({text, type, className}) => {

    return ( 
        <div className={`message message--${type} ${className}`}>
            {text}
        </div>
     );
}
 
export default Message;