import Button from "../button/Button"

const BreakSection = () => {
    return ( 
        <section className="break">
            <div className="break__overlay"></div>
            <div className="row">
                    <h3 className="break__text">
                        Lets get in touch!
                    </h3>
                    <Button text='Contact Us!' className='btn--main' />
            </div>
        </section>
     );
}
 
export default BreakSection;