import React from 'react'
import { Anime } from '../model/anime'

const MovieRow = ({ anime = new Anime() }) => {
    return (
        <tr>
            <td>
                <div>
                    <input type="checkbox" className="checkthis" />
                </div>
            </td>
            <td>
                <div>
                    <img width={60}
                        src={anime.thumbnail} alt={anime.title} />
                </div>
            </td>
            <td>
                <div><span className="text-capitalize">{anime.title} </span></div>
            </td>
            <td>
                <div>
                    <span>
                        {anime.description}
                    </span>
                </div>
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
    )
}

export default MovieRow
