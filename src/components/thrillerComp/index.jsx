import "./thriller.css"
import drama1 from "../../assets/drama/drama1.jpg"
import drama2 from "../../assets/drama/drama2.jpg"
import boy from "../../assets/prime/boy.png"
import { NavLink } from "react-router-dom"

function ThrillerComp(){
    return(
        <>
      <div className="movies">
       <div className="first">
   <h1>Dramma films</h1>
   <NavLink to="/more" className="a1">See more</NavLink>
</div>
<div className="card">
   <ul>
     <li>
     <img src={drama2} alt="" />
     </li>
     <li>
     <img src={drama1} alt="" />
     </li>
     <li>
      <img src={boy} alt="" />
     </li>
   </ul>
</div>
</div>

        </>
    )
}
export default ThrillerComp