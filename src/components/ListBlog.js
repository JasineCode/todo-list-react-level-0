import React from 'react'
import BlogItem from './BlogItem'

const ListBlog = ({ list = [] }) => {
    return (
        <ul className="list-group list-group-flush">
            {list.map(b => <BlogItem blog={b} key={b.id} />)}
        </ul>
    )
}

export default ListBlog
