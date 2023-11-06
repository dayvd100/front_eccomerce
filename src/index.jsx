import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Carrinho from './pages/carrinho';
import App from './App';
import Sneakers from './pages/sneakers';
import Conversor from './pages/conversor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PesquisarProdutos from './pages/pesquisarProduto';
import Contato from './pages/contato';
import DetalhesTenis from './pages/detalhesTenis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
       <Routes>
          <Route path='/' element={<App/>}>
              <Route index element={<Sneakers/>}/>
              <Route path="/detalhes/:id" element={<DetalhesTenis />} />
              <Route path='/carrinho' element={<Carrinho/>}></Route>
              <Route path='/conversor' element={<Conversor/>}></Route>
              <Route path='/pesquisarprodutos' element={<PesquisarProdutos/>}></Route>
              <Route path='/contato' element={<Contato/>}></Route>
          </Route>
       </Routes>
    </Router>
  </React.StrictMode>
);