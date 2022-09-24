import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Student from "./pages/student/Student-dashboard";
import Teacher from "./pages/teacher/Teacher";
import SoloDance from "./pages/student/soloDance/SoloDance";
import GroupDance from "./pages/student/groupDance/GroupDance";
import Classical from "./pages/student/classical/Classical";
import Concert from "./pages/student/concert/Concert";
import Drama from "./pages/student/drama/Drama";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-dashboard" element={<Student />} />
          <Route path="/student-dashboard/solo-dance" element={<SoloDance />} />
          <Route
            path="/student-dashboard/group-dance"
            element={<GroupDance />}
          />
          <Route path="/student-dashboard/classical" element={<Classical />} />
          <Route path="/student-dashboard/concert" element={<Concert />} />
          <Route path="/student-dashboard/drama" element={<Drama />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
