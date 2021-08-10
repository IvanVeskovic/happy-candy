const MyOrder = ({name, status, price, street}) => {
    return ( 
        <div className='myOrder'>
            <div className="myOrder__box">
                <i className="fas fa-user"></i>{name}
            </div>
            <div className="myOrder__box">
                <i className="fas fa-road"></i>{street}
            </div>
            <div className="myOrder__box">
                <i className="fas fa-wallet"></i>&euro;{price}
            </div>
            <div className="myOrder__box">
                <i className="fas fa-info"></i>{status}
            </div>
        </div>
     );
}
 
export default MyOrder;