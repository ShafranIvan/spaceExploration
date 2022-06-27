import { useEffect, useState } from "react";
import {Routes, Route, useLocation} from "react-router-dom"

import Header from "./components/Header/Header";
import destinations from "./pages/Destination/data/destanations";

import Destination from "./pages/Destination/Destination";
import Home from "./pages/Home/Home";
import links from "./pages"
import PageContainer from "./components/PageContainer/PageContainer";

function App() {
  const path = useLocation()
  const [bgClass, setBgClass] = useState("");
  
  /* Set bg image from links object based on current page */
  useEffect(()=> {
    for (let link of links){
      if (path.pathname.includes(link.to)) {
        setBgClass(link.imageClasses)
      }
    }
  }, [path])

  return (<>
    <div className={"w-screen top-0 left-0 h-screen fixed -z-50 bg-cover bg-fixed bg-no-repeat bg-neutral " + bgClass}/>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path={"/destination/"} element={<PageContainer  title="Pick your destination"/>}>
        <Route index element={<Destination dest={destinations[0]}/>}/>
        {destinations.map((dest) => {
          return <Route path={dest.url} element={<Destination dest={dest}/>}/> 
        })}
      </Route>
    </Routes>

    </>
  );
}

export default App;
