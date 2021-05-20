const Description = ({item, classType}) => {
    return ( 
        <div className={`description ${classType}`}>
            <h3 className="description__title">
                {item.name}
            </h3>
            <div className="description__ingredients">
                {
                    item.ingredients.map(ingredient => (
                        <div className="description__ingredient" key={ingredient}>{ingredient}</div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Description;