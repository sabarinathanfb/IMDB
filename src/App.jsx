import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Header } from './component/Header'
import { MoviesList } from './Pages/MoviesList'
import { MovieDetails } from './Pages/MovieDetails'
import { WatchList } from './Pages/WatchList'

function App() {
  const [watchlist, setWatchlist] = useState({})

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MoviesList watchlist={watchlist} setWatchlist={setWatchlist} />} />
        <Route path="/movie" element={<MovieDetails />} />
        <Route path="/watchlist" element={<WatchList watchlist={watchlist} setWatchlist={setWatchlist}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
