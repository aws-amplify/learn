import {Link} from 'gatsby'
import {css} from '@emotion/core'

const stylesWithoutGrid = css`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 0px auto;

  > .heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px 0px 16px;
  }

  > .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
    padding: 16px;
  }

  .view-more {
    display: flex;
    flex: 1;
    border-radius: 4px;
    overflow: hidden;
    text-align: center;

    > div {
      display: flex;
      flex: 1;
      background-size: cover;
      background-position: center;

      > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(5px);
        padding: 16px;
      }
    }

    h5 {
      margin-top: 8px;
    }
  }
`

export default ({
  heading,
  action,
  data,
  mapping = e => e,
  more,
  Template,
  columnCountByMediaQuery,
}) => {
  const entries = Object.entries(columnCountByMediaQuery)
  const mediaQueries = entries.map(
    ([mediaQuery, columnCount]) => css`
      ${mediaQuery} {
        grid-template-columns: repeat(${columnCount}, 1fr);
      }
    `,
  )

  console.log('the data', data)

  const styles = css`
    ${stylesWithoutGrid}

    .grid {
      ${mediaQueries}
    }
  `

  return (
    <div css={styles}>
      <div className='heading'>
        {more ? (
          <Link className='all' to={more.to}>
            <h2>{heading}</h2>
          </Link>
        ) : (
          <div className='all'>
            <h2>{heading}</h2>
          </div>
        )}

        {action && (
          <Link className='actionable tile button' to={action.to}>
            <span>{`${action.text} `}</span>
          </Link>
        )}
      </div>

      <div className='grid'>
        {data.map(e => (
          <Template {...mapping(e)} />
        ))}

        {more && (
          <Link to={more.to} className='actionable tile view-more'>
            <div style={{backgroundImage: `url(${more.background})`}}>
              <div>
                {more.heading && <h4>{more.heading}</h4>}
                {more.subheading && <h5>{more.subheading}</h5>}
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
