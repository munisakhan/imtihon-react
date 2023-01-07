import "./more.css"
import spiderman from "../../assets/prime/spiderman.png"
import woman from "../../assets/prime/woman.png"
import imgthird from "../../assets/images/img3.png"
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import boy from "../../assets/prime/boy.png"
import { NavLink } from "react-router-dom"

function MoreComp(){
    return(
        <>
      <div className="movies">
        <div className="container">
       <div className="first">
   <h1>Information about movies</h1>
   <NavLink to="/" className="a1">Home</NavLink>
</div>
<div className="card">
   <ul>
     <li>
        <h1>SPIDERMAN</h1>
      <img src={spiderman} alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta recusandae, laboriosam ratione quam cumque nisi debitis nulla magni odit voluptate.</p>
     </li>
     <li>
        <h1>WOMAN</h1>
      <img src={woman} alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque fugit omnis architecto, eius suscipit perferendis molestiae ullam libero similique.</p>
     </li>
     <li>
        <h1>BRIDGERTON</h1>
      <img src={imgthird} alt="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus atque obcaecati dolores dignissimos placeat ipsam repellat commodi</p>
     </li>
   </ul>
   <ul className="second-ul">
     <li>
        <h1>IN BETWEEN</h1>
      <img src={img1} alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta recusandae, laboriosam ratione quam cumque nisi debitis nulla magni odit voluptate.</p>
     </li>
     <li>
        <h1>SUITS</h1>
      <img src={img2} alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque fugit omnis architecto, eius suscipit perferendis molestiae ullam libero similique.</p>
     </li>
     <li>
        <h1>ABOUT</h1>
      <img src={boy} alt="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus atque obcaecati dolores dignissimos placeat ipsam repellat commodi</p>
     </li>
   </ul>
</div>
</div>
</div>
</>
    )
}
export default MoreComp