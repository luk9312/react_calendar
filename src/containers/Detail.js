import { connect } from 'react-redux'
import { unselectedDate } from '../actions'
import DateDetail from '../components/DateDetail/DateDetail'

const mapStateToProps = (state, ownProps) => ({
  isSelected: state.calendar.isSelected,
  selectedDate: state.calendar.selectedDate
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(unselectedDate())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateDetail)