import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./components/landingpage";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import Operations from "./pages/Operations";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <Router>
      <div className="font-['Open_Sans']">
        <LandingPage />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes> */}
      </div>
    </Router>
  );
}
