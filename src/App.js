import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <Router >
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/not-found" element={<NotFound/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
