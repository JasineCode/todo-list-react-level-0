export const todosSelector = (state) => {
    if(state.filter===null) return state.todos
    else return state.todos
        .filter(t=>
            t.title
            .toUpperCase()
            .includes(state.filter.toUpperCase())
        )
} 
