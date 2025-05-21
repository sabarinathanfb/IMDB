import { useSelector } from "react-redux"
import { Movie } from "./Movie"

export const MovieList = () => {

    const movies = useSelector((state) => state.movieList.movies)

    return(
        <div className="movie-list">
            {movies.map((movie) => (
                <Movie movie={movie} />
            ))}
        </div>
    )

}
