import './App.css';
import Footer from './components/footer';
import Home from './components/home';
import '@fontsource/roboto';
import '@fontsource/orbitron';
import Mid from './components/Mid';
import Font from './components/Fonts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import StateDemo from './components/StateDemo';
import EligibilityChecker from './components/EligibilityChecker';
import GenerationSelector from './components/GenerationSelector';
import ChakraExplorer from './components/ChakraExplorer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mid" element={<Mid />} />
            <Route path="/font" element={<Font />} />
            <Route path="/StateDemo" element={<StateDemo />} />
            <Route path='/EligibilityChecker' element={<EligibilityChecker />} />
            <Route path='/GenerationSelector' element={<GenerationSelector />} />
            <Route path='/ChakraExplorer' element={<ChakraExplorer />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
