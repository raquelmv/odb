import './App.css';
import Dashboard from './pages/dashboard';
import Data01 from './pages/data01';
import Inmature from './pages/immaturespecies';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path='/' exact element={<Dashboard />} />
              <Route path='/data01' element={<Data01/>} />/>
              <Route path='/immaturespecies' element={<Inmature/>} />/>
          </Routes>
      </Router>


  );
}

export default App;
