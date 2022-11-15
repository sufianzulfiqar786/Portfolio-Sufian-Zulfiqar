import React, { useState } from 'react'
import '../CSS/Education.css'
// import '../CSS/About.css'

const Education = () => {

    const [Education, setEducation] = useState(true);

    console.log(Education)

    return (
        <>



            <div className="fluid-container" id='education'>


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

                        <div className="col-6 EduMainParent ">

                            <div className="row">

                                <div className="col-lg-6 EduIconParent ">
                                    {/* <span onClick={() => setEducation(true)} className={Education ? " EduIconOn1 " : "EduIconOff1 "}  >  <i class="fa fa-graduation-cap" aria-hidden="true"    ></i>  </span> */}
                                    <span onClick={() => setEducation(true)} className={Education ? " EduIconOn " : "EduIconOff "}  >  <i class="fa fa-graduation-cap" aria-hidden="true"    ></i>  </span>

                                </div>
                                <div className="col-lg-6 EduTextParent ">
                                    {/* <p onClick={() => setEducation(true)} className={ Education ? " EdutextOn1 " : "EdutextOff1 "}  >   Eduaction </p> */}
                                    <p onClick={() => setEducation(true)} className={Education ? " EdutextOn " : "EdutextOff "}  >   Eduaction </p>
                                </div>

                            </div>

                        </div>

                        <div className="col-6 EduMainParent1 ">

                            <div className="row">

                                <div className="col-lg-6 EduIconParent1   ">
                                    <span onClick={() => setEducation(false)} className={Education ? "EduIconOff " : "EduIconOn "}  >  <i class="fa fa-briefcase" aria-hidden="true"    ></i>  </span>

                                </div>
                                <div className="col-lg-6 EduTextParent1 ">
                                    <p onClick={() => setEducation(false)} className={Education ? " EdutextOff " : "EdutextOn"}  >   Skill </p>
                                </div>

                            </div>

                        </div>


                    </div>


                    {Education ? (


                        <div className="row mt-lg-5 mt-4 rowEducationLine ">



                            <div className="col-6 d-flex  align-items-end flex-column colLeftEducation">
                                <div className=' Matric '>
                                    <p className='EduH1p'>Matric-Computer</p>
                                    <p className='EduH2p'>Chishtian Science School</p>
                                    <p className='EduH3p' >Chishtian (2014-16)</p>

                                </div>

                            </div>
                            <div className="col-6">

                            </div>



                            <div className="col-6">

                            </div >
                            <div className="col-6 d-flex colRightEducation">
                                <div className='ml-4 '>
                                    <p className='EduH1p'>Intermediate-ICS</p>
                                    <p className='EduH2p'>Punjab College</p>
                                    <p className='EduH3p'>Chishtian (2016-18)</p>
                                </div>
                            </div>


                            <div className="col-6 d-flex  align-items-end flex-column colLeftEducation">
                                <div className='mr-4 '>
                                    <p className='EduH1p'>BS-Computer Sceince</p>
                                    <p className='EduH2p'>University of Lahore</p>
                                    <p className='EduH3p'>Lahore (2018-22)</p>
                                </div>
                            </div>
                            <div className="col-6">

                            </div>



                            <div className="col-6">

                            </div>
                            <div className="col-6 d-flex colRightEducation">
                                <div className='ml-4 '>
                                    <p className='EduH1p'>Certificates</p>
                                    <p className='EduH2p'>Udemy, MDN</p>
                                    <p className='EduH3p'>Online (2018-22)</p>
                                </div>
                            </div>


                        </div>




                    ) : (



                        <div className="row mt-lg-5 mt-4  rowEducationLine ">



                            <div className="col-6 d-flex  align-items-end flex-column colLeftEducation">
                                <div className='mr-4 '>
                                    <p className='EduH1p'>HTML5 - CSS3 </p>
                                    <p className='EduH2p'>MDN Website</p>
                                    <p className='EduH3p'>2018-20</p>

                                </div>

                            </div>
                            <div className="col-6">

                            </div>



                            <div className="col-6">

                            </div >
                            <div className="col-6 d-flex colRightEducation">
                                <div className='ml-4 '>
                                    <p className='EduH1p'>Sass - Bootstrap5</p>
                                    <p className='EduH2p'>MDN Website</p>
                                    <p className='EduH3p'>2018-20</p>
                                </div>
                            </div>


                            <div className="col-6 d-flex  align-items-end flex-column colLeftEducation">
                                <div className=' JavaScript'>
                                    <p className='EduH1p'>JavaScript</p>
                                    <p className='EduH2p'>Udemy Course</p>
                                    <p className='EduH3p'>2021-22</p>
                                </div>
                            </div>
                            <div className="col-6">

                            </div>



                            <div className="col-6">

                            </div>
                            <div className="col-6 d-flex colRightEducation">
                                <div className='ml-4 '>
                                    <p className='EduH1p'>React JS</p>
                                    <p className='EduH2p'>Udemy Course</p>
                                    <p className='EduH3p'>2021-22</p>
                                </div>
                            </div>


                        </div>

                    )}



<hr className='mt-5' />
{/* <hr className='mt-0' /> */}

                </div>


            </div>




        </>
    )
}

export default Education
