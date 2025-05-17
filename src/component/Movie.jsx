export const Movie = ({movie ,watchlist, setWatchlist}) => {

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
