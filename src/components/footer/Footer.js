import twiter from '../../img/twiter.svg';
import facebook from '../../img/facebook.svg';
import linkedin from '../../img/linkedin.svg';
import instagram from '../../img/instagram.svg';


const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className="footer__content">
                <div className="footer__nav">
                    <h3 className="footer__nav__logo">
                        HappyCandy
                    </h3>
                    <ul className="footer__nav__list">
                        <ul className="footer__nav__item">home</ul>
                        <ul className="footer__nav__item">shop</ul>
                        <ul className="footer__nav__item">about</ul>
                        <ul className="footer__nav__item">contact</ul>
                    </ul>
                </div>

                <div className="footer__social">
                    <img src={twiter} alt="social icon" className='footer__social__icon' />
                    <img src={facebook} alt="social icon" className='footer__social__icon' />
                    <img src={linkedin} alt="social icon" className='footer__social__icon' />
                    <img src={instagram} alt="social icon" className='footer__social__icon' />
                </div>
            </div>

            <div className="copyrights">
                Copyrights {new Date().getFullYear()} <span>Ivan Veskovic</span>
            </div>
        </footer>
     );
}
 
export default Footer;