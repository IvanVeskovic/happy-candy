const Popup = ({children, closeFunction}) => {
    return ( 
        <div className='popup'>
            <div className="popup__box">
                <div className="popup__close" onClick={() => closeFunction(false)}>
                    <i className="fas fa-times-circle"></i>
                </div>
                {children}
            </div>
        </div>
     );
}
 
export default Popup;