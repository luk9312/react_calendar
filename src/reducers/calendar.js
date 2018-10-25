const calendar = (state = {}, action) => {
  switch (action.type) {
    case 'SELECTED_DATE':
      return(
        {
          isSelected: true,
          selectedDate: action.date
        }
      )
    case 'UNSELECTED_DATE':
      return(
        {
          isSelected: false,
          selectedDate: ''
        }
      )
    default:
      return state
  }
}

export default calendar