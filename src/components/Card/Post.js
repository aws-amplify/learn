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

  &.on-landing-page,
  &.on-newsletter-page {
    background-color: ${KASHMIR_BLUE_COLOR};
    * {
      color: #fff;
    }
  }

  &.on-posts-page,
  &.on-contributor-page {
    h3 {
      color: ${SAN_JUAN_COLOR};
    }

    p {
      color: ${GRAY_COLOR};
      font-weight: 300;
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
      > .body {
        h3 {
          font-size: 1.25rem;
          line-height: 1.875rem;
        }

        p {
          margin-top: 0.625rem;
          font-size: 0.875rem;
          line-height: 1.3125rem;
          font-weight: 300;
        }
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

    ${mq.desktop} {
      flex: 2;
    }

    ${mq.monitor} {
      flex: 3;
    }

    .favicon {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      opacity: 0.5;
      transition: 0.275s ease all;
    }

    > div {
      position: relative;
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 2rem 1.6875rem 1rem;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.875rem;
    }

    p {
      margin-top: 1.25rem;
      font-size: 0.8125rem;
      font-weight: 200;
      line-height: 1.21875rem;
    }

    h5 {
      font-size: 0.8125rem;
      line-height: 1.21875rem;
      font-weight: 300;
    }

    h6 {
      font-size: 0.8125rem;
      line-height: 1.21875rem;
      font-weight: 200;
    }

    .author {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 0 1.6875rem 1.5rem;

      > .avatar > * {
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #fff;
        box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.25);
      }

      > .text-container {
        display: flex;
        flex-direction: column;
        text-align: right;
        padding-right: 0.5rem;
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
    const faviconSrc = `https://www.google.com/s2/favicons?domain=${encodedHref}`;
    const clippedBio = useMemo(
      () =>
        limitDescriptionLength && length(description) > 200
          ? `${slice(0, 200, description)}...`
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
            <Text h3 children={title} />
            <Text p children={clippedBio} />
          </div>

          <Link {...{to}} className='author'>
            <div className='text-container'>
              <Text h5 children={name} />
              <Text h6 children={`@${handle}`} />
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
