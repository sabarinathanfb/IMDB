import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import { MoviesList } from './Pages/MoviesList'
import { MovieDetails } from './Pages/MovieDetails'
import { WatchList } from './Pages/WatchList'
import { Header } from './component/Header'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MoviesList />} />
      <Route path="/movie" element={<MovieDetails />} />
      <Route path="/watchlist" element={<WatchList />} />
    </Routes>
  </BrowserRouter>
)
