// OPTIMIZE!

export default filters => ({frontmatter}) =>
  Object.entries(filters).every(([filterName, selectedKeys]) =>
    selectedKeys.every(selectedKey =>
      frontmatter[filterName].includes(selectedKey),
    ),
  )
