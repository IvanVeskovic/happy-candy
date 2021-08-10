const Heading = ({title, type, className}) => {
    return ( 
        <h2 className={`heading ${type ? `heading--${type}` : ''} ${className}`}>
            {title}
        </h2>
     );
}
 
export default Heading;