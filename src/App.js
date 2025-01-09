import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';  
import FileUpload from './components/FileUpload/FileUpload';
import InputForm from './components/test/InputForm';

function App() {
  return (
    <Router>
    <div>
      <h1 className='text-center mt-3'>React Router</h1>
      <Routes>
        <Route path='/' element={<FileUpload/>} />
        <Route path='/input_field' element={<InputForm/>} />
      </Routes>

    </div>
    </Router>
  );
};

export default App;
