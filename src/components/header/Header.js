import Button from "../button/Button"

const Header = () => {
    return ( 
        <header className='header'>
            <div className="row">
                <div className="header__content">
                    <h1 className="header__heading">
                        Donuts and candy <span className="line-break">always comes handy!</span>
                    </h1>
                    <p className="header__text">Check our store and get some seriously tasteful candies and cakes</p>
                    <Button text='Shop Now' classType='btn--main' bgcolor='blue' path='/shop' />
                </div>
            </div>
        </header>
     );
}
 
export default Header;