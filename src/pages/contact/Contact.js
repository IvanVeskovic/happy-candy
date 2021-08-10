import Form from "../../components/form/Form";
import Heading from "../../components/heading/Heading";

const Contact = () => {
    return ( 
        <div className='contact'>
                <Heading title='Lets get in touch' type='primary' />   
                <div className="row">
                    <div className="contact__content">
                        <div className="contact__info">
                            <div className="contact__info__heading">
                                Contact:
                            </div>
                            <div className="contact__line">
                                Happy Cand
                            </div>
                            <div className="contact__line">
                                Bulevar Mihaila Pupina 42
                            </div>
                            <div className="contact__line">
                                Belgrade
                            </div>
                            <div className="contact__line">
                                Serbia
                            </div>
                            
                            <div className="contact__link">
                                <i className="fas fa-envelope"></i>
                                office@happycandy.com
                            </div>
                            {/* <div className="contact__links">
                                
                            </div> */}
                        </div>
                        <Form />
                    </div>
                </div>
        </div>
     );
}
 
export default Contact;