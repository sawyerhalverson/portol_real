import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Tag from './Tag';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tag />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
