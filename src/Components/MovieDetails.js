import React from 'react'
import { Anime } from '../models/anime'

const MovieDetails = ({ details = new Anime() }) => {
    // console.log(match )
    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={details.cover} className="img-fluid rounded-start w-100" alt={details.title} />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h1 className="card-title">
                            {details.title}<span className="text-secondary fs-5 "> ( {details.nbViews} )</span> <i className="fas fa-star text-warning" />
                            <span>{details.rating}<span className="text-secondary fs-2 ">/10</span></span>
                        </h1>
                        <p className="card-text">
                            {details.description}
                        </p>

                        <p className="card-text"><small className="text-muted">PREMIERE DATE
                            {details.startingDate}</small></p>
                        {/* list of type animes  */}
                        {
                            details.animeTypes.map(at =>
                                <span
                                    className={`badge bg-${at.split("/")[1]}`}>
                                    {at.split("/")[0]}
                                </span>
                            )
                        }

                        <br />
                        <h3 className="mt-3">Actors</h3>

                        {/* list of actors */}
                        <ul className="list-group list-group-flush w-25">
                            {
                                details.actors.map(actor => <li className="list-group-item ">{actor}</li>)
                            }
                        </ul>
                        <a className="btn btn-warning mt-3"
                        href={details.link}>Watch Now <i className="fas fa-eye" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
