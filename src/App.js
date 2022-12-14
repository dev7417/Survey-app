import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Designer from './Components/Designer';
import Preview from './Components/Preview';
import Logic from './Components/Logic';
import Jsoneditor from './Components/Jsoneditor';
import Embedsurvey from './Components/Embedsurvey';
import Translation from './Components/Translation';
import About from './Components/About';
import Modal from 'react-bootstrap/Modal';
function App() {
  return (
   
   <>
    
   <BrowserRouter>
      <Header/>
   <Routes>
    <Route path='/' element={<Designer/>}/>
    <Route path='/preview' element={<Preview/>}/>
    <Route path='/logic' element={<Logic/>}/>
    <Route path='/json' element={<Jsoneditor/>}/>
    <Route path='/embed' element={<Embedsurvey/>}/>
    <Route path='/translation' element={<Translation/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
