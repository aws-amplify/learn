import {css} from '@emotion/core';
import Img from 'gatsby-image';
import LazyLoad from 'react-lazyload';
import {SAN_JUAN_COLOR, GRAY_COLOR, mq} from '~/constants';
import {classNames} from '~/utilities';
import Text from '../../Text';
import asCard from '../asCard';
import {Author} from './fragments';

// 1600, maxHeight: 989
const styles = css`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  ${mq.desktop} {
    flex-direction: row;
  }

  .favicon {
    opacity: 0.5;
    transition: opacity 0.25s ease;
  }

  &:hover {
    .favicon {
      opacity: 1;
    }
  }

  .banner {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0.5rem;
    background: linear-gradient(to bottom, rgb(240, 240, 240), #fff);

    ${mq.desktop} {
      margin-bottom: 0;
      margin-right: 0.5rem;
      background: linear-gradient(to right, rgb(240, 240, 240), #fff);
    }

    > .gatsby-image-wrapper {
      ${mq.desktop} {
        position: absolute !important;
        top: 0;
        bottom: 0;
        left: 0;
      }

      width: 100%;

      img {
        object-fit: contain !important;
      }
    }
  }

  .body {
    position: relative;
    display: flex;
    flex: 2;
    flex-direction: column;
    padding: 2rem 1.6875rem;
    background-color: rgb(253, 253, 253);
    border-radius: 4px;

    .favicon {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
    }

    h3,
    p {
      display: flex;
      flex: 1;
    }

    h3 {
      font-size: 1.25rem;
      line-height: 1.875rem;
      font-weight: 400;
      color: ${SAN_JUAN_COLOR};
    }

    p {
      color: ${GRAY_COLOR};
      margin-top: 0.625rem;
      font-size: 0.875rem;
      line-height: 1.3125rem;
      font-weight: 300;
    }

    .author {
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
`;

export default asCard(
  ({
    className,
    ConditionalAnchor,
    banner,
    onContributorPage,
    authors,
    title,
    description,
    href,
  }) => {
    const [firstAuthor] = authors;
    const {to, name, twitter, github, avatar} = firstAuthor;
    const handle = twitter || github;
    const encodedHref = encodeURI(href);
    // do this at build time!
    const faviconSrc = `https://www.google.com/s2/favicons?domain=${encodedHref}`;

    return (
      <LazyLoad>
        <ConditionalAnchor
          css={styles}
          className={classNames(className, 'post-expanded')}
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
              <Text p children={description} />
            </div>

            {!onContributorPage && (
              <div className='author'>
                <Author {...{to, name, handle, avatar}} />
              </div>
            )}
          </div>
        </ConditionalAnchor>
      </LazyLoad>
    );
  },
);
