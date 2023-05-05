import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css"; 
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Footer from "./Components/Footer";
import MovieRecc from "./Components/movierecc";

function App() {
 
  return (
    <div className="App">

          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/Home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/MovieRecc" element={<MovieRecc />} />


            </Routes>
          </UserAuthContextProvider>
     </div>
      
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
        <Route path="/MovieRecc" element={<MovieRecc />} />
       
      
    </Routes>
  </BrowserRouter>
  </div>
>>>>>>> 24373364d7b019df85e64b73e739c342b37e14d2
  );
}

export default App;
