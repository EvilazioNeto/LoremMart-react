import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Layout from './layout/Layout';
import Account from './pages/account/account';
import PageNotFound from './pages/pagenotfound/pagenotfound';
import produtos from './data/db.json';
import Produto from './pages/produto/produto';


function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Layout><Home /></Layout>}/>
        <Route  path="/account" element={<Layout> <Account /> </Layout>}/>
        {produtos.produtos.map((produto) => (
          <Route key={produto.nome} path={`/${produto.nome}`} element={<Layout><Produto produto={produto}/></Layout>}/>
        ))}
        <Route  path="*" element={<Layout> <PageNotFound /> </Layout>}/>
      </Routes>
    </Router>
  )
}

export default App
