import Navbar from "../../components/HomeComp/navbar"
import MainComp from "../../components/MainComp"
import MediaComp from "../../components/MediaComp"
import MoviesComp from "../../components/Movies"
import "./home.css"

function Home(){
    return(
        <>
          <div className="container">
        <div className="all">
        <Navbar/>
        <MainComp/>
        <MediaComp/>
        </div>
      
        </div>
        <MoviesComp/>
        </>
    )
}

export default Home