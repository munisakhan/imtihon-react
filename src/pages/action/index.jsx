import ActionComp from "../../components/actionComp"
import Navbar from "../../components/HomeComp/navbar"
import MainComp from "../../components/MainComp"
import MediaComp from "../../components/MediaComp"


function Action(){
    return(
        <>
           <div className="container">
        <div className="all">
        <Navbar/>
        <MainComp/>
        <MediaComp/>
        </div>
      
        </div>
     
  <ActionComp/>
    </>
    )
}
export default Action