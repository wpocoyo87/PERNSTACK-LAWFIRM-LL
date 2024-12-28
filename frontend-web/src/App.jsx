import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import RegisterAdmin from "./component/RegisterAdmin";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Welcome to CLMS</h1>
          <p>Manage your tasks effectively with this management system</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Login />} /> {/* Show Login by default */}
            <Route path="/register-admin" element={<RegisterAdmin />} /> {/* Add a new route for admin registration */}
          </Routes>
        </main>
        <footer>
          <p>Create your account to start managing your tasks</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
