import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        
        
      </Routes>
    </div>
  );
}

export default App;
