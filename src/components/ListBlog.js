import React from 'react'
import { connect } from 'react-redux'
import BlogItem from './BlogItem'

const ListBlog = ({blogs = [] }) => {
    return (
        <ul className="list-group list-group-flush">
            {blogs.map(b => <BlogItem blog={b} key={b.id} />)}
        </ul>
    )
}
const ListBlogStore = connect((state)=>({blogs:state.articles}))(ListBlog)
export default ListBlogStore