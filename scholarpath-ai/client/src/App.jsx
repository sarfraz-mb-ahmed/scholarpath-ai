import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Scholarships from './pages/Scholarships';
import ScholarshipDetail from './pages/ScholarshipDetail';
import SOPGenerator from './pages/SOPGenerator';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <div className="bg-scene" />
        <Navbar />
        <Routes>
          <Route path="/"                  element={<Home />} />
          <Route path="/scholarships"      element={<Scholarships />} />
          <Route path="/scholarships/:id"  element={<ScholarshipDetail />} />
          <Route path="/sop-generator"     element={<SOPGenerator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
