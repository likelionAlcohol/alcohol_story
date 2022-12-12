import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main'
import Recommendation from './pages/Recommendation';
import Information from './pages/Information';
import Account from './pages/Account';
import Post from './pages/Post';
import WritingPost from './pages/WritePage';
import Category from './pages/Category';

import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Signup from './pages/Signup';
import Search from './pages/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/recommendation" element={<Recommendation/>}/>
      <Route path="/information" element={<Information/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/write" element={<WritingPost />} />
      <Route path="/category" element={<Category />} />
      <Route path="/login" element={<Login />} />
      <Route path="/myprofile" element={<MyProfile />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
