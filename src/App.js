import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main'
import Recommendation from './pages/Recommendation';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/recommendation" element={<Recommendation/>}/>
    </Routes>
  );
}

export default App;
