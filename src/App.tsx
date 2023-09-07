import React from "react"
import './App.css'
import SideNav from './components/SideNav/SideNav'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Board from "./pages/Board"

function App() {


  return (
    <div>
      <SideNav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<Board />}></Route>
      </Routes>
    </div>
  )
}

export default App
