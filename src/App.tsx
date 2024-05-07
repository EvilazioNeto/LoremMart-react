import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Layout from './layout/Layout';
import Account from './pages/account/account';
import PageNotFound from './pages/pagenotfound/pagenotfound';


function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Layout><Home /></Layout>}/>
        <Route  path="/account" element={<Layout> <Account /> </Layout>}/>
        <Route  path="*" element={<Layout> <PageNotFound /> </Layout>}/>
      </Routes>
    </Router>
  )
}

export default App
