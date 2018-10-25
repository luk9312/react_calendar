import moment from 'moment';

const property = (state = {}, action) => {
  switch (action.type) {
    case 'GET_MONTH':
      return(
        {
          year: moment().year(),
          month: moment().month()+1
        }
      )
    case 'UPDATE_MONTH':
        console.log(action)
        return(
          {
            year: action.year,
            month: action.month
          }
        )
    default:
      return state
  }
}

export default property