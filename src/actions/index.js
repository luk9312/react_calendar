export const getMonth = () => ({
  type: 'GET_MONTH'
})

export const updateMonth = (year, month) => ({
  type: 'UPDATE_MONTH',
  year,
  month
})

export const selectedDate = date => ({
  type: 'SELECTED_DATE',
  date
})

export const unselectedDate = () => ({
  type: 'UNSELECTED_DATE'
})