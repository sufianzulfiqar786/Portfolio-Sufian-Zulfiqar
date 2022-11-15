import React from 'react'
import '../CSS/Contact.css'

const Contact = () => {
    return (
        <>

            <div className="fluid-container my-5" id='contactt'>

                <div className="container    ">

                    <div className="row m-0 p-0  contactBody">

                        <div className="col-12 contactBodyHeading d-flex justify-content-center">
                            <h1 className='py-3'>Get in touch</h1>
                        </div>

                        <div className="col-12">
                            <div className="row contactBodyRow">

                                <div className="col-12 py-4  d-flex justify-content-center">
                                    <i class="fa fa-envelope" aria-hidden="true" style={{ fontSize: '30px', color: 'white' }}></i>
                                </div>

                                <div className="col-12 d-flex justify-content-center contactInput">
                                    <input type="text" placeholder='Your email' />
                                </div>

                                <div className="col-12 py-4  d-flex justify-content-center">
                                    <i class="fa-solid fa-message" aria-hidden="true" style={{ fontSize: '30px', color: 'white' }}></i>
                                </div>

                                <div className="col-12 d-flex justify-content-center contactInput">
                                    <input type="text" placeholder='Your message' />
                                </div>

                                <div className="col-12 pt-4 pb-2 contactButton d-flex justify-content-center">
                                    <button><span><i class="fa fa-paper-plane" style={{ fontSize: '15px' }} aria-hidden="true"></i></span> SEND</button>
                                </div>

                                <div className="col-12  contactButton d-flex justify-content-center contactSendLine">
                                    <hr />
                                </div>

                                <div className="col-12 my-1  contactButton d-flex justify-content-center contactSocialMediaIcon">
                                {/* <i class="fa-brands fa-square-github"></i> */}
                           <a href="https://github.com/sufianzulfiqar786">     <i class="fa-brands fa-github"></i></a>
                           <a href="https://www.linkedin.com/in/sufian-zulfiqar-61b291246/">     <i class="fab fa-linkedin"></i></a>
                           <a href="https://twitter.com/zulfiqar_sufian">     <i class="fa-brands fa-twitter"></i></a>
                           <a href="">     {/* <i class="fab fa-twitter-square"></i> */}</a>
                           <a href="">     {/* <i class="fab fa-whatsapp-square"></i> */}</a>
                           <a href="https://wa.me/923000992532">     <i class="fa-brands fa-whatsapp"></i></a>
                                </div>

                                <div className="col-12 mt-2 contactButton d-flex justify-content-center contactSendLine">
                                   <p style={{fontWeight:'bold', color:'white'}}>OR</p>
                                </div>

                                <div className="col-12  pb-4 contactButton2nd d-flex justify-content-center">
                                    <button> HIRE ME</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Contact
