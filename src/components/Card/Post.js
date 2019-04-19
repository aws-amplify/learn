import asCard from './asCard'
import {css} from '@emotion/core'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import {LIGHTER_BLUE} from '~/constants'

const styles = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 32px;

    h5 {
      margin-top: 24px;
      font-weight: 300;
    }

    h6 {
      font-weight: 200;
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
        width: 60px !important;
        height: 60px !important;
      }
    }
  }
`

export default asCard(
  ({Container, authors, title, description, containerStyles}) => {
    const [firstAuthor] = authors
    const {to, name, twitter, github, avatar} = firstAuthor
    const handle = twitter || github

    return (
      <div css={[styles, containerStyles]} className='actionable tile'>
        <div>
          <Container>
            <h3>{title}</h3>
            <h5>{description}</h5>
          </Container>
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
