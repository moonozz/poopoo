import './App.css';
import './styles/utilities.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Search from './pages/Search';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
