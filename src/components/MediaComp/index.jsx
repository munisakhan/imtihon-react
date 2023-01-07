import "./media.css"
import icon1 from "../../assets/icons/icon1.png"
import icon2 from "../../assets/icons/icon2.png"
import icon3 from "../../assets/icons/icon3.png"
import icon4 from "../../assets/icons/icon4.png"
import icon5 from "../../assets/icons/icon5.png"
import icon6 from "../../assets/icons/icon6.png"
import { NavLink } from "react-router-dom"
function MediaComp(){
    return(
        <>
        <header className="header-media">
            <div className="container">
            <h1>Media Services </h1>
            <div className="texts">
              <div className="divs">
                 <img src={icon1} alt="" />
                 <NavLink className="navlink" to="/prime">Prime</NavLink>
              </div>
              <div className="divs">
                 <img src={icon2} alt="" />
                 <NavLink className="navlink" to="/hbo">Hbo</NavLink>
              </div>
              <div className="divs">
                 <img src={icon3} alt="" />
                 <NavLink className="navlink" to="/disney">Disney</NavLink>
              </div>
              <div className="divs">
                 <img src={icon4} alt="" />
                 <NavLink className="navlink" to="/netflix">Netflix</NavLink>
              </div>
            
              <div className="divs">
                 <img src={icon6} alt="" />
                 <NavLink className="navlink" to="/hulu">Hulu</NavLink>
              </div>

              <div className="genres">
                <div className="container">
              <NavLink className="h5" to="/genre">Genre</NavLink>
              <NavLink className="h5" to="/action">Action</NavLink>
              <NavLink className="h5" to="/comedy">Comedy</NavLink>
              <NavLink className="h5" to="/western">Western</NavLink>
              <NavLink className="h5" to="/drama">Drama</NavLink>
              <NavLink className="h5" to="/thriller">Thriller</NavLink>
              </div>
              </div>
            </div>
            </div>
        </header>
        </>
    )
}
export default MediaComp