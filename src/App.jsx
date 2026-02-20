import Footer from "./components/Footer.jsx"
import Menubar from "./components/Menubar.jsx";
import Home from "./pages/Home.jsx"
import {Route, Routes } from "react-router-dom";

const App = () =>  { 
  return ( 
     <div>
      <Menubar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer />
     </div>
  )
}

export default App;