import React from 'react'
import { Blog } from '../models/blog'

const mapDispatchToProps = dispatch => {
    return {
        addArticle: post => dispatch(addPost(post))
    }
}

const AddBlog = ({onAddArticle}) => {
    
    const [article, setArticle] = useState(new Blog())
    const handleChangeInput = (e) => setArticle({...article,[e.target.name]:e.target.value})
    return (
        <>
            <h1>Blog App</h1>
            <input 
                className="form-control" 
                placeholder="title" 
                name="title"
                onChange={handleChangeInput}
            />
            <textarea  
                cols="30" 
                rows="10" 
                className="form-control" 
                placeholder="description"
                name="description"
                onChange={handleChangeInput}
            >
            </textarea>
            <button 
                className="btn btn-success text-uppercase m-1"
                onClick={onAddArticle}>
                new Blog 
            </button>
        </>
    )
}





export default AddBlog
