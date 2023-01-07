import {DataRouter} from "./data-router"
import { Routes, Route } from "react-router-dom"
import { Suspense } from "react";

function RouterComponent(){
    return(
        <Routes>
        {DataRouter.map(elem=>
           <Route key={elem.id} path={elem.path} element={<Suspense fallback={<h1>Loading...</h1>}>
           {elem.component}
       </Suspense>}/>

        )}
    </Routes>
    )

}
export default RouterComponent