import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.ALL_EXCEPT_DELETED, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
