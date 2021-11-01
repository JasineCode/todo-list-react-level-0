import React from 'react'

const MovieTable = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h2>Movie List
                    <button className="btn btn-success btn-xs " style={{ float: 'right', marginTop: 10 }} data-title="Add" data-toggle="modal" data-target="#add">
                        <span className="glyphicon glyphicon-plus" /> ADD MOVIE</button></h2>
                {/* LIST MOVIES */}
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
                            <tr>
                                <td>
                                    <div>
                                        <input type="checkbox" className="checkthis" />
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <img width={60} src="https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@.jpg" alt="saimta" />
                                    </div>
                                </td>
                                <td>
                                    <div><span>One Punch Man </span></div>
                                </td>
                                <td>
                                    <div><span>
                                        On a supercontinent Earth, powerful monsters and villains have been wreaking
                                        havoc
                                        in the cities. In response, the millionaire Agoni creates the Hero
                                        Association,
                                        which employs superheroes to fight evil. Saitama, an unassociated hero,
                                        hails from
                                        City Z and performs heroic deeds as a hobby. He has trained himself to the
                                        point of
                                        being able to defeat any enemy with a single punch, but his unmatched
                                        strength has
                                        left him with an overwhelming sense of boredom. Saitama eventually becomes a
                                        reluctant mentor to Genos,
                                    </span></div>
                                </td>
                                <td>
                                    <p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-warning btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit"><span className="glyphicon glyphicon-pencil" /></button>
                                    </p>
                                </td>
                                <td>
                                    <p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete"><span className="glyphicon glyphicon-trash" /></button>
                                    </p>
                                </td>
                            </tr>
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
            </div>
        </div>

    )
}

export default MovieTable
