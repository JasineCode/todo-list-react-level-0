import React from 'react'

const AddBlog = () => {
    return (
        <>
            <h1>Blog App</h1>
            <input className="form-control" placeholder="title" />
            <textarea  cols="30" rows="10" className="form-control" placeholder="description"></textarea>
            <button className="btn btn-success text-uppercase m-1">new Blog </button>
        </>
    )
}

export default AddBlog
