import PrimeComp from "../../components/primeComp"
import Navbar from "../../components/HomeComp/navbar"
import MainComp from "../../components/MainComp"
import MediaComp from "../../components/MediaComp"
import MoviesComp from "../../components/Movies"


function Prime(){
    return(
        <>
           <div className="container">
        <div className="all">
        <Navbar/>
        <MainComp/>
        <MediaComp/>
        </div>
      
        </div>
     
  <PrimeComp/>
    </>
    )
}
export default Prime