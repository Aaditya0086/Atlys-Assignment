import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";

function App() {
  return (
    <div className="App">
      <p>xyz</p>
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />} />

            <Route exact path="/home" element={<Home />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
