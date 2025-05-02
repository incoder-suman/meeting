import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import VideoComp from "./Components/VideoComp";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/room/:roomID' element={<VideoComp />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App