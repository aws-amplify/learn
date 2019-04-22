// clean up

const monthNameByIndex = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
}

export default edges =>
  Object.entries(
    Object.assign(
      {},
      ...edges.reduce((accumulator, current) => {
        const date = new Date(current.node.fields.date)
        const year = date.getFullYear()
        const month = monthNameByIndex[date.getMonth()]
        const key = `${month} ${year}`

        const next = {...accumulator}
        if (next[key]) {
          next[key].push(current)
        } else {
          next[key] = [current]
        }

        return next
      }, {}),
    ),
  )
