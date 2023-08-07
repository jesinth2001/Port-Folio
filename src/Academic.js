
import "./css/Academy.css"

const grade=[{name:"Dolphin Matric Higher Secondary School",year:2017,Qualifiaction:"X",place:"Madurai",grade:"88.4"},
{name:"Dolphin Matric Higher Secondary School",year:2018,Qualifiaction:"XI",place:"Madurai",grade:"67"},
{name:"Dolphin Matric Higher Secondary School",year:2019,Qualifiaction:"XII",place:"Madurai",grade:"67.7"},
{name:"Psna college of Engineering and Technology",year:2023,Qualifiaction:"B.E cse",place:"Dindigul",grade:"80.3"},
]

const dashes=202.6;

const calculate = (percent) =>
{
 
console.log(dashes)
const offset= dashes-dashes*(percent/100)
console.log(offset)
return offset
}


export const Academic = () => {
  return (
    <div>
      <section className="Acc-Heading">
        <span>Academics</span>
      <div className="deco"></div>
      </section>
    <div className="Acadmey-cont">
       
            <div className="left">
                {
         grade.map(i=>
                {
        return( <div className="history-box">
            <h4>{i.name}</h4>
            <h4><span>Passed out : </span>{i.year}</h4>
            <h4><span>Qualifiaction : </span>{i.Qualifiaction}</h4>
            <h4><span>Place : </span>{i.place}</h4>

            <div className="circular-progress">
              <div className="percent-cont">
                <svg>
                  <circle cx="70" cy="70" r="32"></circle>
                  <circle cx="70" cy="70" r="32" style={{"--d":dashes,"--of":calculate(i.grade)}} ></circle>
                </svg>
                <div  className="number">
                  <h2>{i.grade}<span>%</span></h2>
               
                </div>
              </div>
              <h4>Grade</h4>
            </div>
            
            
           
        </div>)
                }
            )
             }
             </div>
              <div className="right">
                <div className="progression">
                    <div className="radio-bar">✓</div>
                    <div className="radio-bar">✓</div>
                    <div className="radio-bar">✓</div>
                    <div className="radio-bar">✓</div>
                </div>
              </div>
             
    </div>
    </div>
  )
}
export default Academic