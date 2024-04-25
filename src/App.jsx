import './Reset.css';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProduitsPage } from './pages/ProduitsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { DetailsPage } from './pages/DetailsPage';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';




function App() {
  return(
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/produits" element={<ProduitsPage/>} />
        <Route path="/categories" element={<CategoriesPage/>} />
        <Route path="/details" element={<DetailsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
