// // import { useState } from "react";
// import style from './ContactPage.module.css'; 
// import mailimg from './assets/mailimg.png';
// import callimg from './assets/callimg.png';
// import locimg from './assets/location.png';
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import React, { useState } from 'react';


// function ContactSegment() {
//   const [value, setValue] = useState("");
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     phone: "",
//     message: ""
//   });
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handlePhoneChange = (phone) => {
//     setValue(phone);
//     setFormData(prev => ({
//       ...prev,
//       phone: phone
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitStatus(null);

//     try {
//       const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         throw new Error('Failed to submit form');
//       }

//       const result = await response.json();
//       if(result.success !== true) {
//         throw new Error('Form submission error');
//       }
//       setSubmitStatus('success');
//       // Reset form after successful submission
//       setFormData({
//         firstname: "",
//         lastname: "",
//         email: "",
//         phone: "",
//         message: ""
//       });
//       setValue("");
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmitStatus('error');
//     }
//   };

//   return (
//     <>
//       <div className={style.ContactSection}>
//             {/* Contact Info Left Section */}
//             <div className={style.contactinfo}>
//                 <div className={style.contacttext}>
//                     We are happy to explore the possibilities with <br />
//                     you. Get in touch with <span className={style.bluetxt}>CMC</span> today
//                 </div>

//                 <div className={style.mail}>
//                     <img className={style.imgs} src={mailimg} alt="mail" />
//                     <div>
//                         <div className={style.chat}>Chat with us</div>
//                         <div>Our team is here to help</div>
//                         <div>
//                         <a className={style.adeco} href="mailto:cmc@industreetnext.com">
//                             cmc@industreetnext.com
//                         </a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={style.mail}>
//                     <img className={style.imgs} src={callimg} alt="call" />
//                     <div>
//                         <div className={style.chat}>Call us</div>
//                         <div>Monday to Saturday from 9:00 am to 6:00pm</div>
//                         <div>
//                             <a className={style.adeco} href="tel:+919840054183">+91 98400 54183</a><br/>
//                             <a className={style.adeco} href="tel:+971585053305">+971 58 505 3305</a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={style.mail}>
//                     <img className={style.imgs} src={locimg} alt="location" />
//                     <div>
//                         <div className={style.chat}>Visit Us</div>
//                         <div>Come Visit us at our offices</div>
//                         <div>
//                         <a
//                             className={style.adeco}
//                             href="https://www.google.com/maps/place/Chennai"
//                             target="_blank"
//                             rel="noreferrer"
//                         >
//                             Chennai, India
//                         </a>
//                         <br/>
//                         <a
//                             className={style.adeco}
//                             href="https://www.google.com/maps/place/Dubai,+United+Arab+Emirates"
//                             target="_blank"
//                             rel="noreferrer"
//                         >
//                             Dubai, UAE
//                         </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Get In Touch Right Section */}
//             <div className={style.GetInTouch}>
//             <div className={style.contacttext2}>Get In Touch</div>
//             <form onSubmit={handleSubmit}>
//               <input 
//                 className={style.inputname}
//                 type="text" 
//                 placeholder="First Name" 
//                 name="firstname" 
//                 value={formData.firstname}
//                 onChange={handleInputChange}
//                 required 
//               />
//               <input 
//                 className={style.inputname}
//                 type="text" 
//                 placeholder="Last Name" 
//                 name="lastname" 
//                 value={formData.lastname}
//                 onChange={handleInputChange}
//                 required 
//               />
//               <input 
//                 className={style.inputmail}
//                 type="email" 
//                 placeholder="Email-id" 
//                 name="email" 
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required 
//               />
//               <PhoneInput
//                 className={style.phonestyle}
//                 country={"ae"}
//                 value={value}
//                 onChange={handlePhoneChange}
//                 inputProps={{
//                   name: 'phone',
//                   required: true
//                 }}
//               />
//               <input 
//                 type="text" 
//                 className={style.customhelpbox} 
//                 placeholder="how can we help"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//               />
//               <button className={style.bluebtn} type="submit">Submit</button>
//               {submitStatus === 'success' && (
//                 <p className={style.successMessage}>Form submitted successfully!</p>
//               )}
//               {submitStatus === 'error' && (
//                 <p className={style.errorMessage}>Error submitting form. Please try again.</p>
//               )}
//             </form>
//             <p className={style.para}>By Contacting us you agree to our Terms of Service and Privacy Policy</p>
//             </div>
//       </div>
//     </>
//   );
// }

// export default ContactSegment;
import style from './ContactPage.module.css'; 
import mailimg from './assets/mailimg.png';
import callimg from './assets/callimg.png';
import locimg from './assets/location.png';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import React from 'react';

function ContactSegment() {
  return (
    <>
      <div className={style.ContactSection}>
            {/* Contact Info Left Section */}
            <div className={style.contactinfo}>
                <div className={style.contacttext}>
                    We are happy to explore the possibilities with <br />
                    you. Get in touch with <span className={style.bluetxt}>CMC</span> today
                </div>

                <div className={style.mail}>
                    <img className={style.imgs} src={mailimg} alt="mail" />
                    <div>
                        <div className={style.chat}>Chat with us</div>
                        <div>Our team is here to help</div>
                        <div>
                        <a className={style.adeco} href="mailto:cmc@industreetnext.com">
                            cmc@industreetnext.com
                        </a>
                        </div>
                    </div>
                </div>

                <div className={style.mail}>
                    <img className={style.imgs} src={callimg} alt="call" />
                    <div>
                        <div className={style.chat}>Call us</div>
                        <div>Monday to Saturday from 9:00 am to 6:00pm</div>
                        <div>
                            <a className={style.adeco} href="tel:+919840054183">+91 98400 54183</a><br/>
                            <a className={style.adeco} href="tel:+971585053305">+971 58 505 3305</a>
                        </div>
                    </div>
                </div>

                <div className={style.mail}>
                    <img className={style.imgs} src={locimg} alt="location" />
                    <div>
                        <div className={style.chat}>Visit Us</div>
                        <div>Come Visit us at our offices</div>
                        <div>
                        <a
                            className={style.adeco}
                            href="https://www.google.com/maps/place/Chennai"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Chennai, India
                        </a>
                        <br/>
                        <a
                            className={style.adeco}
                            href="https://www.google.com/maps/place/Dubai,+United+Arab+Emirates"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dubai, UAE
                        </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Get In Touch Right Section */}
            <div className={style.GetInTouch}>
            <div className={style.contacttext2}>Get In Touch</div>
            <form>
              <input 
                className={style.inputname}
                type="text" 
                placeholder="First Name" 
                name="firstname" 
                required 
              />
              <input 
                className={style.inputname}
                type="text" 
                placeholder="Last Name" 
                name="lastname" 
                required 
              />
              <input 
                className={style.inputmail}
                type="email" 
                placeholder="Email-id" 
                name="email" 
                required 
              />
              <PhoneInput
                className={style.phonestyle}
                country={"ae"}
                inputProps={{
                  name: 'phone',
                  required: true
                }}
              />
              <input 
                type="text" 
                className={style.customhelpbox} 
                placeholder="how can we help"
                name="message"
              />
              <button className={style.bluebtn} type="submit">Submit</button>
            </form>
            <p className={style.para}>By Contacting us you agree to our Terms of Service and Privacy Policy</p>
            </div>
      </div>
    </>
  );
}

export default ContactSegment;