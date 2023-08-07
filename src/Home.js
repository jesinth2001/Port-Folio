import React from 'react'
import './css/home.css'
import Fade from 'react-reveal/Fade';
import Lottie from "lottie-react"
import animationData from "./Assets/newScene.json"

const records= [{value:6,name:"Months Experience"},
                {value:5,name:"Project completed"},
                {value:0,name:"Honors and awards"},
]
const arr=[
    {name:"UI/UX design"},
    {name:"Web development"},
    {name:"Backend development"},
    {name:"Frontend development"}]

    const work=[
        {name:"E-commerce Website"},
        {name:"Form with Api"},
        {name:"PortFolio"},
        {name:"Simple ChatBot"},
        {name:"Image Gallery"},
    ]

const Home = () => {
  return (
    <div className='home'>
        <Fade bottom>
        <section className='banner'>
            <div className='banner-det'>
                <h1>Discover my Amazing Art Space!</h1>
                <div className='intro'>
                <p><span>‹code›</span>I am Jesinth kumar,<span>‹code›</span></p>
                </div>
                <button className='exp-btn'>Explore Now</button>
            </div>
           
          <div style={{width:"40%"}}>
           <Lottie animationData={animationData}/>
          </div>
           

        </section>
        </Fade>



        <Fade bottom>
        <section className='records'>
            {
             records.map(i=>
                {
                    return(
                        <div >
                        <span>{i.value}</span>
                        <span>{i.name}</span>
                     </div>
                    )
                }
                )
             }
       
        </section>
        </Fade>
      


       <Fade bottom>
        <section className='service'>my services</section>
        <div className='allservices'>
         {
          arr.map(i=>
            {
              return(<div className='box'>
                <h3>{i.name}</h3>
                <h5>The href attribute requires a valid value to be accessible</h5>
              </div>)
            })
         }
                
        </div>
        </Fade>
      


        <Fade bottom>
        <section className='service'>my Works</section>
        <div className='allservices'>
         {
          work.map(i=>
            {
              return(<div className='box'>
                <h3>{i.name}</h3>
                <h5>The href attribute requires a valid value to be accessible</h5>
                <div className="trans-over">
                  <a href={""}>View more</a>
                </div>
              </div>)
            })
         }
                
        </div>
        </Fade>
       

        <Fade bottom>
        <section className='service'>skills</section>
        <div className='skillset'>
          <h3><span>✓</span>React js</h3>
          <h3><span>✓</span>Git Knowledge</h3>
          <h3><span>✓</span>Api Knowledge</h3>
          <h3><span>✓</span>Problem Solving</h3>
          <h3><span>✓</span>Aws Iaas (Ec2,S3,codebuild)</h3>
          <h3><span>✓</span>Object Oriented programming</h3>
        </div>
        </Fade>
   



    </div>
  )
}

export default Home