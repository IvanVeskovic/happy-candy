import Button from "../button/Button"

const Card = ({img, title, width, price, item}) => {

    return ( 
        <div className='card' style={{width: width}}>
            <img src={img} alt={title} className='card__img' />
            <h4 className="card__title mb-xs">{title}</h4>
            <div className="card__price">${price}</div>
            <Button text='Add To Cart' className='btn--second' item={item} />
        </div>
     );
}
 
export default Card;