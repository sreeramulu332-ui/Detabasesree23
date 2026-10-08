import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, posterPath, title, voteAverage} = movieDetails

  return (
    <li className="movie-item">
      <img src={posterPath} alt={title} className="movie-poster" />

      <h1 className="movie-title">{title}</h1>
      <p className="movie-rating">{voteAverage}</p>

      <Link to={`/movie/${id}`}>
        <button type="button" className="view-btn">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieCard
