import GenreComp from "../../components/genreComp"
import Navbar from "../../components/HomeComp/navbar"
import MainComp from "../../components/MainComp"
import MediaComp from "../../components/MediaComp"

function Genre(){
    return(
        <>
           <div className="container">
        <div className="all">
        <Navbar/>
        <MainComp/>
        <MediaComp/>
        </div>
      
        </div>
     
  <GenreComp/>
    </>
    )
}
export default Genre