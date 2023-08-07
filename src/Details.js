import React from 'react'
import "./css/details.css"
import Line from './Line'
import {FaDownload} from 'react-icons/fa'
import Resume from "./Jesinth Kumar S _Resume.pdf"

const skill=[{name:"Html",percent:"100%",per:"100"},
            {name:"Css",percent:"95%",per:"95"},
            {name:"Javascript",percent:"90%",per:"90"},
            {name:"React",percent:"95%",per:"95"},
            {name:"Java",percent:"90%",per:"90"},

            ,]
const l=[{name:"English",percent:90},{name:"Tamil",percent:100}]

const area=(b)=>
{
    const a=2*3.14*38;
    const offset=a-((b/100)*a)
    return offset
}


const Details = () => {
  return (
    <div className="details" >
        <section className='Personal-det'>
          <div><span>Age :</span><span>22</span></div>
          <div><span>State :</span><span>Tamilnadu</span></div>
          <div><span>City :</span><span>Madurai</span></div>
        </section>
        <Line></Line>
        <section className='skill-det'>
         {
            skill.map(item=>
                {
                    return(
                                            <div className="skill-item">
                                                <div className='name'>
                                                <span>{item.name}</span>
                                                <span>{item.percent}</span>
                                                </div>
                                                <div className='progress'>
                                                    <div className='inner-progress' style={{"--percent":`${item.per}%`}}></div>
                                                </div>
                                            </div>)
                })
         }
        </section>
        <Line></Line>
        <section className='language'>
            {
            l.map(lang =>
            {
         return( <div className='lang-cont'> 
         <svg>
          <circle cx="50%" cy="50%" r="38"></circle>
          <circle cx="50%" cy="50%" r="38" style={{"--dArray":area(lang.percent)}}></circle>
         </svg>
         <div className='lang-det'>
       <h2>{lang.percent}<span>%</span></h2>
       <h4>{lang.name}</h4>
       </div >
      </div>)
            })
        }
           
        </section>
        <Line></Line>
        <section className='cv'>
        <a href={Resume} download="Resume">Download CV<span><FaDownload></FaDownload></span></a>
        </section>
    </div>
  )
}

export default Details 