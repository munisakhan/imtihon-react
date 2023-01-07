import hbo1 from "../../assets/hbo/hbo1.webp"
import woman from "../../assets/prime/woman.png"
import spiderman from "../../assets/prime/spiderman.png"
import hulu2 from "../../assets/hulu/hulu2.webp"
import hulu3 from "../../assets/hulu/hulu3.webp"
import disney1 from "../../assets/disney/disney1.webp"
import disney2 from "../../assets/disney/disney2.jpg"
import disney3 from "../../assets/disney/disney3.jpg"
import drama1 from "../../assets/drama/drama1.jpg"
import drama2 from "../../assets/drama/drama2.jpg"
import drama3 from "../../assets/drama/drama3.jpg"
import { NavLink } from "react-router-dom"

import "./search.css"

function SearchComp(){
    return(
      <>
       <header className="header_search">
        <div className="container">
        <div className="small">
             <h1>All movies</h1>
          <NavLink to="/" className="home">Home</NavLink>
          <NavLink to="/more" className="see" >See more</NavLink>
          </div>
          <div className="card">
   <ul>
     <li>
      <img src={hbo1} alt="" />
      <NavLink className="films" to="/prime">Prime</NavLink>
     </li>
     <li>
     <img src={woman} alt="" />
     <NavLink className="films" to="/hbo">Hbo</NavLink>
     </li>
     <li>
     <img src={hulu2} alt="" />
     <NavLink className="films" to="/disney">Disney</NavLink>
     </li>
   </ul>
   <ul className="second-ul">
     <li>
     <img src={disney1} alt="" />
     <NavLink className="films" to="/netflix">Netflix</NavLink>
     </li>
     <li>
     <img src={spiderman} alt="" />
     <NavLink className="films" to="/hulu">Hulu</NavLink>
     </li>
     <li>
     <img src={hulu3} alt="" />
     <NavLink className="films" to="/genre">Genre</NavLink>
     </li>
   </ul>
   <ul className="second-ul">
     <li>
     <img src={disney2} alt="" />
     <NavLink className="films" to="/action">Action</NavLink>
     </li>
     <li>
     <img src={drama1} alt="" />
     <NavLink className="films" to="/comedy">Comedy</NavLink>
     </li>
     <li>
     <img src={disney3} alt="" />
     <NavLink className="films" to="/western">Western</NavLink>
     </li>
   </ul>
   <ul className="second-ul">
     <li>
     <img src={drama2} alt="" />
     <NavLink className="films" to="/drama">Drama</NavLink>
     </li>
     <li>
     <img src={drama3} alt="" />
     <NavLink className="films" to="/thriller">Thriller</NavLink>
     </li>
   </ul>
</div>
          </div>
       </header>
      </>
    )
}
export default SearchComp