import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Layout from './layout/Layout';
import Account from './pages/account/account';


function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Layout><Home /></Layout>}/>
        <Route  path="/account" element={<Layout> <Account /> </Layout>}/>
      </Routes>
    </Router>
  )
}

export default App
