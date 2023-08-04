import { useState } from "react";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
