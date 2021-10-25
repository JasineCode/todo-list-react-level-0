import { connect } from 'react-redux'
import React from 'react'
import { filterTaskByTitleAction } from '../store/actions/todo'

const TodoFilter = ({ filterTaskByTitle }) => {
    const handleChange = (e) => {
        filterTaskByTitle(e.target.value)
    }
    return (
        <div className=" text-center">
            <input
                type="search"
                className="form-control"
                placeholder="filter task by title"
                onChange={handleChange}
            />
        </div>
    )
}


const TodoFilterStore = connect(null,
    (dispatch) => ({
        filterTaskByTitle: query =>
            dispatch(filterTaskByTitleAction(query))
    })
)

export default TodoFilterStore(TodoFilter)
