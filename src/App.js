import './App.css';
import { LandingPage,Login,Register,TrainersPage, UserdashBoard } from './pages';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<LandingPage/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/trainers' element={<TrainersPage/>}/>
        <Route path='/users' element={<UserdashBoard/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
