import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import CheckOut from './components/CheckOut/CheckOut';
import Content from './components/Contents/Content';
import Footer from './components/Footer/Footer';


import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/Login/LogIn';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/'element={<Home></Home>}></Route>
       <Route path='/home'element={<Home></Home>}></Route>
       <Route path='/blog'element={<Blog></Blog>}></Route>
       <Route path='/about'element={<About></About>}></Route>
       <Route path='/signup'element={<Signup></Signup>}></Route>
       <Route path='/login'element={<LogIn></LogIn>}></Route>
       <Route path='/content' element={
        <RequireAuth> <Content></Content></RequireAuth>    
       }></Route>

       <Route path='/checkout' element={
         <RequireAuth><CheckOut></CheckOut></RequireAuth>
       }> </Route>
        
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
