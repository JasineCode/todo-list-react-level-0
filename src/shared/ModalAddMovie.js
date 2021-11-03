import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Anime } from "./../model/anime"
import { T_MOVIE_ADD } from "./../store/types/movie"

const ModalAddMovie = ({ addAnime }) => {
    const [anime, setAnime] = useState(new Anime())
    const modal = useRef()

    //change input
    const handleChange = (e) => {
        setAnime({ ...anime, [e.target.name]: e.target.value })
    }

    //click btn 
    const handleClick = () => {
        //validation of inputs
        if (anime.title === "" || anime.description === "" || anime.thumbnail === "") alert("InValid Anime value pls repeat again 😈")
        else {
            addAnime(anime)
            setAnime(new Anime())
            //close modal trigger click 
            modal.current.click()
        }
    }
    return (
        <div className="modal fade" id="add" tabIndex={-1} role="dialog" aria-labelledby="edit" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button ref={modal} type="button"
                            className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true" ></span></button>
                        <h4 className="modal-title custom_align" id="Heading">Add Your Detail</h4>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <input className="form-control "
                                type="text"
                                placeholder="Title"
                                onChange={handleChange}
                                name="title"
                                value={anime.title}
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control "
                                type="text"
                                placeholder="Thumbnail URL"
                                onChange={handleChange}
                                name="thumbnail"
                                value={anime.thumbnail} />
                        </div>
                        <div className="form-group">
                            <textarea rows={2} className="form-control" placeholder="Movie Description" defaultValue={""}
                                onChange={handleChange}
                                name="description"
                                value={anime.description}
                            />
                        </div>
                    </div>
                    <div className="modal-footer ">
                        <button type="button"
                            className="btn btn-success btn-lg"
                            style={{ width: '100%' }}
                            onClick={handleClick}
                        >
                            <span className="glyphicon glyphicon-ok-sign" ></span> Save Movie</button>
                    </div>
                </div>
                {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
        </div>


    )
}



const ModalAddMovieStore = connect(null,
    (dispatch) => ({
        addAnime: anime => dispatch({
            type: T_MOVIE_ADD,
            payload: anime
        })
    })
)

export default ModalAddMovieStore(ModalAddMovie)
