import Button from "../button/Button"

const BreakSection = () => {
    return ( 
        <section className="break">
            <div className="break__overlay"></div>
            <div className="row">
                    <h3 className="break__text">
                        Let's get in touch!
                    </h3>
                    <Button text='Contact Us!' classType='btn--main' path='/contact' />
            </div>
        </section>
     );
}
 
export default BreakSection;