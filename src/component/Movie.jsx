import { useContext } from "react";
import {WatchListContext} from "../context/WatchListContext"
import { useSelector, useDispatch } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../store/WatchListStore";

export const Movie = ({movie}) => {

    const watchlist = useSelector((state) => state.watchList)
    const dispatch = useDispatch()

    const handleWatchListBtnClick = () => {

        if(!watchlist[movie.id]){
            dispatch(addToWatchlist({ ...movie}))
        }else{
            dispatch(removeFromWatchlist({ ...movie}))
        }
        

    }

    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <button onClick={handleWatchListBtnClick}> {watchlist[movie.id] ? "-" : "+"} WatchList</button>
            </div>

        </div>
    )
}
