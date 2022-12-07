import './App.css';
import { LandingPage,Login } from './pages';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<LandingPage/>}/>
        <Route path='/login'element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
