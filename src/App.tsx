import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MyEvents from "./pages/myEvents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myEvents" element={<MyEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
