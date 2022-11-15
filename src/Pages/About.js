import React from 'react'
import '../CSS/About.css'

const About = () => {
  return (
    <>


      <div className="fluid-container aboutBody " id='about'>

        <div className="container">

          <div className="row ">

            <div className="col-lg-12 col-md-12  d-flex justify-content-center">
              <h1 className='mt-4'>About Me</h1>
            </div>
            <div className="col-lg-12 col-md-12 d-flex justify-content-center " >
              <p className='mb-4'>My introduction</p>
            </div>

          </div>

          <div className="row m-0 p-0 border mb-4 mt-2 aboutContent">

            <div className="col-lg-4 col-md-4 aboutImg m-0 p-0">
              <img src="https://avatars.githubusercontent.com/u/112078997?v=4" alt="" />
            </div>



            <div className="col-lg-8 col-md-8">



              <div className="row mt-2">
                <div className='col-lg-12 col-md-12'>

                  <h4><span>Name : </span>Sufian</h4>
                  <h4><span>Age : </span>23</h4>
                  <h4><span>Qualification : </span>BSCS</h4>
                  <h4><span>Post : </span>Front End Development</h4>
                  <h4><span>Language : </span>English/Urdu</h4>

                </div>
              </div>




              <div className="row mb-4 mt-4">
                <div className="col-lg-4 col-md-4">
                  <div className=' mt-lg-0 mt-md-0 mt-3'>
                    <div className="row border aboutBox m-0 p-0 ">
                      <div className="col-lg-12 col-md-12  d-flex justify-content-center ">
                        <p style={{ fontWeight: "bold", fontSize: "22px", marginBottom: "0px", marginTop: "10px" }} ><i class="fa fa-graduation-cap" aria-hidden="true"></i></p>
                      </div>
                      <div className="col-lg-12 col-md-12 d-flex justify-content-center ">
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Graduation</p>
                      </div>
                      <div className="col-lg-12 col-md-12 d-flex justify-content-center ">
                        <p style={{ marginBottom: "15px", marginTop: "-6px", fontSize: "14px", color: "grey" }} >Completed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4">
                  <div className=' mt-lg-0 mt-md-0 mt-3'>
                    <div className="row border aboutBox m-0 p-0 ">
                      <div className="col-lg-12  col-md-12 d-flex justify-content-center ">
                        <p style={{ fontWeight: "bold", fontSize: "22px", marginBottom: "0px", marginTop: "10px" }} ><i class="fa fa-certificate" aria-hidden="true"></i></p>
                      </div>
                      <div className="col-lg-12 col-md-12 d-flex justify-content-center ">
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Certificates</p>
                      </div>
                      <div className="col-lg-12 col-md-12 d-flex justify-content-center ">
                        <p style={{ marginBottom: "15px", marginTop: "-6px", fontSize: "14px", color: "grey" }} >5+</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4">
                  <div className=' mt-lg-0 mt-md-0 mt-3'>
                    <div className="row border aboutBox m-0 p-0 ">
                      <div className="col-lg-12  col-md-12  d-flex justify-content-center ">
                        <p style={{ fontWeight: "bold", fontSize: "23px", marginBottom: "0px", marginTop: "10px" }} ><i class="fa-solid fa-award"></i></p>
                      </div>
                      <div className="col-lg-12 col-md-12 d-flex justify-content-center ">
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Rewards</p>
                      </div>
                      <div className="col-lg-12 col-md-12 d-flex justify-content-center ">
                        <p style={{ marginBottom: "15px", marginTop: "-6px", fontSize: "14px", color: "grey" }} >3+</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              <div className="row mt-3 mb-3">
                <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-end align-items-center"><button className='aboutbtn'>Hire me</button></div>
                <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-start align-items-center"><button className='aboutbtn'>Get Resume</button></div>
              </div>

            </div>

          </div>

<hr className='mt-5' />
{/* <hr className='mt-0' /> */}

        </div>

      </div>
    </>
  )
}

export default About
