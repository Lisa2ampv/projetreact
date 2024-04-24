import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProduitsPage } from './Pages/ProduitsPage'
import { CategoriesPage } from './Pages/CategoriesPage'
import { HomePage } from './Pages/HomePage'
import { DetailsPage } from './Pages/DetailsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/produits" element={<ProduitsPage/>} />
      <Route path="/categories" element={<CategoriesPagePage/>} />
      <Route path="/details" element={<DetailsPagePage/>} />
    </Routes>
  </BrowserRouter>
}

export default App
