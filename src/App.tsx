import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";

import links from "./links";

const Home = React.lazy(() =>  import("./pages/Home/Home"));
const Destination = React.lazy(() =>  import("./pages/Destination/Destination"));
const Crew = React.lazy(() =>  import("./pages/Crew/Crew"));
const Technology = React.lazy(() =>  import("./pages/Technology/Technology"));


function App() {
  const path = useLocation();
  const [bgClass, setBgClass] = useState("");

  /* Set bg image from links object based on current page */
  useEffect(() => {
    for (let link of links) {
      if (path.pathname.includes(link.to)) {
        setBgClass(link.imageClasses);
      }
    }
  }, [path]);

  return (
    <>
      <div
        className={
          "fixed top-0 left-0 -z-50 h-screen w-screen bg-neutral bg-cover bg-fixed bg-no-repeat " +
          bgClass
        }
      />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/destination/"
        >
          <Route path=":id" element={<Destination/>} />
          <Route index element={<Navigate to="moon"/>} />
        </Route>

        <Route path={"/crew/"} >
          <Route path=":id" element={<Crew/>}/>
          <Route index element={<Navigate to="douglas"/>}/>
        </Route>

        <Route path={"/technology/"}>
          <Route path={"/technology/:id"} element={<Technology/>} />
          <Route index element={<Navigate to="launch"/>} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </>
  );
}

export default App;
