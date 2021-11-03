import React from 'react'
import MovieList from './MovieList'

const MovieTable = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h2>Movie List
                    <button className="btn btn-success btn-xs " style={{ float: 'right', marginTop: 10 }} data-title="Add" data-toggle="modal" data-target="#add">
                        <span className="glyphicon glyphicon-plus" /> ADD MOVIE</button></h2>
                {/* LIST MOVIES */}
                <MovieList />
            </div>
        </div>

    )
}

export default MovieTable
