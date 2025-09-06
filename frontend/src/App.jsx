import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ProblemSolving from './pages/ProblemSolving';
import Development from './pages/Development';
import MachineLearning from './pages/MachineLearning';
import Travelling from './pages/Travelling';
import Achievements from './pages/Achievements';
import Hackathons from './pages/Hackathons';
import DataEngineering from './pages/DataEngineering';
import ComputerScience from './pages/ComputerScience';
import { fetchUserData } from './utils/api';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load data from MongoDB. Check connection settings.');
        setLoading(false);
        console.error('Error loading data:', err);
      }
    };

    loadUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-6 bg-red-100 rounded-lg">
          <h2 className="text-xl font-bold text-red-700 mb-2">Error</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home userData={userData} />} />
            <Route path="/about" element={<AboutMe userData={userData} />} />
            <Route path="/problem-solving" element={<ProblemSolving userData={userData} />} />
            <Route path="/development" element={<Development userData={userData} />} />
            <Route path="/machine-learning" element={<MachineLearning userData={userData} />} />
            <Route path="/travelling" element={<Travelling userData={userData} />} />
            <Route path="/achievements" element={<Achievements userData={userData} />} />
            <Route path="/hackathons" element={<Hackathons userData={userData} />} />
            <Route path="/data-engineering" element={<DataEngineering userData={userData} />} />
            <Route path="/computer-science" element={<ComputerScience userData={userData} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;