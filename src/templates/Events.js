import {graphql} from 'gatsby'
import {Page, Section, Card} from '~/components'
import {mapNodeToProps} from '~/utilities'
import {mq} from '~/constants'

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: {fields: [fields___date], order: DESC}
      filter: {fields: {category: {eq: "events"}}}
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            state
            city
            location
            href
            avatar {
              childImageSharp {
                fixed(width: 40, height: 40) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            organizers {
              frontmatter {
                name
                avatar {
                  childImageSharp {
                    fixed(width: 40, height: 40) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

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

export default ({
  data: {
    allMarkdownRemark: {edges},
  },
}) => {
  const groups = Object.entries(
    Object.assign(
      {},
      ...edges.reduce((accumulator, current) => {
        const date = new Date(current.node.fields.date)
        const year = date.getFullYear()
        const month = monthNameByIndex[date.getMonth()]
        const key = `${month} ${year}`
        console.log(date)

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

  return (
    <Page>
      {groups.map(([key, value]) => (
        <Section
          heading={key}
          data={value}
          mapping={mapNodeToProps}
          Template={Card.Event}
          columnCountByMediaQuery={{
            [mq.tablet]: 2,
          }}
        />
      ))}
    </Page>
  )
}
