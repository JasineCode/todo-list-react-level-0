import React from 'react'

const BlogItem = ({ blog }) => {
    return (
        <li className="list-group-item">
            <h3>{blog.title}</h3>
            <p className="lead">
                {blog.description}
            </p>
        </li>
    )
}

export default BlogItem
