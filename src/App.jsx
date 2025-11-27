import Navbar from "./comps/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
