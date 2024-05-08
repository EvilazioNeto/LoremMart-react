import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/home';
import Layout from './layout/Layout';
import Account from './pages/account/account';
import PageNotFound from './pages/pagenotfound/pagenotfound';
import produtos from './data/db.json';
import Produto from './pages/produto/produto';
import { useEffect } from 'react';

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
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
