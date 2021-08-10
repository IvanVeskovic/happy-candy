import { useContext } from "react";
import Heading from "../heading/Heading";
import MyOrder from "../myOrder/MyOrder";
import Popup from "../popup/Popup"
import { ShopContext } from "../ShopContext";

const MyOrders = () => {

    const {setShowMyOrders, myOrders, handleMyOrders} = useContext(ShopContext);
    console.log(myOrders);
    return ( 
        <div className='orders'>
            <Popup closeFunction={setShowMyOrders} >
                <i className="fas fa-sync-alt orders__icon-refresh" onClick={() => handleMyOrders()}></i>
                {   
                    myOrders.length > 0
                    ?
                    <div>   
                        <Heading title='My Orders' type='secondary'/>
                        {myOrders.map(order => (
                                <MyOrder key={order.orderId} status={order.isShipped} name={order.name} street={order.street} price={order.totalPrice} />
                        ))}
                    </div>
                    :
                    <Heading title='No previouse orders, get one.' type='secondary' />
                }
            </Popup>
        </div>
     );
}
 
export default MyOrders;