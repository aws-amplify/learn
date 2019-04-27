import asCard from './asCard';
import {css} from '@emotion/core';
import Img from 'gatsby-image';
import {Link} from 'gatsby';
import Text from '../Text';
import {mq, KASHMIR_BLUE_COLOR} from '~/constants';
import {classNames} from '~/utilities';

const styles = css`
  flex-direction: column;
  justify-content: space-between;

  &.on-landing-page {
    background-color: ${KASHMIR_BLUE_COLOR};
    * {
      color: #fff;
    }
  }

  &:hover {
    .body .favicon {
      opacity: 1;
    }
  }

  ${mq.laptop} {
    flex-direction: row;

    &.on-posts-page {
      .post-card-title {
        font-size: 30px;
        line-height: 45px;
      }

      .post-card-description {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  .banner {
    &,
    & > * {
      display: flex;
      flex: 1;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${mq.tablet} {
      flex: 1;
    }

    ${mq.desktop} {
      flex: 2;
    }

    ${mq.monitor} {
      flex: 3;
    }

    .favicon {
      position: relative;
      top: -16px;
      left: -16px;
      opacity: 0.5;
      transition: 0.275s ease all;
    }

    > div {
      position: relative;
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 32px;
    }

    .author {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 0px 32px 32px 0px;

      > .avatar > * {
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #fff;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
      }

      > .text {
        display: flex;
        flex-direction: column;
        text-align: right;
        padding-right: 8px;
      }
    }
  }
`;

export default asCard(
  ({
    className,
    ConditionalAnchor,
    banner,
    authors,
    title,
    description,
    href,
  }) => {
    const [firstAuthor] = authors;
    const {to, name, twitter, github, avatar} = firstAuthor;
    const handle = twitter || github;
    const encodedHref = encodeURI(href);
    const faviconSrc = `http://www.google.com/s2/favicons?domain=${encodedHref}`;

    return (
      <ConditionalAnchor
        css={styles}
        className={classNames(className, 'post actionable three-dee')}
      >
        {banner && (
          <div className='banner'>
            <Img {...banner} />
          </div>
        )}

        <div className='body'>
          <div>
            {href && (
              <div className='favicon'>
                <img src={faviconSrc} alt='content platform' />
              </div>
            )}

            <Text h3 className='post-card-title' children={title} />

            <Text p className='post-card-description' children={description} />
          </div>

          <Link {...{to}} className='author'>
            <div className='text'>
              <Text h5 className='post-card-name' children={name} />
              <Text h6 className='post-card-handle'>{`@${handle}`}</Text>
            </div>

            {avatar && (
              <div className='avatar'>
                <Img {...avatar} />
              </div>
            )}
          </Link>
        </div>
      </ConditionalAnchor>
    );
  },
);
