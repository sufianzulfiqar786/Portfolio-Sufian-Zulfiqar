import React from 'react'
import '../CSS/Project.css'
import cardImg1 from "../Img/Adobe XD to React JS.PNG";
import cardImg2 from "../Img/Figma to React JS.PNG";
import cardImg3 from "../Img/Steps Forward and Backword.PNG";
import cardImg4 from "../Img/Login System.PNG";
import cardImg5 from "../Img/Loading More Pagination.PNG";
import cardImg6 from "../Img/Number Pagination.PNG";
import cardImg7 from "../Img/Word Counter.PNG";


const Project = () => {

    const data = [
        {
          id: 1,
          pic: cardImg1,
          title:"Adobe XD to React JS",
          link:'https://adobe-xd-to-react-js-sufian.netlify.app/',
           },
        {
          id: 2,
          pic: cardImg2,
          title:"Figma to React JS",
          link:'https://figma-to-react-js.netlify.app/',

        },
        {
          id: 3,
          pic: cardImg3,
          title:"Forward and Backword Steps",
          link:'https://forward-backword-steps-sufianzulfiqar.netlify.app/',

         },
         {
            id: 4,
            pic: cardImg4,
            title:"Login System",
            link:'https://login-system-sufian-zulfiqar.netlify.app/',
  
           },
           {
            id: 5,
            pic: cardImg5,
            title:"Loading more Pagination",
            link:'https://load-more-pagination-sufian-zulfiqar.netlify.app/',
  
           },
           {
            id: 6,
            pic: cardImg6,
            title:"Number Pagination",
            link:'https://number-pagination-sufian-zulfiqar.netlify.app/',
  
           },
           {
            id: 7,
            pic: cardImg7,
            title:"Words & Chareter Counter",
            link:'https://count-words-lines-dark-mode-sufian.netlify.app/',
  
           },
      ];


    return (
        <>

            <div className="fluid-container" id='portfolio'>

                <div className="container">

                    <div className="row ">

                        <div className="col-lg-12  d-flex justify-content-center">
                            <h1 className='mt-4'>Portfolio</h1>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center " >
                            <p className='mb-4'>Most recent work</p>
                        </div>

                    </div>


                    <div className="row mb-4">


                        {/* <div className="col-lg-4">

                            <div class="card ">

                                <div className="row ">

                                    <div className="col-lg-12 card__thumb">

                                        <img src={cardImg1} alt="Picture by Kyle Cottrell" class="card__image" />


                                    </div>

                                    <div className="row card__caption ">
                                        <div className="col-lg-12 bg-primar ">
                                            <h2 class="card__title ml-2">Adobe XD to React JS</h2>
                                        </div>
                                        <div className="col-lg-12">
                                            <a href="" class="card__button ml-2">Read more</a>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div> */}


{data &&
              data.map((el) => {
                return (

                        <div className="col-lg-4 col-md-6 col-12 mb-4 ">
                            <div className='cardbodyProject'>

                                <div className="row">
                                    <a href={el.link}>
                                        <div className="col-lg-12 cardimg">
                                            <div className='m-3 '>
                                                <img src={el.pic} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 cardText">
                                            <h4 className='ml-3' >{el.title}</h4>
                                        </div>

                                        <div className="col-lg-12 cardDemo">
                                            <p className='ml-3' >Demo	<span ><i class="fa-solid fa-arrow-right "></i></span></p>
                                        </div>

                                    </a>
                                </div>

                            </div>
                        </div>

);
})} 



                    </div>

{/* <hr className='my-5' /> */}
<hr className='my-0' />

                </div>

            </div>

        </>
    )
}

export default Project
