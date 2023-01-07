import "./action.css"
import img2 from "../../assets/main/img2.gif"
import img1 from "../../assets/images/img1.png"
import img3 from "../../assets/images/img3.png"
import { NavLink } from "react-router-dom"

function ActionComp(){
    return(
        <>
      <div className="movies">
       <div className="first">
   <h1>Action films</h1>
   <NavLink to="/more" className="a1">See more</NavLink>
</div>
<div className="card">
   <ul>
     <li>
      <img src={img2} alt="" />
     </li>
     <li>
      <img src={img1} alt="" />
     </li>
     <li>
      <img src={img3} alt="" />
     </li>
   </ul>
</div>
</div>

        </>
    )
}
export default ActionComp