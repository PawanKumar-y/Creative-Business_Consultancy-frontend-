import style from "./About.module.css";
import Qs from "./assets/QualitySystems.png";
import tax from "./assets/Tax.png";
import sd from "./assets/SystemDesign.png";
import be from "./assets/BusinessExcellene.png";
function About()
{
    return(
        <>
            <div className={style.bluebox}>
                <h1 className={style.heading}>Expressing Business Through Business Consultancy</h1>
                <div className={style.content}>
                     <div className={style.text1}>
                        <h5>Your Partner In Sucess</h5>
                        <p>We specialize in providing tailored management solutions to help businesses thrive. Our expert team is dedicated to driving success and fostering growth in every client we serve.</p>
                    </div>
                    <div className={style.text1}>
                        <h5>Innovative Strategies for Growth</h5>
                        <p>With a focus on strategic planning and operational efficiency, we guide organizations in navigating challenges and seizing opportunities. Our commitment is to deliver impactful results that elevate your business performance.</p>
                    </div>
                </div>
            </div>

            <div className={style.nextsection}>
                <h2 className={style.portfoliossection}>Our Expertise & Project Portfolio</h2>    
                <h3 className={style.headtext}>Successfully delivered a wide range of strategic and operational solutions across industries, combining global best practices with tailored and technology-driven approaches.</h3>
            </div>

            <div className={style.listofProfits}>
                <div className={style.boxes} >
                    <img src={be} alt="Business Excellence and Process Optimization" />
                    <h5>Business Excellence and Process Optimization</h5>
                    <ul>
                        <li>Business Process Re-engineering (BPR)</li>
                        <li>Japanese Management Practices</li>
                        <li>Industrial Engineering</li>
                        <li>Project Management Services</li>
                    </ul>
                </div>
                <div className={style.boxes} >
                    <img src={sd} alt="Systems Design and Digital Transformation" />
                    <h5>Systems Design and Digital Transformation</h5>
                    <ul>
                        <li>End-to-End Systems Design & Implementation</li>
                        <li>Business Process Computerization</li>
                        <li>Customized Software Development Projects</li>
                        <li>Tech based Management Solutions - I 5.0</li>
                    </ul>
                </div>
                <div className={style.boxes}>
                    <img src={tax} alt="Strategic Business Consulting" />
                    <h5>Strategic Business Consulting</h5>
                    <ul>
                        <li>Corporate Strategic Management</li>
                        <li>Concurrent Engineering</li>
                        <li>Revival & Restructuring of Sick Units</li>
                        <li>Marketing Management & Market Research</li>
                        <li>Financial Planning & Business Analysis</li>
                        <li>Activity Based Costing / Activity Based Management</li>
                    </ul>
                </div>

            </div>
            <div className={style.listofProfits}>
                <div className={style.boxes} >
                    <img src={Qs} alt="Quality and Compliance Systems" />
                    <h5>Quality and Compliance Systems</h5>
                    <ul>
                        <li>ISO 9000 - Quality Management System</li>
                        <li>ISO 14000 - Environmental Management System</li>
                        <li>QS 9000 / ISO/TS 16949 - Automotive Quality Standards</li>
                        <li>SQAAF / NAAC / NBA</li>
                        <li>ISO 21001 - Educational Organizations Management System (EOMS)</li>
                    </ul>
                </div>
                <div className={style.boxes} >
                    <img src={be} alt="Business Sustainability Growth" />
                    <h5>Business Sustainability Growth</h5>
                     <ul>
                        <li>Profitability &uarr;</li>
                        <li>Productivity &uarr;</li>
                        <li>Cost &darr;</li>
                        <li>Revenue &uarr;</li>
                        <li>Lead Time &darr;</li>
                    </ul>
                </div>
                <div className={style.boxes}>
                    <img src={sd} alt="Lean Management System" />
                    <h5>Lean Management System</h5>
                    <ul>
                        <li>Japanese Management System</li>
                        <li>Disruptive Technology Solutions</li>
                        <li>Six Sigma Metrics</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default About;