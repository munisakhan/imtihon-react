import "./hbo.css"
import hbo1 from "../../assets/hbo/hbo1.webp"
import woman from "../../assets/prime/woman.png"
import spiderman from "../../assets/prime/spiderman.png"
import { NavLink } from "react-router-dom"

function HboComp(){
    return(
        <>
      <div className="movies">
       <div className="first">
   <h1>Hbo Max films</h1>
   <NavLink to="/more" className="a1" >See more</NavLink>
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
      <img src={spiderman} alt="" />
     </li>
   </ul>
</div>
</div>

        </>
    )
}
export default HboComp