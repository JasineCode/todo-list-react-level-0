import { connect } from 'react-redux'
import React from 'react'
import { updateFilterAction } from '../store/actions/todo'

const TodoFilter = ({ updateFilter }) => {
    const handleChange = (e) => {
        updateFilter(e.target.value)
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
        updateFilter : value => dispatch(updateFilterAction(value))
    })
)

export default TodoFilterStore(TodoFilter)
