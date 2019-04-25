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
  overflow: hidden;

  &:hover {
    .favicon {
      opacity: 1;
    }
  }

  ${mq.laptop} {
    flex-direction: row;
  }

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 32px;

    ${mq.desktop} {
      flex: 2;
    }

    &.gatsby-image-wrapper {
      flex: 1;
    }

    .favicon {
      position: absolute;
      top: 8px;
      left: 8px;
      width: 16px;
      height: 16px;
      opacity: 0.5;
      transition: 0.275s ease all;
    }

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
    href,
  }) => {
    const [firstAuthor] = authors
    const {to, name, twitter, github, avatar} = firstAuthor
    const handle = twitter || github

    return (
      <ConditionalAnchor>
        <div css={[styles, containerStyles]} className='item three-dee tile'>
          {banner && <Img {...banner} />}
          <div>
            {href && (
              <img
                className='favicon'
                src={`http://www.google.com/s2/favicons?domain=${encodeURI(
                  href,
                )}`}
                alt='content platform'
              />
            )}
            <Text h3 className='post-card-title'>
              {title}
            </Text>
            <Text p className='post-card-description'>
              {description}
            </Text>
            <Link {...{to}} className='author'>
              <div className='text'>
                <Text h5 className='post-card-name'>
                  {name}
                </Text>
                <Text h6 className='post-card-handle'>{`@${handle}`}</Text>
              </div>
              <Img {...avatar} />
            </Link>
          </div>
        </div>
      </ConditionalAnchor>
    )
  },
)
