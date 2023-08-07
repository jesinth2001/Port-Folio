import "./css/about.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import ValueProvider from "./ValueProvider"

const About = () => {

  const [localstate,setLocalState,nave,setNav]=useContext(ValueProvider)


  return (<div>
    <section className="about-title">
       <span>About</span>
       <div className="decorate-about"></div> 
        </section>
    <div className="about-page">
        <div className="about-left">
            <div className="about-me">
            <h3>SO Whom am I?</h3>
            <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md</p>
            </div>
        </div>
        <div className="about-right">
          <div className="about-photo"></div>
          <div className="view-aboutimage">
            <button className="view-more">
              view
            </button>
          </div>
        </div>
       
    </div>
    <div className="about-btn">
      <Link to={"/contact"}>
        <button id="contact" onClick={(e)=>setNav(e.target.id)}> contact </button>
        </Link>
       
    </div>
    </div>
  )
}

export default About