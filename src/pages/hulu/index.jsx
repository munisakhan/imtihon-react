import HuluComp from "../../components/huluComp"
import Navbar from "../../components/HomeComp/navbar"
import MainComp from "../../components/MainComp"
import MediaComp from "../../components/MediaComp"

function Hulu(){
    return(
        <>
           <div className="container">
        <div className="all">
        <Navbar/>
        <MainComp/>
        <MediaComp/>
        </div>
      
        </div>
     
  <HuluComp/>
    </>
    )
}
export default Hulu