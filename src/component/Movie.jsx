export const Movie = ({movie}) => {

    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <button>+WatchList</button>
            </div>

        </div>
    )
}
