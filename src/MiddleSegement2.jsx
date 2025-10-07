import style from './MiddleSegment2.module.css';
import itmimg from './assets/itmimg.png';
import aimsmall from './assets/aimarketingsmall.png';
import mt from './assets/mediatechnology.png';
import csticks from './assets/candlestick.png';
import { useNavigate } from 'react-router-dom';

function Middlesegment2() {
    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate('/products');
    };

    return (
        <>
            {/* Technologies section with heading and text */}
            <div className={style.ProductSection}>
                <div className={style.Toptext}>
                    <div className={style.Product}>
                        <span className={style.blueText}>-</span> Technology
                    </div>
                    {/* <div className={style.offerings}>
                        What <span className={style.blueText}>We Offer</span> to You
                    </div> */}
                </div>
                <div className={style.TextContent}>
                    Through strategic partnerships with leading companies across the globe, we bring together a diverse suite of products under one roof. From<br/>
                    IT infrastructure monitoring to AI-powered marketing and immersive technologies, our curated offerings are designed to drive digital<br/>
                    transformation and deliver real value.
                </div>
            </div>
            {/* Grid container for 3x6 layout */}
            <div className={style.gridContainer}>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={itmimg} alt="IT Infrastructure Monitoring" />
                    <h5>IT INFRASTRUCTURE<br/>MONITORING</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={aimsmall} alt="AI Marketing" />
                    <h5>AI MARKETING</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={mt} alt="Media Technology" />
                    <h5>MEDIA TECHNOLOGY</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={aimsmall} alt="AR/VR/MR Immersive Experience" />
                    <h5>AR/VR/MR IMMERSIVE<br/>EXPERIENCE</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={csticks} alt="Office Automation" />
                    <h5>OFFICE AUTOMATION</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={mt} alt="Video Analytics" />
                    <h5>VIDEO ANALYTICS</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={csticks} alt="AI Digital Transformation" />
                    <h5>AI DIGITAL TRANSFORMATION</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={csticks} alt="RFID Solutions" />
                    <h5>RFID SOLUTIONS</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={itmimg} alt="Chatbot & Voice Bot" />
                    <h5>CHATBOT & VOICE BOT</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={mt} alt="Block Chain Solutions" />
                    <h5>BLOCK CHAIN SOLUTIONS</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={aimsmall} alt="Non Invasive Healthcare" />
                    <h5>NON INVASIVE HEALTHCARE</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={mt} alt="Application Performance Monitoring" />
                    <h5>APPLICATION PERFORMANCE<br/>MONITORING</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={itmimg} alt="Edu Tech Solutions" />
                    <h5>EDU TECH SOLUTIONS</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={aimsmall} alt="Digital Twin / CPS / ML" />
                    <h5>DIGITAL TWIN / CPS / ML</h5>
                </div>
                <div className={style.boxes} onClick={handleProductClick}>
                    <img src={csticks} alt="Industrial Automation" />
                    <h5>INDUSTRIAL AUTOMATION</h5>
                </div>
            </div>
        </>
    );
}

export default Middlesegment2;