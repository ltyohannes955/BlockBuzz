import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { App as CapApp } from "@capacitor/app";
import Home from "./pages/home";
import MyEvents from "./pages/myEvents";
import Landing from "./pages/landing";
import Onbording from "./pages/onbording";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = CapApp.addListener("backButton", () => {
      // Prevent app exit on root, otherwise go back
      if (location.pathname === "/" || location.pathname === "/home") {
        CapApp.exitApp();
      } else {
        navigate(-1); // Go back one page
      }
    });

    return () => {
      handler.then((h) => h.remove());
    };
  }, [location, navigate]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onbording" element={<Onbording />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myEvents" element={<MyEvents />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
