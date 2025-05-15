import { Link } from "react-router"

export const Header = () => {
    return(
        <div className="header">
            <h1> Imdb App</h1>
            <ul>
                <li><Link to="/">MovieList</Link></li>
                <li><Link to="/movie">MovieDetails</Link></li>
                <li><Link to="/watchlist">WatchList</Link></li>
            </ul>
        </div>
    )
}