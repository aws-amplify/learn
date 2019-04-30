import {css} from '@emotion/core';
import Img from 'gatsby-image';
import {Link} from 'gatsby';
import {useMemo} from 'react';
import {slice, length} from 'ramda';
import Text from '../Text';
import {mq, KASHMIR_BLUE_COLOR, SAN_JUAN_COLOR, GRAY_COLOR} from '~/constants';
import {classNames} from '~/utilities';
import asCard from './asCard';

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

    &.on-posts-page,
    &.on-contributor-page {
      .post-card-title {
        font-size: 20px;
        line-height: 30px;
      }

      .post-card-description {
        margin-top: 10px;
        font-size: 14px;
        line-height: 21px;
      }
    }
  }

  &.on-posts-page,
  &.on-contributor-page {
    .post-card-title {
      color: ${SAN_JUAN_COLOR};
    }

    .post-card-description {
      color: ${GRAY_COLOR};
      font-weight: 300;
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
      position: absolute;
      top: 8px;
      left: 8px;
      opacity: 0.5;
      transition: 0.275s ease all;
    }

    > div {
      position: relative;
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 32px 27px 16px;
    }

    .post-card-description {
      margin-top: 20px;
    }

    .author {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 0px 27px 24px;

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
    limitDescriptionLength,
    href,
  }) => {
    const [firstAuthor] = authors;
    const {to, name, twitter, github, avatar} = firstAuthor;
    const handle = twitter || github;
    const encodedHref = encodeURI(href);
    const faviconSrc = `http://www.google.com/s2/favicons?domain=${encodedHref}`;
    const clippedBio = useMemo(
      () =>
        limitDescriptionLength && length(description) > 250
          ? `${slice(0, 250, description)}...`
          : description,
      [description],
    );

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

            <Text p className='post-card-description' children={clippedBio} />
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
