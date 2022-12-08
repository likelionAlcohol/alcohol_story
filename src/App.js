import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main'
import Recommendation from './pages/Recommendation';
import Information from './pages/Information';
import Account from './pages/Account';
import Post from './pages/Post';
import WritingPost from './pages/WritePage';
import WritingPage from './component/post/PostDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/recommendation" element={<Recommendation/>}/>
      <Route path="/information" element={<Information/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/write" element={<WritingPost />} />
    </Routes>
  );
}

export default App;
