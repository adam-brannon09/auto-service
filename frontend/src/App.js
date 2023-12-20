
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';
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
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
