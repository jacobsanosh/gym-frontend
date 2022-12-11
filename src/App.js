import './App.css';
import { LandingPage,Login,Register,TrainerdashBoard,TrainersPage, UserdashBoard } from './pages';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ManageWorkout from './pages/ManageWorkouts/ManageWorkouts';
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
        <Route path='/trainerdash' element={<TrainerdashBoard/>}/>
        <Route path='/manageWorkout' element={<ManageWorkout/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
