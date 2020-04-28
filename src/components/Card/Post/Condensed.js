import {css} from '@emotion/core';
import Text from '../../Text';
import {classNames} from '~/utilities';
import asCard from '../asCard';
import {Author} from './fragments';

// hardcode KASHMIR_BLUE_COLOR
const styles = css`
  flex-direction: column;
  justify-content: space-between;
  background-color: #4b6189;

  * {
    color: #fff;
  }

  &:hover {
    .body .favicon {
      opacity: 1;
    }
  }

  .body {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    .favicon {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
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

    .author {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 0 1.6875rem 1.5rem;
    }
  }
`;

export default asCard(
  ({
    className,
    ConditionalAnchor,
    authors,
    title,
    description,
    href,
    onNewsletter,
  }) => {
    const [firstAuthor] = authors;
    const {to, name, twitter, github, avatar} = firstAuthor;
    const handle = twitter || github;
    const encodedHref = encodeURI(href);
    // do this at build time!
    const faviconSrc = `https://www.google.com/s2/favicons?domain=${encodedHref}`;

    return (
      <>
        {onNewsletter && (
          <div
            data-visitor-target
            css={css`
              display: none;
            `}
            {...{
              href,
              title,
              description,
            }}
          />
        )}
        <ConditionalAnchor
          css={styles}
          className={classNames(className, 'post-condensed')}
        >
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

            <div className='author'>
              <Author {...{to, name, handle, avatar}} />
            </div>
          </div>
        </ConditionalAnchor>
      </>
    );
  },
);
