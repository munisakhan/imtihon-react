import "./disney.css"
import disney1 from "../../assets/disney/disney1.webp"
import disney2 from "../../assets/disney/disney2.jpg"
import disney3 from "../../assets/disney/disney3.jpg"
import { NavLink } from "react-router-dom"

function DisneyComp(){
    return(
        <>
      <div className="movies">
       <div className="first">
   <h1>Disney cartoon</h1>
   <NavLink to="/more" className="a1" >See more</NavLink>
</div>
<div className="card">
   <ul>
     <li>
      <img src={disney1} alt="" />
     </li>
     <li>
      <img src={disney2} alt="" />
     </li>
     <li>
      <img src={disney3} alt="" />
     </li>
   </ul>
</div>
</div>

        </>
    )
}
export default DisneyComp