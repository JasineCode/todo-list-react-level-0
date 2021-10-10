import React from 'react'

const BlogItem = ({ title, description }) => {
    return (
        <li className="list-group-item">
            <h3>{title}</h3>
            <p className="lead">
                {description}
            </p>
        </li>
    )
}

export default BlogItem
