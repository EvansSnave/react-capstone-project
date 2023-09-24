import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Details from './components/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:monster" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
