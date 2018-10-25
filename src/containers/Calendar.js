import { connect } from 'react-redux'
import { selectedDate, updateMonth } from '../actions'
import Calendar from '../components/Calendar/Calendar'

const mapStateToProps = (state, ownProps) => ({
  isSelected: state.calendar.isSelected,
  selectedDate: state.calendar.selectedDate,
  property: state.property
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (date) => dispatch(selectedDate(date)),
  monthPrevious: (year, month) => {
    month --;
    if (month === 0) {
      month = 12;
      year --;
    }
    return dispatch(updateMonth(year, month))
  },
  monthForward: (year, month) => {
    month ++;
    if (month === 13) {
      month = 1;
      year ++;
    }
    return dispatch(updateMonth(year, month))
  }
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Calendar);