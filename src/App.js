import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Nav } from "./Nav";
import { MonoFroogs } from "./pages/MonoFroogs";
import { Creator } from "./pages/creator/Creator";

function App() {
  return (
    <>
   <Nav/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mono-froogs" element={<MonoFroogs />} />
      <Route path="/creators" element={<Creator />} />
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
