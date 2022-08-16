import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Posting from './components/Post';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/development-studying-ts' element={<Posting />} />
      </Routes>
    </>
  );
}

export default App;
