import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Nav } from "./Nav";
import { MonoFroogs } from "./pages/MonoFroogs";

function App() {
  return (
    <>
   <Nav/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="mono-froogs" element={<MonoFroogs />} />
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
