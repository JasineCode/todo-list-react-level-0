import React from 'react'
import Footer from '../shared/Footer'
import Header from '../shared/Header'

const MoviePage = () => {
    return (
        <>
            <Header hideFilter />
            <main className="p-3 m-3 d-flex align-items-center" style={{ height: '78vh' }}>
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img src="https://cfm.yidio.com/images/tv/67100/poster-180x270.jpg" className="img-fluid rounded-start w-100" alt="..." />
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h1 className="card-title">
                                    Tokyo Revengers<span className="text-secondary fs-5 "> ( 6.3k )</span> <i className="fas fa-star text-warning" />
                                    <span>8.5<span className="text-secondary fs-2 ">/10</span></span>
                                </h1>
                                <p className="card-text">
                                    Takemichi Hanagaki is a freelancer that's reached the absolute pits of despair in his life.
                                    He finds out that the only girlfriend he ever had, in middle school, Hinata Tachibana, had
                                    been killed by the ruthless Tokyo Manji Gang.
                                    The day after hearing about her death, he's
                                    standing on the station platform and ends up being pushed over onto the tracks by a herd of
                                    people.
                                    He closes his eyes thinking he's about to die, but when he opens his eyes back up,
                                    he somehow had gone back in time 12 years.
                                    Now that he's back living the best days of his
                                    life, Takemichi decides to get revenge on his life FF</p>
                                <p className="card-text"><small className="text-muted">PREMIERE DATE
                                    April 11, 2021</small></p>
                                <span className="badge bg-primary">Animation</span>
                                <span className="badge bg-secondary">Action</span>
                                <span className="badge bg-success">Drama</span> <br />
                                <h3 className="mt-3">Actors</h3>
                                <ul className="list-group list-group-flush w-25">
                                    <li className="list-group-item ">Griffin Puatu</li>
                                    <li className="list-group-item ">Yu Hayashi</li>
                                    <li className="list-group-item ">Yuuki Shin</li>
                                </ul>
                                <button className="btn btn-warning mt-3">Watch Now <i className="fas fa-eye" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


            <Footer />
        </>
    )
}

export default MoviePage
