import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import Signup from './signup/signup';
import {BrowserRouter , Routes ,Route} from  'react-router-dom';
import Book from './Book/Book';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path='/book' element={<Book/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
