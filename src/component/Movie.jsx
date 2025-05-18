import { useContext } from "react";
import {WatchListContext} from "../context/WatchListContext"

export const Movie = ({movie}) => {

    const WatchListContextData = useContext(WatchListContext)
    const {watchlist, setWatchlist} = WatchListContextData;

    const addToWatchlist = () => {

        setWatchlist({...watchlist, [movie.id]: movie })

    }

    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <button onClick={addToWatchlist}> {watchlist[movie.id] ? "-" : "+"} WatchList</button>
            </div>

        </div>
    )
}
