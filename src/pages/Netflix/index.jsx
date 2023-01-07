import NetflixComp from "../../components/NetflixComp"
import Navbar from "../../components/HomeComp/navbar"
import MainComp from "../../components/MainComp"
import MediaComp from "../../components/MediaComp"

function Netflix(){
    return(
        <>
           <div className="container">
        <div className="all">
        <Navbar/>
        <MainComp/>
        <MediaComp/>
        </div>
      
        </div>
     
  <NetflixComp/>
    </>
    )
}
export default Netflix