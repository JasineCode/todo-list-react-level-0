import React from 'react'
import { Link } from 'react-router-dom'
import { Anime } from '../models/anime'

const Movie = ({ anime = new Anime() }) => {
    return (
        <div className="card" style={{ width: '17rem' }}>
            <div className="card-head">
                <img src={anime.cover}
                    className="card-img-top"
                    alt={anime.title} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{anime.title}</h5>
                <p className="card-text">{anime.description}.</p>
                <Link to={`/movie-details/${anime.id}`}
                    className="btn btn-warning">Wach Now
                    <i className="fas fa-eye" />
                </Link>
            </div>
        </div>
    )
}

export default Movie
