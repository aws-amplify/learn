import {css} from '@emotion/core';
import Img from 'gatsby-image';
import {head, split} from 'ramda';
import {useMemo} from 'react';
import Text from '../Text';
import asCard from './asCard';
import {classNames} from '~/utilities';

const styles = css`
  flex-direction: row;
  align-items: center;
  padding: 24px;
  text-align: left;

  .text {
    display: flex;
    flex: 1;
  }

  .avatar > * {
    flex-shrink: 0;
    border: 1px solid #e9e9e9;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 24px;
  }
`;

export default asCard(
  ({
    ConditionalAnchor,
    avatar,
    title,
    location,
    city,
    state,
    date,
    className,
  }) => {
    const formattedDate = useMemo(() => head(split(', ', date)), [date]);

    return (
      <ConditionalAnchor
        css={styles}
        className={classNames(className, 'event three-dee actionable rounded')}
      >
        {avatar && (
          <div className='avatar'>
            <Img {...avatar} />
          </div>
        )}
        <div>
          <Text h3 className='event-card-title' children={title} />
          <Text h4 className='event-card-detail' children={formattedDate} />
          <Text
            h4
            className='event-card-detail'
            children={`${location} (${city}, ${state})`}
          />
        </div>
      </ConditionalAnchor>
    );
  },
);
