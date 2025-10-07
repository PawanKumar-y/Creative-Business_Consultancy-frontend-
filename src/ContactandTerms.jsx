// import insta from './assets/instagram.png';
// import fb from './assets/facebook.png';
import li from './assets/linkedin.png';
import wa from './assets/whatsapp.png';
// import x from './assets/twitter.png';
import style from './ContactandTerms.module.css'
function contactandterms()
{
    return(
        <>
            <div className={style.socialmedia}>
                        <a href="mailto:cmc@industreetnext.com">cmc@industreetnext.com</a>
                        <a href="mailto:yd_consultant@usa.net">yd_consultant@usa.net</a>
                
                        {/* <a href="https://www.instagram.com/yourusername" target="_blank">
                            <img className={style.seperation}src={insta} alt="Instagram" width="30"/>
                        </a> */}
                
                        {/* <a href="https://www.facebook.com/yourusername" target="_blank">
                            <img src={fb} alt="Facebook" width="30"/>
                        </a> */}
                
                        {/* <a href="https://twitter.com/yourusername" target="_blank">
                            <img src={x} alt="X" width="30"/>
                        </a> */}
                
                        <a href="https://www.linkedin.com/in/yourusername" target="_blank">
                            <img className={style.seperation} src={li} alt="LinkedIn" width="30"/>
                        </a>
                        
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                            <img src={wa} alt="WhatsApp" width="30"/>
                        </a>
                
                </div>
                <div className={style.end}>
                    <span className={style.span1}>&copy;2025 Creative Management Consultants, All rights reserved.</span>
                    <span className={style.span2}>Terms Of Service</span>
                    <span>Privacy Policy</span>
                </div>
        </>
    );
}
export default contactandterms