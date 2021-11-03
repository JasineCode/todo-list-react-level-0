import React from 'react'
import { connect } from 'react-redux'
import MovieRow from './MovieRow'

const MovieList = ({ movies = [] }) => {
    return (
        <div className="table-responsive">
            <table id="mytable" className="table table-bordred table-striped">
                <thead>
                    <tr><th><input type="checkbox" id="checkall" /></th>
                        <th>Thumbnail</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr></thead>
                <tbody>
                    {/* MOVIE ROW  */}
                    {movies.map(m =>
                        <MovieRow
                            key={m.id}
                            anime={m}
                        />)}
                    {/* END MOVIE ROW  */}
                </tbody>
            </table>
            {/* PAGINNATION */}
            <div className="clearfix" />
            <ul className="pagination pull-right">
                <li className="disabled"><a href="#"><span className="glyphicon glyphicon-chevron-left" /></a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-chevron-right" /></a></li>
            </ul>
        </div>
    )
}


// const MovieListStore = connect(
//     (state)=>({
//         movies:state.movies
//     })
// )

const MovieListStore = ()=>{
    const movies = useSelector(state => state.movies)
    return <MovieList movies={movies} />
}

export default MovieListStore
