let nextTodoId = 0

export const addTodo = (name, age, occupation) => ({
  type : 'ADD_TODO',
  id : nextTodoId++,
  name,
  age,
  occupation
})

export const deleteTodo = id => ({
  type : 'DELETE_TODO',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  ALL_EXCEPT_DELETED: 'ALL_EXCEPT_DELETED',
}