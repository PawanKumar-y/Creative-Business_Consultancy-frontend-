import React from 'react';
import style from './ServicePage.module.css'
import business from './assets/Industry50.png'
import morphosis from './assets/Business Morphosis.png'
import bespoke from './assets/Bespoke Solutions.png'
import training from './assets/Training.png'
import expmar from './assets/experientialmarketingfinal.png'
import manage from './assets/managementassessmentfinal.png'

const Card = ({ title, description, moreText, imageUrl }) => {
  const [showMore, setShowMore] = React.useState(false);
  const [bgColor, setBgColor] = React.useState('white');

  const handleShowMore = () => {
    setShowMore(!showMore);
    setBgColor(showMore ? 'white' : 'blue');
  };

  return (
    <div className={`${style.Card} ${bgColor === 'blue' ? style.blue : ''}`}>
      {imageUrl && <img src={imageUrl} alt={title} className={style.imgstyles} />}
      <p className={style.parastyles}>{description}</p>
      {showMore && <p className={style.parastyles}>{moreText}</p>}
      <button
        onClick={handleShowMore}
        className={style.cardButton}
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};
function ServicesPage(){
    return (
        <>
            <div className={style.startpara}>
                <div className={style.Toptext}>
                    <div className={style.Product}>
                        Our <span className={style.blueText}>Scope</span> of Work
                    </div>
                </div>
                <div className={style.TextContent}>
                    We offer a diverse range of services - from Industry 5.0 and business morphosis to be bespoke solutions and 
                    experiential marketing. Our expertise also includes management assessments and training programs, helping
                    organisations adapt, innovate and grow.
                </div>
            </div>
            <div className={style.listofimg}>
                <Card
                    description="Using 'Disruptive Technology' in all facets of the Management Functions shall help the Organisation in improving Cost, Quality and Delivery "
                    moreText="Technologies such as Artificial Intelligence, Machine Learning, Big Data Analytics, Edge/ Cloud Computing, Blockchain, RPA, VR/AR/MR, XR, IoT, Cyber Physical Systems, Digital Twins, etc., are Adopted and Adapted to the Organisation needs and propel the growth of the Organisation"
                    imageUrl={business}
                />
                <Card
                    description="New Normal! the way of doing things has transposed without our Knowledge in Business "
                    moreText="We need to change our thought process in each and every activity to sustain in the Market. The entire 'Value Stream' gone for a toss with new approaches. We help Organisations to 'REDO' all the activities based on Current Market Situation, Product/process future needs and present performance of the Organizations KRAs to compete in the market and prove the Sustenance"
                    imageUrl={morphosis}
                />
                <Card
                    description="Control — Monitoring, Measuring, Analysis and Review major quarter of the PDCA Cycle, where many miss it to do prudently. "
                    moreText=" The Decision making and further improvements in the Organizations are based only on these Control & Action aspects. We help Organisations to create an 'Assessment Model' and do the required aspects for effective and efficient reviews which ensure the improvement path through the 'Control & Action of PDCA Cycle'"
                    imageUrl={manage}
                />
                <Card
                    description="Bespoke Solutions include Business Process Re-engineering / Lean Management Systems, Corporate "
                    moreText="Strategic Management, Japanese Management Systems, Systems Design and Implementation along with Digitalization, Marketing Management and Research, Financial Planning and Analysis, ISO Certifications, Industrial Engineering, Revival of Sick units, ACtivity Based Costing/ Acitivity Based Management and Concurrent Engineering or Simultaneous Engineering, Knowledge Management etc.,"
                    imageUrl={bespoke}
                />
                <Card
                    description="Experiential Marketing is the Dawn of Marketing creating a sustainable relationship with the Customer. " 
                    moreText="Its done using immersive technologies which improves Customer Experience, Brand Loyalty, Building Trust, Change Agility and Driving Sales. We are a reliable Service Provide for Experiential Marketing of your esteemed organisation in Promotion and Advertising which includes BRanding, Product Launch, Awareness Programs, Customer Engagement, Marketing Events, etc.., "
                    imageUrl={expmar}
                />
                <Card
                    description="We offer a comprehensive suite of training modules tailored to empower organisations with world-class practices..."
                    imageUrl={training}
                />
            
            </div>
        </>
    );
}
export default ServicesPage