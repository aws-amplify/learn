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
  background-color: ${LIGHTER_BLUE};

  * {
    color: #fff;
  }

  > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 16px;

    > .author {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      margin-top: 16px;

      > .text {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 8px;
      }

      img {
        border-radius: 50%;
      }
    }
  }
`

export default asCard(({Container, authors, title, description}) => {
  const [firstAuthor] = authors
  const {to, name, twitter, github, avatar} = firstAuthor
  const handle = twitter || github

  return (
    <div css={styles} className='actionable tile'>
      <div>
        <Container>
          <h3>{title}</h3>
          <p>{description}</p>
        </Container>
        <Link {...{to}} className='author'>
          <div className='text'>
            <h6>{name}</h6>
            <h6>{`@${handle}`}</h6>
          </div>
          <Img {...avatar} />
        </Link>
      </div>
    </div>
  )
})
