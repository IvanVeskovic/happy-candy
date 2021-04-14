const CategoryBox = ({img, title, setFilter, filter}) => {
    const filterTitle = title.toLowerCase() === 'show all' ? 'all' : title.toLowerCase();
    return ( 
        <div onClick={() => setFilter(filterTitle)} className='category__box' style={{backgroundImage: `url(${img})`}}>
            <div className={`category__overlay ${filter === filterTitle ? 'category__overlay--active' : ''}`}></div>
            <h4 className="category__title">
                {title}
            </h4>
        </div>
     );
}
 
export default CategoryBox;