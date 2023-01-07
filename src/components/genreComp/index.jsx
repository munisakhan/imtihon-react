import "./genre.css"
import img3 from "../../assets/main/img3.webp"
import woman from "../../assets/prime/woman.png"
import spiderman from "../../assets/prime/spiderman.png"
import { NavLink } from "react-router-dom"

function GenreComp(){
    return(
        <>
      <div className="movies">
       <div className="first">
   <h1>Genre films</h1>
   <NavLink to="/more" className="a1">See more</NavLink>
</div>
<div className="card">
   <ul>
     <li>
      <img src={img3} alt="" />
     </li>
     <li>
      <img src={spiderman} alt="" />
     </li>
     <li>
      <img src={woman} alt="" />
     </li>
   </ul>
   <ul className="second-ul">
     <li>
     <img src={spiderman} alt="" />
     </li>
     <li>
     <img src={woman} alt="" />
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
export default GenreComp