const Message = ({text, type}) => {

    return ( 
        <div className={`message message--${type}`}>
            {text}
        </div>
     );
}
 
export default Message;