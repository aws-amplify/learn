import asCard from './asCard'
import {css} from '@emotion/core'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

const styles = css`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    flex: 2;

    &.gatsby-image-wrapper {
      flex: 1;
    }

    padding: 32px;

    h4 {
      margin-top: 16px;
    }

    h6 {
      font-weight: 300;
    }

    > .author {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;
      margin-top: 24px;

      > .text {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 10px;
        margin-bottom: 8px;

        > * {
          line-height: 20px;
        }
      }

      .gatsby-image-wrapper {
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #fff;
      }
    }
  }
`

export default asCard(
  ({
    ConditionalAnchor,
    banner,
    authors,
    title,
    description,
    containerStyles,
  }) => {
    const [firstAuthor] = authors
    const {to, name, twitter, github, avatar} = firstAuthor
    const handle = twitter || github

    return (
      <div css={[styles, containerStyles]} className='item actionable tile'>
        {banner && <Img {...banner} />}
        <div>
          <ConditionalAnchor>
            <h3>{title}</h3>
            <h4>{description}</h4>
          </ConditionalAnchor>
          <Link {...{to}} className='author'>
            <div className='text'>
              <h5>{name}</h5>
              <h6>{`@${handle}`}</h6>
            </div>
            <Img {...avatar} />
          </Link>
        </div>
      </div>
    )
  },
)
