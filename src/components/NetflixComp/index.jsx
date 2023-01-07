import "./netflix.css"
import hbo1 from "../../assets/hbo/hbo1.webp"
import img1 from "../../assets/images/img1.png"
import img3 from "../../assets/images/img3.png"
import { NavLink } from "react-router-dom"

function NetflixComp(){
    return(
        <>
      <div className="movies">
        <div className="container">
       <div className="first">
   <h1>Watch films in netflix</h1>
   <NavLink to="/more" className="a1" >See more</NavLink>
</div> 

<div className="card">
   <ul>
     <li>
     <img src={img1} alt="" />
     </li>
     <li>
      <img src={hbo1} alt="" />
     </li>
     <li>
      <img src={img3} alt="" />
     </li>
   </ul>
</div>
</div>
</div>

</>
)
}
export default NetflixComp