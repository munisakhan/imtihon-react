import "./prime.css"
import spiderman from "../../assets/prime/spiderman.png"
import woman from "../../assets/prime/woman.png"
import imgthird from "../../assets/images/img3.png"
import { NavLink } from "react-router-dom"

function PrimeComp(){
    return(
        <>
   <div className="movies">
      <div className="container">
       <div className="first">
   <h1>Prime movies</h1>
   <NavLink to="/more" className="a1">See more</NavLink>
</div>
<div className="card">
   <ul>
     <li>
      <img src={spiderman} alt="" />
     </li>
     <li>
      <img src={imgthird} alt="" />
     </li>
     <li>
     <img src={woman} alt="" />
     </li>
   </ul>
</div>
</div>
</div>

        </>
    )
}
export default PrimeComp