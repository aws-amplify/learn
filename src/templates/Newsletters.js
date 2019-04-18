import {graphql} from 'gatsby'

export const pageQuery = graphql`
  {
    allSitePage(filter: {path: {glob: "/newsletters/**/*"}}) {
      edges {
        node {
          path
        }
      }
    }
  }
`

export default ({data}) => {
  console.log(data)
  return <div>{JSON.stringify(data)}</div>
}
