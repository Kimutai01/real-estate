import { useState } from "react";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
