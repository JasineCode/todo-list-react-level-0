import React from 'react'
import { connect } from 'react-redux'
import { filterAction } from '../store/actions/todo'

const TodoFilter = ({filterTaskByQuery }) => {

    const handleChange = (e) => {
        filterTaskByQuery(e.target.value)
    }
    return (
        <div className="input-group mb-3  w-50 mx-auto mt-3">
            <input type="text"
                className="form-control"
                placeholder="Filter Tasks by title"
                onChange={handleChange} />

            <span className="input-group-text " >
                <i className="fa fa-search" aria-hidden="true"></i>
            </span>
        </div>

    )
}
const TodoFilterStore = connect(
    null,
    dispatch => ({
        filterTaskByQuery: query => dispatch(filterAction(query))
    }))
export default TodoFilterStore(TodoFilter)
