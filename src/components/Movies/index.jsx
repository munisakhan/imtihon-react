import "./movies.css"
import img1 from "../../assets/images/img1.png"
import imgsecond from "../../assets/images/img2.png"
import imgthird from "../../assets/images/img3.png"
import { NavLink } from "react-router-dom"
function MoviesComp(){
   return(
      <>
      <div className="movies">
       <div className="first">
   <h1>Continue Watching for nd3r4a</h1>
   <NavLink className="alink" to="/more">See more</NavLink>
</div>
<div className="card">
   <ul>
     <li>
      <img src={img1} alt="" />
     </li>
     <li>
      <img src={imgsecond} alt="" />
     </li>
     <li>
      <img src={imgthird} alt="" />
     </li>
   </ul>
</div>
</div>

      </>
   )
}
export default MoviesComp
