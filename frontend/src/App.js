
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import UserVehicles from './pages/UserVehicles';
import AddVehicle from './pages/AddVehicle';
import AddRecord from './pages/AddRecord';
import Records from './pages/Records';
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Register />} />
            <Route path='/dashboard' element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route path='/profile' element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='/vehicles' element={<PrivateRoute />}>
              <Route path='/vehicles' element={<UserVehicles />} />
            </Route>
            <Route path='/addvehicle' element={<PrivateRoute />}>
              <Route path='/addvehicle' element={<AddVehicle />} />
            </Route>
            <Route path='/addrecord' element={<PrivateRoute />}>
              <Route path='/addrecord' element={<AddRecord />} />
            </Route>
            <Route path='/records/:id' element={<PrivateRoute />}>
              <Route path='/records/:id' element={<Records />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
