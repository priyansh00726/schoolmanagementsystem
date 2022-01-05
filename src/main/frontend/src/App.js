import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/api/v1">
            <Route path="students/*" element={<Student />} />
            <Route path="teachers/*" element={<Teacher />} />
            <Route
              path="about"
              element={
                <div>
                  <Header title="About" />
                  <About />
                </div>
              }
            />
          </Route>
          <Route path="*" element={<Header title="Missing" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
