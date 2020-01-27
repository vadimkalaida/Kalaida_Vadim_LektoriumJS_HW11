const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state,
        {
          id : action.id,
          name : action.name,
          age : action.age,
          occupation: action.occupation,
          deleted : false
        }
      ]
    case 'DELETE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
        ? {...todo, deleted : !todo.deleted}
        : todo
      )
    default:
      return state
  }

}

export default todos