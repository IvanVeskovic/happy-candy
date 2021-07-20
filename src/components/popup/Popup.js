import { ShopContext } from "../ShopContext";
import { useContext } from "react";

const Popup = (props) => {

    const {setShowLogInSignIn} = useContext(ShopContext);

    return ( 
        <div className='popup'>
            <div className="popup__box">
                <div className="popup__close" onClick={() => setShowLogInSignIn(false)}>
                    <i className="fas fa-times-circle"></i>
                </div>
                {props.children}
            </div>
        </div>
     );
}
 
export default Popup;