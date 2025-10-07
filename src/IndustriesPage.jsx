import style from './IndustriesPage.module.css'
import indimg from './assets/Industries.png'
function IndustryPage()
{
    return (
        <>
            <div className={style.outermost}>
                <div className={style.servicesection}>
                    <div className={style.topsection}>
                        <div className={style.left}>
                            <span className={style.Highlighttext}>Industries</span> We Serve
                        </div>
                        <div className={style.right}>
                            Our firm actively work across both the manufacturing and service secotrs, delivering technology-driven
                            solutions that meet industry-specific needs. With a presence in diverse domains,we tailor our approach 
                            to support operations excellence and innvoation across these key industries.
                        </div>
                    </div>
                    <div className={style.SecondSection}>
                        <div className={style.ManufacturingSectors}>
                            <img src={indimg} alt="image of black tv"/>
                            <h4>Manufacturing Sectors</h4>
                            <p>
                                We help manufacturing companies enhance productivity, improve quality,
                                eliminate waste, reduce lead times, and meet global quality standards. Our 
                                Services span across Lead Management Systems, ISO Certifications and shop floor
                                excellence practices such as TQM, TPM, 5S, Kaizen, JIT, SMED,
                                Poka Yoke, and Jidoka
                            </p>
                            <p>
                                We also offer Six Sigma training, quality tools implementations, and support 
                                for CE and UL certifications. Our expertise extends to the revival of 
                                underperforming units, Concurrent Engineering, Activity-Based Costing,
                                Industrial Engineering, Industrial Automation, and OEE improvement. 
                                With a Strong focus on Industry 5.0, we provide comprehensive, tech- 
                                enabled solutions that drive sustainable growth, operational excellence, 
                                and long-term profitability.
                            </p>
                            <div className={style.listofspans}>
                                    <span> Automobile & Auto ancillaries </span>
                                    <span> Steel & Metal Forming </span>
                                    <span> Leather & Footwear </span>                                  
                                    <span> Textiles & Garments </span>
                                    <span> Plastic & polyurethane </span>
                                    <span> Cement </span>
                                    <span> Furniture & Interiors </span>
                                    <span> Electronics </span>
                                    <span> Food Processing </span>
                                    <span> Toys </span>
                                <span> Packaged Drinking Water & Milk </span>
                                    <span> Jewellery </span>
                                    <span> Watches ad Clocks</span>
                            </div>
                        </div>
                        <div className={style.ServiceSectors}>
                            <img src={indimg} alt="image of black tv"/>
                            <h4>Service Sectors</h4>
                            <p>
                                We provide end-to-end business process and operational excellence
                                solutions for service-based industries, helping them streamline workflows,
                                enhance quality, and achieve sustainable growth. Our focus areas include 
                                operations management, process optimisation, SQP development, global 
                                compliance frameworks, and digital transformations using cutting-edge 
                                technologies like IoT, AI, ML and RPA
                            </p>
                            <p className={style.adjust}>
                                We apply proven methodologies such as 5S, Kaizen, TQM, JIT and Quality
                                Circles to improve efficiency, strengthen service delivery to elevate customer
                                experience, boost productivity, reduce costs, and drive long-term business
                                success
                            </p>
                            <div className={style.listofspans2}>
                                
                                    <span> Educational Institutions </span>
                                    <span> Information Technology (IT) </span>
                                    <span> Hospital </span>
                                    <span> Retail </span>
                                    <span> Logistics </span>
                                    <span> Hotel & Restaurant </span>
                                    <span> Automobile Sales & Services </span>
                                    <span> WareHousing </span>
                                    <span> RealEstate </span>
                                    <span> Internal Auditing </span>
                                    <span> Experiential Marketing </span>
                                    <span> Gas Stations </span>
                            </div>
                        </div>
                        <div className={style.GovernmentSectors}>
                            <img src={indimg} alt="image of black tv"/>
                            <h4>Government Sectors</h4>
                            <p>
                                Making the citizens to reckon with Experience, Confidence, Trust and 
                                Security to all without discrimination, Empowering with Disruptive
                                technologies to serve the citizens with humanity and providing a great 
                                living experience in the Society
                            </p>
                            
                            <div className={style.listofspans2}>
                                    <span> Educational Institutions </span>
                                    <span> Information Technology (IT) </span>
                                    <span> Hospital </span>
                                    <span> Retail </span>
                                    <span> Logistics </span>
                                    <span> Hotel & Restaurant </span>
                                    <span> Automobile Sales & Services </span>
                                    <span> WareHousing </span>
                                    <span> RealEstate </span>
                                    <span> Internal Auditing </span>
                                    <span> Experiential Marketing </span>
                                    <span> Gas Stations </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default IndustryPage