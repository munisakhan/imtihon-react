import "./hulu.css"
import hulu1 from "../../assets/hulu/hulu1.webp"
import hulu2 from "../../assets/hulu/hulu2.webp"
import hulu3 from "../../assets/hulu/hulu3.webp"
import { NavLink } from "react-router-dom"

function HuluComp(){
    return(
        <>
      <div className="movies">
        <div className="container">
       <div className="first">
   <h1>Hulu movies</h1>
   <NavLink to="/more" className="a1" >See more</NavLink>
</div>
<div className="card">
   <ul>
     <li>
     <img src={hulu1} alt="" />
     </li>
     <li>
      <img src={hulu2} alt="" />
     </li>
     <li>
      <img src={hulu3} alt="" />
     </li>
   </ul>
</div>
</div>
</div>

        </>
    )
}
export default HuluComp