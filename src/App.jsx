import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutus from "./components/pages/Aboutus";
import HomePage from "./components/pages/HomePage";
import Cabinet from './components/pages/Cabinet';
import Events from './components/pages/Events';
import Contact from './components/pages/contactus';
import JoinPage from './components/pages/JoinPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/contactus" element={<Contact/>} />
        <Route path="/join" element={<JoinPage />} />

      </Routes>
    </Router>
  );
}

export default App;
