import React, { useState } from 'react'
import '../CSS/Education.css'
// import '../CSS/About.css'

const Education = () => {

    const [Education, setEducation] = useState(true);

    console.log(Education)

    return (
        <>



            <div className="fluid-container" id='contact'>


                <div className="container">


                    <div className="row ">

                        <div className="col-12  d-flex justify-content-center">
                            <h1 className='mt-3'>Qualifications</h1>
                        </div>
                        <div className="col-12  d-flex justify-content-center " >
                            <p className='mb-4'>My Personel Journey</p>
                        </div>

                    </div>


                    <div className="row">


                        <div className="col-6 d-flex justify-content-end"      >

                            <h2 onClick={() => setEducation(true)  } className={Education? "EducationOn": ""}  >  <span><i class="fa fa-graduation-cap" aria-hidden="true"></i></span> Eduaction </h2>

                        </div>

                        <div className="col-6">
                            <h2 onClick={() => setEducation(false)}  className={Education? "": "EducationOff"} >    <span><i class="fa fa-briefcase"></i> </span> Experience </h2>

                        </div>


                    </div>


                    {Education ? (


                        <div className="row mt-5 rowEducationLine ">



                            <div className="col-6 d-flex  align-items-end flex-column colLeftEducation">
                                <div className='mr-4 '>
                                    <h4>Matric-Computer</h4>
                                    <h5>Chishtian Science School</h5>
                                    <p>Chishtian (2014-16)</p>

                                </div>

                            </div>
                            <div className="col-6">

                            </div>



                            <div className="col-6">

                            </div >
                            <div className="col-6 d-flex colRightEducation">
                                <div className='ml-4 '>
                                    <h4>Intermediate-ICS</h4>
                                    <h5>Punjab College</h5>
                                    <p>Chishtian (2016-18)</p>
                                </div>
                            </div>


                            <div className="col-6 d-flex  align-items-end flex-column colLeftEducation">
                                <div className='mr-4 '>
                                    <h4>BS-Computer Sceince</h4>
                                    <h5>University of Lahore</h5>
                                    <p>Lahore (2018-22)</p>
                                </div>
                            </div>
                            <div className="col-6">

                            </div>



                            <div className="col-6">

                            </div>
                            <div className="col-6 d-flex colRightEducation">
                                <div className='ml-4 '>
                                    <h4>Certificates</h4>
                                    <h5>Udemy, MDN</h5>
                                    <p>Online (2018-22)</p>
                                </div>
                            </div>


                        </div>


                    ) : (



                        <div className="row mt-5 rowEducationLine ">



                            <div className="col-6 d-flex  align-items-end flex-column colLeftEducation">
                                <div className='mr-4 '>
                                    <h4>HTML5 - CSS3 </h4>
                                    <h5>MDN Website</h5>
                                    <p>2018-20</p>

                                </div>

                            </div>
                            <div className="col-6">

                            </div>



                            <div className="col-6">

                            </div >
                            <div className="col-6 d-flex colRightEducation">
                                <div className='ml-4 '>
                                    <h4>Sass - Bootstrap5</h4>
                                    <h5>MDN Website</h5>
                                    <p>2018-20</p>
                                </div>
                            </div>


                            <div className="col-6 d-flex  align-items-end flex-column colLeftEducation">
                                <div className='mr-4 '>
                                    <h4>JavaScript</h4>
                                    <h5>Udemy Course</h5>
                                    <p>2021-22</p>
                                </div>
                            </div>
                            <div className="col-6">

                            </div>



                            <div className="col-6">

                            </div>
                            <div className="col-6 d-flex colRightEducation">
                                <div className='ml-4 '>
                                    <h4>React JS</h4>
                                    <h5>Udemy Course</h5>
                                    <p>2021-22</p>
                                </div>
                            </div>


                        </div>

                    )}





                </div>


            </div>




        </>
    )
}

export default Education
