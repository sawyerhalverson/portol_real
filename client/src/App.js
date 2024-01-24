import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Tag from './Tag';
import CreateTag from './CreateTag';
import UpdateTag from './UpdateTag';
import Insights from './Insights';
import Map from './Map';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tag />}></Route>
          <Route path='/create' element={<CreateTag />}></Route>
          <Route path='/update/:id' element={<UpdateTag />} />
          <Route path='/insights' element={<Insights />}></Route>
          <Route path='/map' element={<Map />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
