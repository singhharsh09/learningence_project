
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Notification from './components/Notification';
import Clock from './components/Navbar/clock';
import Calender from './components/Navbar/Calender';
import PeopleOnline from './components/Navbar/PeopleOnline';
import People from './components/Navbar/People';
import Network from './components/Navbar/Network';
import You from './components/Navbar/You';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='app-navbar'><Navbar/></div>
      <div className='app-nav-content'> 
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/notification' element={<Notification/>}/>
          <Route path= '*' element={<NotFound/>}/>
          <Route exact path='/clock' element={<Clock/>}/>
          <Route exact path='/calender' element={<Calender/>}/>
          <Route exact path='/peopleOnline' element={<PeopleOnline/>}/>
          <Route exact path='/people' element={<People/>}/>
          <Route exact path='/network' element={<Network/>}/>
          <Route exact path='/you' element={<You/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
