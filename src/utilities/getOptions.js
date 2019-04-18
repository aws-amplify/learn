// OPTIMIZE!

export default (filterNames, data) =>
  Object.assign(
    {},
    ...data
      .reduce((outerAccumulator, {node: {frontmatter}}) => {
        const extracted = filterNames.map(
          filterName => frontmatter[filterName] || [],
        )

        return extracted.map((options, i) => ({
          ...options.reduce(
            (innerAccumulator, key) => ({
              ...innerAccumulator,
              [key]: true,
            }),
            {},
          ),
          ...outerAccumulator[i],
        }))
      }, filterNames.map(() => ({})))
      .map(Object.keys)
      .map((keys, i) => ({[filterNames[i]]: keys})),
  )
