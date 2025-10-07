import style from './ProductPage.module.css';
import itmimg from './assets/itmimg.png'
import itm from'./assets/itm.png'
import aimsmall from './assets/aimarketingsmall.png'
import aim from './assets/aimarketing.png'
import mt from './assets/mediatechnology.png'
import mtmain from './assets/mediatechnologymain.png'
import arvr from './assets/arvrmr.png'
import csticks from './assets/candlestick.png'
import officeauto from './assets/OfficeAutomation.png'
import va from './assets/VideoAnalytics.png'
import dt from './assets/DigitalTransformation.png'
import rfid from './assets/RFIDSolutions.png'
import chat from './assets/Chatbot.png'
import bcs from './assets/BlockChainSolutions.png'
import nih from './assets/NonInvasiveHealthCare.png'
import performance from './assets/PerformanceMonitoring.png'

function ProductPages()
{
    return(
        <>
            {/*  prodcut section */}
            <div className={style.ProductSection}>
                <div className={style.startpara}>
                    <div className={style.Toptext}>
                        <div className={style.Product}>
                            <span className={style.blueText}>Technologies</span> we Offer
                        </div>
                    </div>
                    <div className={style.TextContent}>
                        Through strategic partnerships with leading companies across the globe, we bring together a diverse suite of products under one roof. From
                            IT infrastructure monitoring to AI-powered marketing and immersive technologies, our curated offerings are designed to drive digital
                                                            transformation and deliver real value.
                    </div>
                </div>
                    <div className={style.firstline}>
                    <div className={style.itmwholesection}>
                    <div className={style.itmonitoring}>
                        <img src={itmimg} alt="small tv like image"/>
                        <div className={style.blueTextitm}>IT INFRASTRUCTURE MONITORING</div>
                        <div className={style.textforitm}>
                            Our product helps you keep a close eye on your IT<br/>
                            Infrastructure, detecting issues early to minimize<br/>
                            downtime and optimize performance
                        </div>
                        <div className={style.featurebox}>
                                <span className={style.circle}>✔</span>
                                <span className={style.text}>  Real-Time Monitoring</span>
                        </div>
                        <div className={style.featurebox}>
                                <span className={style.circle}>✔</span>
                                <span className={style.text}>  Downtime Prevention</span>
                        </div>
                    </div>
                    <div>
                        <img className={style.itmimgstyle}src={itm} alt="ai generated itm image"/>
                    </div>
                    
                    </div>
                    <div className={style.aimarketing}>
                        <img src={aimsmall} alt="small icon of ai marketing"/>
                        <div className={style.blueTextaim}>AI MARKETING</div>
                        <div className={style.textforaim}>
                            We deliver smart AI-powered marketing <br/>
                            strategies that make your campaigns more <br />
                            effective and efficient
                        </div>
                        <div>
                            <img src={aim} alt="ai marketing image"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={style.secondline}>
                    <div className={style.aimarketing}>
                        <img src={mt} alt="small icon of media technology"/>
                        <div className={style.blueTextmt}>MEDIA TECHNOLOGY</div>
                        <div className={style.textforaim}>
                            We enable seamless media experiences through<br/>
                            innovative technology tailored for today's digital<br/>
                            landscape
                        </div>
                        <div>
                            <img className={style.mtmainimg}src={mtmain} alt="ai marketing image"/>
                        </div>
                    </div>
                    <div className={style.aimarketing}>
                        <img src={aimsmall} alt="small icon of ai marketing"/>
                        <div className={style.blueTextar}>AR / VR / MR IMMERSIVE EXPERIENCE</div>
                        <div className={style.textforaim}>
                            Our immersive technology solutions bring your<br/>
                            ideas to life through interactive and captivating<br/>
                            environments.
                        </div>
                        <div>
                            <img className={style.arvrimg}src={arvr} alt="ai marketing image"/>
                        </div>
                    </div>
                   <div className={style.aimarketing}>
                        <img src={csticks} alt="small icon of office automation"/>
                        <div className={style.blueTextar}>OFFICE AUTOMATION</div>
                        <div className={style.textforaim}>
                            We streamline reptitive tasks and workflows through smart office automation solutions, boosting efficiency accross your ogranizations
                        </div>
                        <div>
                            <img className={style.oaimg}src={officeauto} alt="ai marketing image"/>
                        </div>
                    </div>
                    
                </div>
                <div className={style.secondline}>
                    <div className={style.aimarketing}>
                        <img src={csticks} alt="small icon of cd sticks"/>
                        <div className={style.blueTextva}>VIDEO ANALYTICS</div>
                        <div className={style.textforaim}>
                            Our video analytics platform helps detect patterns, monitor activity, and make smarter decisions in real time environment
                        </div>
                        <div>
                            <img className={style.vamainimg}src={va} alt="ai marketing image"/>
                        </div>
                    </div>
                    <div className={style.aimarketing}>
                        <img src={csticks} alt="small icon of cd sticks"/>
                        <div className={style.blueTextar}>DIGITAL TRANSFROMATIONS</div>
                        <div className={style.textforaim}>
                            Our solutions drive digital change across operations, helping you stay competitive in a rapidly evolving market
                        </div>
                        <div>
                            <img className={style.dtimg}src={dt} alt="ai marketing image"/>
                        </div>
                    </div>
                   <div className={style.aimarketing}>
                        <img src={csticks} alt="small icon of csticks"/>
                        <div className={style.blueTextar}>RFID SOLUTIONS</div>
                        <div className={style.textforaim}>
                            We deliver RFID(Radio Frequency Identification)-based solutions that imporve tracking, inventory management, and operational visibility
                        </div>
                        <div>
                            <img className={style.rfidimg} src={rfid} alt="rfid image"/>
                        </div>
                    </div>
                </div>
                <div className={style.firstline}>
                    <div className={style.cbmwholesection}>
                    <div className={style.cbmonitoring}>
                        <img src={itmimg} alt="small tv like image"/>
                        <div className={style.blueTextitm}>CHATBOT & VOICE BOT</div>
                        <div className={style.textforchat}>
                            We build intelligent chatbots and boice bots that enhance customer support and automate conversations at scale
                        </div>
                        <div className={style.featureboxchat}>
                                <span className={style.circle}>✔</span>
                                <span className={style.textchat}>   Multilingual Support</span>
                        </div>
                        <div className={style.featureboxchat}>
                                <span className={style.circle}>✔</span>
                                <span className={style.textchat}>  Automated Engagement</span>
                        </div>
                    </div>
                    <div>
                        <img className={style.chatstyle}src={chat} alt="robot using laptop"/>
                    </div>
                    
                    </div>
                    <div className={style.blockchain}>
                        <img src={aimsmall} alt="small icon of blockchain"/>
                        <div className={style.blueTextaim}>BLOCK CHAIN TECHNOLOGIES</div>
                        <div className={style.textforbc}>
                            Our blockchain services hlep businesses build trust, tranparency, and efficiency into their operations
                        </div>
                        <div>
                            <img className={style.bctimg}src={bcs} alt="ai marketing image"/>
                        </div>
                    </div>
                </div>
                <div className={style.lastline}>
                    <div className={style.aimarketing}>
                        <img src={mt} alt="small icon of media technology"/>
                        <div className={style.blueTextmt}>NON INVASIVE HEALTHCARE</div>
                        <div className={style.textforaim}>
                            Our technologies support preventive care and remote monitoring without disrupting everyday life
                        </div>
                        <div>
                            <img className={style.nihimg}src={nih} alt="non invasive healthcare"/>
                        </div>
                    </div>
                    <div className={style.aimarketing}>
                        <img src={aimsmall} alt="small icon of ai marketing"/>
                        <div className={style.blueTextar}>APPLICATION PERFORMANCE MONITORING</div>
                        <div className={style.textforaim}>
                            Our solution ensures your apps run smoothly by identifying bottlenecks and performance issues before they affect users
                        </div>
                        <div>
                            <img className={style.performanceimg}src={performance} alt="ai marketing image"/>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default ProductPages