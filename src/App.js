import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main'
import Recommendation from './pages/Recommendation';
import Information from './pages/Information';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/recommendation" element={<Recommendation/>}/>
      <Route path="/information" element={<Information/>}/>
    </Routes>

  );
}

export default App;
