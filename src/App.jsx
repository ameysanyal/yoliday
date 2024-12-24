import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Inputs from './pages/Inputs';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="*" element={<Portfolio />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inputs" element={<Inputs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
