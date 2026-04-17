
import { Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register'
import Header from './components/ui/header'

function App() {


  return (
  <div>
  <Header/>
  <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/home" element={<Home/>} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  </Routes>
  </div>
  )
}

export default App
