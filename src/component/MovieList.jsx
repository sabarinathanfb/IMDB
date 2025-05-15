import { Movie } from "./Movie"
export const MovieList = ({ movies }) => {

    return(
        <div className="movie-list">
            {movies.map((movie) => (
                <Movie movie={movie} />
            ))}
        </div>
    )

}
