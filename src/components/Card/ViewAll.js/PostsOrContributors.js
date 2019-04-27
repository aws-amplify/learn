import {css} from '@emotion/core';
import asCard from '../asCard';
import Text from '../../Text';
import {FaArrowCircleRight} from 'react-icons/fa';
import {mq, ORANGE_PEEL_COLOR} from '~/constants';
import {classNames} from '~/utilities';

export default asCard(
  ({ConditionalAnchor, graphic, heading, subheading, className}) => (
    <ConditionalAnchor
      className={classNames(
        'view-all-posts-or-contributors rounded scale-down actionable shadow',
        className,
      )}
      css={css`
        text-align: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 32px;

        ${mq.tablet} {
          padding: 0px 16px;
        }

        h3 {
          margin-top: 8px;
        }

        p {
          margin-top: 8px;
        }

        .more-posts-or-contributors-heading,
        svg {
          color: ${ORANGE_PEEL_COLOR};
        }

        .arrow {
          margin-top: 16px;
        }
      `}
    >
      <div className='grapic' children={graphic} />
      <Text
        h3
        className='more-posts-or-contributors-heading'
        children={heading}
      />
      <Text
        p
        className='more-posts-or-contributors-subheading'
        children={subheading}
      />
      <div className='arrow'>
        <FaArrowCircleRight size={22} />
      </div>
    </ConditionalAnchor>
  ),
);
