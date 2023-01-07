import "./comedy.css"
import hbo1 from "../../assets/hbo/hbo1.webp"
import woman from "../../assets/prime/woman.png"
import spiderman from "../../assets/prime/spiderman.png"
import hulu2 from "../../assets/hulu/hulu2.webp"
import hulu3 from "../../assets/hulu/hulu3.webp"
import { NavLink } from "react-router-dom"

function ComedyComp(){
    return(
        <>
      <div className="movies">
       <div className="first">
   <h1>Comedy films</h1>
   <NavLink to="/more" className="a1">See more</NavLink>
</div>
<div className="card">
   <ul>
     <li>
      <img src={hbo1} alt="" />
     </li>
     <li>
     <img src={woman} alt="" />
     </li>
     <li>
     <img src={hulu2} alt="" />
     </li>
   </ul>
   <ul className="second-ul">
     <li>
     <img src={hulu3} alt="" />
     </li>
     <li>
     <img src={spiderman} alt="" />
     </li>
     <li>
     <img src={hulu3} alt="" />
     </li>
   </ul>
</div>
</div>

        </>
    )
}
export default ComedyComp