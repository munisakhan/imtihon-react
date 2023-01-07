import Home from "../pages/Home"
import Prime from "../pages/prime"
import Hbo from "../pages/Hbo"
import Disney from "../pages/disney"
import Genre from "../pages/genre"
import Action from "../pages/action"
import More from "../pages/More"
import Netflix from "../pages/Netflix"
import Hulu from "../pages/hulu"
import Comedy from "../pages/comedy"
import Western from "../pages/western"
import Drama from "../pages/drama"
import Thriller from "../pages/thriller"
import Search from "../pages/search"

export const DataRouter = [
    {
        id : 1,
        path : "/",
        component: <Home/>
    },  
    {
        id : 2,
        path : "/prime",
        component: <Prime/>
    },  
    {
        id : 3,
        path : "/hbo",
        component: <Hbo/>
    },  
    {
        id : 4,
        path : "/disney",
        component: <Disney/>
    },  
    {
        id : 5,
        path : "/genre",
        component: <Genre/>
    },  
    {
        id : 6,
        path : "/action",
        component: <Action/>
    },  
    {
        id : 7,
        path : "/more",
        component: <More/>
    },  
    {
        id : 8,
        path : "/netflix",
        component: <Netflix/>
    },  
    {
        id : 9,
        path : "/hulu",
        component: <Hulu/>
    },  
    {
        id : 10,
        path : "/comedy",
        component: <Comedy/>
    },  
    {
        id : 11,
        path : "/western",
        component: <Western/>
    },  
    {
        id : 12,
        path : "/drama",
        component: <Drama/>
    }, 
    {
        id : 13,
        path : "/thriller",
        component: <Thriller/>
    }, 
    {
        id : 14,
        path : "/search",
        component: <Search/>
    }, 

]