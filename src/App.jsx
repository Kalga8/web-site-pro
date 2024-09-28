import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Error from "./pages/Error"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="main-app" >
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project/:id" Component={Project} element={<Project />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
