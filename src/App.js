import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
