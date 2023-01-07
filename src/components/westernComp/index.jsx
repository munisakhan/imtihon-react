import "./western.css"
import img2 from "../../assets/main/img2.gif"
import hulu1 from "../../assets/hulu/hulu1.webp"
import img3 from "../../assets/images/img3.png"
import { NavLink } from "react-router-dom"

function WesternComp(){
    return(
        <>
      <div className="movies">
       <div className="first">
   <h1>WESTERN films</h1>
   <NavLink to="/more" className="a1">See more</NavLink>
</div>
<div className="card">
   <ul>
     <li>
     <img src={img3} alt="" />
     </li>
     <li>
      <img src={hulu1} alt="" />
     </li>
     <li>
      <img src={img2} alt="" />
     </li>
   </ul>
</div>
</div>

        </>
    )
}
export default WesternComp