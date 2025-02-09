import Home from "./Home/home.jsx"
import { Route, Routes } from "react-router-dom"
import Courses from "./courses/courses.jsx"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
    </Routes>
     
    </>
  )
}

export default App
