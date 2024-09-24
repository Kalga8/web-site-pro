import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Error from "./pages/Error"

function App() {
  return (
    <div className="main-app" >
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
