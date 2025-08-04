import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MyEvents from "./pages/myEvents";
import Landing from "./pages/landing";
import Onbording from "./pages/onbording";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onbording" element={<Onbording />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myEvents" element={<MyEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
