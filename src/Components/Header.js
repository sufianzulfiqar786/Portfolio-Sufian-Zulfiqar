import React, { useState } from 'react'
import '../CSS/Header.css'
// @ts-ignore
// import WaterWave from "react-water-wave";
// import styled from "@emotion/styled";
import { Link } from 'react-scroll';

// background: url("https://haidar-portfolio.netlify.app/static/media/isto.c64f6db2e6919557c69b.jpg")

// const Container = styled(WaterWave)`
//   width: 100vw;
//   background: url("https://static.vecteezy.com/system/resources/previews/002/202/047/original/blue-high-tech-futuristic-cyberspace-technology-background-free-vector.jpg")
//     no-repeat center fixed;
//   background-size: cover;
//   position: sticky;
//   top: -76%; 
// `;


// min-height: 90vh;  for background height

export default function Header() {

    const [MobileMenu1, setMobileMenu1] = useState(true);

    const [scrollHeader, setScrollHeader] = useState(false)
    // const img = "https://www.prajwaldesai.com/wp-content/uploads/2015/11/desk_items.jpg"



    const changeValueOnScroll = () => {

        const scrollValue = document.documentElement.scrollTop;
        if (scrollValue > 500) {
            setScrollHeader(true)
        }
        else {
            setScrollHeader(false)
        }

    }

    window.addEventListener('scroll', changeValueOnScroll)

    return (
        // <Container dropRadius={20} perturbance={0.08}>
        //     {(methods) => <div>







                <div className="fluid-container headerBody">

                    <div className="row header1strow1">

                        <div className={!scrollHeader ? "col-6 header1strow1Column1st1 d-flex align-items-center justify-content-center " : " col-4 header1strow1Column1st2  d-flex align-items-end justify-content-center "}>
                            <img style={{ marginTop: "2%" }} src="https://avatars.githubusercontent.com/u/112078997?v=4" alt="" />
                            <p >Hi There...</p>
                            {!scrollHeader ? <h1>I am Sufian Zulfiqar</h1> : <h1 className='mx-3' style={{ marginBottom: "7%", color: "#ffc107", fontSize: "2.9vw" }}> Sufian Zulfiqar</h1>}
                            {!scrollHeader ? <h1>I am React JS Developer</h1> : ""}

                        </div>

                        <div className={!scrollHeader ? "col-6 header1strow1Column2nd1 d-flex align-items-center justify-content-center" : "col-8 header1strow1Column2nd2  d-flex align-items-end justify-content-center "}>
                            {!scrollHeader ? <Link >Home</Link> : <Link style={{ marginBottom: "2.5%" }}>Home</Link>}
                            {!scrollHeader ? <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >About</Link> : <Link style={{ marginBottom: "2.5%" }}  activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}  >About</Link>}
                            {!scrollHeader ? <Link>Education</Link> : <Link style={{ marginBottom: "2.5%" }}>Education</Link>}
                            {!scrollHeader ? <Link>Portfolio</Link> : <Link style={{ marginBottom: "2.5%" }}>Portfolio</Link>}
                            {!scrollHeader ? <Link>Contact</Link> : <Link style={{ marginBottom: "2.5%" }}>Contact</Link>}

                        </div>

                    </div>


                    <div className="row header1strow2 m-0 p-0">

                        <div className="col-12 text-light m-0 p-0">
                            {MobileMenu1 ? (
                                <i
                                    class="MobileMenu1Icon  ml-2 mt-2  fa-solid fa-bars"
                                    onClick={() => setMobileMenu1(!MobileMenu1)}
                                ></i>
                            ) : (
                                <i
                                    class=" MobileMenu1Icon  ml-2 mt-2 fa fa-times"
                                    aria-hidden="true"
                                    onClick={() => setMobileMenu1(!MobileMenu1)}
                                ></i>
                            )}
                        </div>

                        <div className={MobileMenu1 ? " notheight1 notheight2" : "notheight1 mobile-screen"}  >

                            <div className={MobileMenu1 ? " notheight " : "notheight  InnerClassMobileScreen headerMobileSideBar "}>
                                <i
                                    class=" MobileMenu1Icon  ml-2 mt-2 fa fa-times"
                                    aria-hidden="true"
                                    onClick={() => setMobileMenu1(!MobileMenu1)}
                                ></i>
                                <Link className='d-flex justify-content-center text-light'>Home</Link>
                                <Link className='d-flex justify-content-center text-light'>About</Link>
                                <Link className='d-flex justify-content-center text-light'>Education</Link>
                                <Link className='d-flex justify-content-center text-light'>Portfolio</Link>
                                <Link className='d-flex justify-content-center text-light'>Contact</Link>

                            </div>

                        </div>




                    </div>


                    <div className="row header1strow3 m-0 p-0">
                        <div className="col-12 header1strow3Col1 d-flex align-items-center justify-content-center">
                            <img style={{ marginTop: "0%" }} src="https://avatars.githubusercontent.com/u/112078997?v=4" alt="" />
                            <p >Hi There...</p>
                            <h1>I am Sufian Zulfiqar</h1>
                            <h1>I am React JS Developer</h1>
                        </div>
                    </div>


                </div>







        //     </div>}
        // </Container>
    );
}
