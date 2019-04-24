import asCard from './asCard'
import {css} from '@emotion/core'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import Text from '../Text'
import {mq} from '~/constants'

const styles = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  ${mq.laptop} {
    flex-direction: row;
  }

  > div {
    display: flex;
    flex-direction: column;
    flex: 2;

    &.gatsby-image-wrapper {
      flex: 1;
    }

    padding: 32px;
    .post-card-description {
      margin-top: 16px;
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
      }

      .gatsby-image-wrapper {
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #fff;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
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
      <div css={[styles, containerStyles]} className='item three-dee tile'>
        {banner && <Img {...banner} />}
        <div>
          <ConditionalAnchor>
            <Text postCardTitle>{title}</Text>
            <Text postCardDescription>{description}</Text>
          </ConditionalAnchor>
          <Link {...{to}} className='author'>
            <div className='text'>
              <Text postCardName>{name}</Text>
              <Text postCardHandle>{`@${handle}`}</Text>
            </div>
            <Img {...avatar} />
          </Link>
        </div>
      </div>
    )
  },
)
