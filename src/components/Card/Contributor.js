import {css} from '@emotion/core';
import Img from 'gatsby-image';
import {IoLogoGithub, IoLogoTwitter, IoIosLink} from 'react-icons/io';
import {useMemo} from 'react';
import {identity, values, mapObjIndexed, length, slice} from 'ramda';
import {GRAY_COLOR} from '~/constants';
import asCard from './asCard';
import ExternalLink from '../ExternalLink';
import Text from '../Text';
import {classNames} from '~/utilities';

const styles = css`
  flex-direction: column;
  align-items: center;

  &.wide {
    flex-direction: row;

    > .body {
    }

    > .social {
      display: flex;
      align-self: stretch;
      flex-direction: column;
      width: initial;
      border-top-width: 0px;
      border-left: 1px solid #eee;

      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }

  > .body {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 2rem;

    .avatar > div {
      display: flex;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #fff;
      box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.25);
    }

    h3 {
      margin-top: 0.75rem;
      text-align: center;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 300;
    }

    p {
      margin-top: 0.5rem;
      text-align: center;
      font-size: 0.8125rem;
      line-height: 1.25rem;
      font-weight: 300;
      color: ${GRAY_COLOR};
      max-width: 40rem;
    }
  }

  > .social {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    border-top: 1px solid #eee;
    background-color: rgb(252, 252, 252);

    > a {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: center;
      padding: 1rem;
    }
  }
`;

const propsBySite = {
  github: {
    getHref: handle => `https://github.com/${handle}`,
    size: 20,
    Icon: IoLogoGithub,
  },
  twitter: {
    getHref: handle => `https://twitter.com/${handle}`,
    size: 20,
    Icon: IoLogoTwitter,
  },
  website: {
    getHref: identity,
    size: 20,
    Icon: IoIosLink,
  },
};

export default asCard(
  ({
    ConditionalAnchor,
    className,
    name,
    bio,
    limitBioLength,
    avatar,
    github,
    twitter,
    website,
    wide,
  }) => {
    const social = {github, twitter, website};
    const deps = values(social);
    const links = useMemo(
      () =>
        values(
          mapObjIndexed((v, key) => {
            const {getHref, Icon, size} = propsBySite[key];
            const href = v && getHref(v);
            return (
              href && (
                <ExternalLink {...{href}} className={key}>
                  <Icon {...{size}} />
                </ExternalLink>
              )
            );
          }, social),
        ),
      deps,
    );
    const clippedBio = useMemo(
      () =>
        limitBioLength && length(bio) > 50 ? `${slice(0, 50, bio)}...` : bio,
      [bio],
    );

    return (
      <div
        css={styles}
        className={classNames('contributor', className, wide && 'wide')}
      >
        <ConditionalAnchor className='body'>
          {avatar && (
            <div className='avatar'>
              {' '}
              <Img {...avatar} />
            </div>
          )}
          {name && <Text h3 children={name} />}
          {bio && <Text p children={clippedBio} />}
        </ConditionalAnchor>
        {deps.length && <div className='social'>{links}</div>}
      </div>
    );
  },
);
