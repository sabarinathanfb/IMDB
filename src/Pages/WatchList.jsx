import { useContext, useEffect,useState } from "react"
import { WatchListContext } from "../context/WatchListContext";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWatchlist } from "../store/WatchListStore";

let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
};

export const WatchList = () => {

    // const WatchListContextData = useContext(WatchListContext)
    // const {watchlist} = WatchListContextData;

    
    const watchList = useSelector((state) => state.watchList)
    const dispatch = useDispatch()
    
    const [list, setList] = useState([])



    const handleSearch = (e) => {
        const search = e.target.value.toLowerCase()
        const filteredList = Object.values(watchList).filter(movie => movie.title.toLowerCase().includes(search))
        setList(filteredList)
    }

    const handleSorting = (order) => {
        const sortedList = [...list].sort((a,b) => {
            if(order === 'ASC'){
                return a.popularity - b.popularity
            }else{
                return b.popularity - a.popularity
            }
        })
        setList(sortedList)
    }

    const selectedGenres = () => {
        let genreList = [];
        Object.values(watchList).forEach(movie => {
            genreList = genreList.concat(movie.genre_ids);
        });
        return [ ...new Set(genreList)];
    }

    const handleGenreSelection = (genreId) => {
        const newList = Object.values(watchList).filter(movie => genreId ? movie.genre_ids.includes(genreId) : true);
        setList(newList);
    }

    const handleRemoveFromWatchList = (movieId) => {
        dispatch(removeFromWatchlist(movieId))
    }


    useEffect(() => {
        setList(Object.values(watchList))

    },[watchList])

    return(
        <div>
            <h1>Watch List</h1>

            <div className="watchlist">
                <div className="left-section">
                        <div className="genre-list">
                            <div className="genre" onClick={() => handleGenreSelection('')}>All</div>
                            {selectedGenres().map(genreId => (
                                <div className="genre" onClick={() => handleGenreSelection(genreId)}>{genreids[genreId]}</div>
                            ))}
                        </div>
                    </div>
                <div className="right-section">
                    <input type="text" placeholder="Search" onChange={handleSearch}/>
                    <table border={"1px"}>
                        <tr>
                            <td>Id</td>
                            <td>Poster</td>
                            <td>Title</td>
                            <td>Genre</td>
                            <td>Popularity<span onClick={()=>handleSorting('DESC') }>^</span><span onClick={() =>handleSorting('ASC')}>V</span></td>
                        </tr>
                        {
                            list.map(movie => (
                                <tr>
                                    <td>{movie.id}</td>
                                    <td><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} height='50px' /></td>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre_ids.map(genreId => genreids[genreId]).join(', ')}</td>
                                    <td>{movie.popularity}</td>
                                    <td><button onClick={()=>handleRemoveFromWatchList(movie)}>-</button></td>
                                </tr>
                            ))
                        }

                    </table>
                </div>
            
            </div>
            
        </div>
    )
}