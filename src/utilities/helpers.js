export const mapObject = (fn, o) =>
  Object.assign(
    {},
    ...Object.entries(o).map(([key, value]) => ({[key]: fn(value)})),
  )
