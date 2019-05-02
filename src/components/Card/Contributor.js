import {css} from '@emotion/core';
import Img from 'gatsby-image';
import {IoLogoGithub, IoLogoTwitter, IoIosLink} from 'react-icons/io';
import {useMemo} from 'react';
import {identity, values, mapObjIndexed, length, slice} from 'ramda';
import asCard from './asCard';
import ExternalLink from '../ExternalLink';
import Text from '../Text';
import {classNames} from '~/utilities';

const styles = css`
  flex-direction: column;
  align-items: center;

  > .body {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 32px;

    .avatar > div {
      display: flex;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #fff;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    }

    .contributor-card-name {
      margin-top: 12px;
      text-align: center;
    }

    .contributor-card-bio {
      margin-top: 8px;
      text-align: center;
      max-width: 40rem;
    }
  }

  > .social {
    display: block;
    text-align: center;
    width: 100%;
    border-top: 1px solid #eee;
    background-color: rgb(252, 252, 252);

    > a {
      display: inline-block;
      padding: 16px;
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
        className={classNames('contributor three-dee rounded', className)}
      >
        <ConditionalAnchor className='body'>
          {avatar ? (
            <div className='avatar'>
              {' '}
              <Img {...avatar} />
            </div>
          ) : (
            '[backup image]'
          )}
          {name && (
            <Text h3 className='contributor-card-name' children={name} />
          )}
          {bio && (
            <Text p className='contributor-card-bio' children={clippedBio} />
          )}
        </ConditionalAnchor>
        {deps.length && <div className='social'>{links}</div>}
      </div>
    );
  },
);
