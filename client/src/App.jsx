
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import ShortUrlRedirect from './components/ShortUrlRedirect';



function App() {
 
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/:urlcode' element={<ShortUrlRedirect />} />
      </Routes>
    </div>
  );
}

export default App
