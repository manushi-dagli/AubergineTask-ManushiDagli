import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/List';
import Profile from './components/profile';

function App() {


  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/user" element={<Profile/>} />
        </Routes>
        
      
      </BrowserRouter>
  );
}

export default App;
