
// import style from './Middlesegment.module.css';
// import cmpA from './assets/Company A.png'
// import cmpB from './assets/Company B.png'
// import cmpC from './assets/Company C.png'
// import cmpD from './assets/Company D.png'
// import cmpE from './assets/Company E.png'
// import cmpF from './assets/Company F.png'
// import cmpG from './assets/Company G.png'
// import business from './assets/Industry50.png'
// import morphosis from './assets/Business Morphosis.png'
// import bespoke from './assets/Bespoke Solutions.png'
// import training from './assets/Training.png'

// function Middlesegment()
// {
//     return (
//         <>
//             <div className={style.outerdiv}>
//                 <div className={style.bgimage}>
//                     <h1 className={style.textInBg}>
//                     Enabling <span className={style.blueText}>Digital <br />Transformation</span> &<br />Services
//                     </h1>
//                     <p className={style.quote}>"The Best Way To Predict The Future Is To Create It"</p>
//                     <p className={style.author}>- Peter Drucker </p>
//                     <div className={style.buttonSection}>
//                         <button className={style.button1}>Connect With Us</button>
//                         <button className={style.button2}>Browse Our Services</button>
//                     </div>
//                     <p className={style.customerText}>Trusted and valued by many 1000+ customers including</p>
//                 </div>
//             </div>
//             <div className={style.companies}>
//                 <img src={cmpA} alt="Company A" />
//                 <img src={cmpB} alt="Company B" />
//                 <img src={cmpC} alt="Company C" />
//                 <img src={cmpD} alt="Company D" />
//                 <img src={cmpE} alt="Company E" />
//                 <img src={cmpF} alt="Company F" />
//                 <img src={cmpG} alt="Company G" />
//             </div>
//             {/* our story section */}
//             <div className={style.ourStory}>
//                 <div className={style.left}>
//                    <strong> - Our Story</strong>
//                 </div>
//                 <div className={style.right}>
//                     In a world where nothing stands still, continous evolution is not just inevitable - it's essential. Industires<br/>
//                     that resist change risk obsolescence. Every aspect of business - from product and process to technology,<br/>
//                     management, marktets, and customer expectations - must constatnly evolve<br/>
//                     <br/>
//                     At the heart of this transformation lies Creative Disruption and Disruptive Innovation - the driving forces<br/>
//                     that fule resilience and ensure long-term sustenance in today's dynamic business landscape<br/>
//                     <br/>
//                     With three decades of experience in serving our customers for overall improvement of their Organisations
//                     <div className={style.statssection}>
//                         <div className={style.stat}>
//                             <p className={style.statnumber}>30+</p>
//                             <p className={style.statlabel}>years</p>
//                         </div>
//                         <div className={style.stat}>
//                             <p className={style.statnumber}>1000+</p>
//                             <p className={style.statlabel}>proven results</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* service section */}
//             <div className={style.Services}>
//                 <div className={style.ServiceSection}>
//                     <div className={style.left1}>
//                         <strong> - Services</strong><br/>
//                         <div className={style.serviceSubheading}>See <span className={style.blueText}>Scope</span> Here</div>
//                     </div>

//                     <div className={style.right1}>
//                             We offer a diverse range of services - for Industry 5.0 and business morphosis to bespoke solutions and <br/>
//                             experiential marketing. Our expertise also includes management assessments and training programs.<br/>
//                             helping organisations adapt, innovate, and grow.
//                     </div>
//                 </div>
//                 <div className={style.FourBox}>
//                     <img className={style.fourimages}src={business} alt="" />
//                     <img className={style.fourimages}src={morphosis} alt="" />
//                     <img className={style.fourimages}src={bespoke} alt="" />
//                     <img className={style.fourimages}src={training} alt="" />
//                 </div>
//                 <button className={style.explorebutton}>Explore Our Services &rarr;</button>
//             </div>
            
