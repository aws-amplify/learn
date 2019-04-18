import {Link} from 'gatsby'
import {css} from '@emotion/core'
import {SECTION_MAX_WIDTH, ORANGE, MEDIUM_GRAY} from '~/constants'

const stylesWithoutGrid = css`
  display: flex;
  flex-direction: column;
  max-width: ${SECTION_MAX_WIDTH};
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
        flex-direction: row;
        flex: 1;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.875);
        backdrop-filter: blur(5px);
        padding: 16px;
      }
    }

    h4 {
      font-weight: 400;
      font-size: 18px;
      color: ${ORANGE};
    }

    h5 {
      margin-top: 8px;
      color: ${MEDIUM_GRAY};
    }

    svg {
      color: ${ORANGE};
    }

    .top {
      margin-top: 16px;
      margin-bottom: 8px;
    }

    .bottom {
      margin-top: 32px;
      margin-bottom: 8px;
    }

    .right {
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
            <h4>{`${action.text} `}</h4>
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
                <div className='left' />
                <div>
                  {more.top && <div className='top'>{more.top}</div>}
                  {more.heading && <h4>{more.heading}</h4>}
                  {more.subheading && <h5>{more.subheading}</h5>}
                  {more.bottom && <div className='bottom'>{more.bottom}</div>}
                </div>
                <div className='right'>{more.right}</div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
