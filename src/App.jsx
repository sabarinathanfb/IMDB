import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Header } from './component/Header'
import { MoviesList } from './Pages/MoviesList'
import { MovieDetails } from './Pages/MovieDetails'
import { WatchList } from './Pages/WatchList'
import { WatchListProvider } from './context/WatchListContext'

function App() {

  return (
    <BrowserRouter>
      <WatchListProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MoviesList  />} />
          <Route path="/movie" element={<MovieDetails />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>

      </WatchListProvider>
      
    </BrowserRouter>
  )
}

export default App