//         </>
//     );
// }
// export default Middlesegment
import { useNavigate } from 'react-router-dom';
import style from './Middlesegment.module.css';
// import cmpA from './assets/Company A.png';
// import cmpB from './assets/Company B.png';
// import cmpC from './assets/Company C.png';
// import cmpD from './assets/Company D.png';
// import cmpE from './assets/Company E.png';
// import cmpF from './assets/Company F.png';
// import cmpG from './assets/Company G.png';
import business from './assets/Industry50.png';
import morphosis from './assets/Business Morphosis.png';
import bespoke from './assets/Bespoke Solutions.png';
import training from './assets/Training.png';
import expmar from './assets/experientialmarketingfinal.png'
import manage from './assets/managementassessmentfinal.png';
function Middlesegment() {
    const navigate = useNavigate();

    const handleConnectClick = () => {
        navigate('/contact');
    };

    const handleServicesClick = () => {
        navigate('/services');
    };

    return (
        <>
            <div className={style.outerdiv}>
                <div className={style.bgimage}>
                    <h1 className={style.textInBg}>
                        Enabling <span className={style.blueText}>Digital <br />Transformation</span> &<br />Services
                    </h1>
                    <p className={style.quote}>"The Best Way To Predict The Future Is To Create It"  - Peter Drucker</p>
                    
                    <div className={style.buttonSection}>
                        <button className={style.button1} onClick={handleConnectClick}>Connect With Us</button>
                        <button className={style.button2} onClick={handleServicesClick}>Browse Our Services</button>
                    </div>
                    <p className={style.customerText}>Trusted and valued by many 1000+ customers including</p>
                </div>
            </div>
            <div className={style.companies}>
                <p>Trusted and Valued by more than 1000+ customers </p>
                {/* <img src={cmpA} alt="Company A" />
                <img src={cmpB} alt="Company B" />
                <img src={cmpC} alt="Company C" />
                <img src={cmpD} alt="Company D" />
                <img src={cmpE} alt="Company E" />
                <img src={cmpF} alt="Company F" />
                <img src={cmpG} alt="Company G" /> */}
            </div> 
            {/* our story section */}
            <div className={style.ourStory}>
                <div className={style.left}>
                    <strong> - Our Story</strong>
                </div>
                <div className={style.right}>
                    In a world where nothing stands still, continuous evolution is not just inevitable - it's essential. Industries<br/>
                    that resist change risk obsolescence. Every aspect of business - from product and process to technology,<br/>
                    management, markets, and customer expectations - must constantly evolve<br/>
                    <br/>
                    At the heart of this transformation lies Creative Disruption and Disruptive Innovation - the driving forces<br/>
                    that fuel resilience and ensure long-term sustenance in today's dynamic business landscape<br/>
                    <br/>
                    With three decades of experience in serving our customers for overall improvement of their Organisations
                    <div className={style.statssection}>
                        <div className={style.stat}>
                            <p className={style.statnumber}>30+</p>
                            <p className={style.statlabel}>years</p>
                        </div>
                        <div className={style.stat}>
                            <p className={style.statnumber}>1000+</p>
                            <p className={style.statlabel}>proven results</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* service section */}
            <div className={style.Services}>
                <div className={style.ServiceSection}>
                    <div className={style.left1}>
                        <strong> - Services</strong><br/>
                        <div className={style.serviceSubheading}>See <span className={style.blueText}>Scope</span> Here</div>
                    </div>
                    <div className={style.right1}>
                        We offer a diverse range of services - for Industry 5.0 and business morphosis to bespoke solutions and<br/>
                        experiential marketing. Our expertise also includes management assessments and training programs,<br/>
                        helping organisations adapt, innovate, and grow.
                    </div>
                </div>
                <div className={style.FourBox}>
                    <img className={style.fourimages} src={business} alt="Industry 5.0" />
                    <img className={style.fourimages} src={morphosis} alt="Business Morphosis" />
                    <img className={style.fourimages} src={expmar} alt="Experiental Marketing" />
                    <img className={style.fourimages} src={bespoke} alt="Bespoke Solutions" />
                    <img className={style.fourimages} src={manage} alt="Bespoke Solutions" />
                    <img className={style.fourimages} src={training} alt="Training" />
                    
                    
                </div>
                <button className={style.explorebutton} onClick={handleServicesClick}>Explore Our Services &rarr;</button>
            </div>
        </>
    );
}
export default Middlesegment;