import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter,Route, Routes} from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      
      {/* <Work />
      <Testimonial />
      <Contact /> */}
      {/*Footer */}
    
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />


      
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
