import {css} from '@emotion/core';
import asCard from '../asCard';
import Text from '../../Text';
import {FaArrowCircleRight} from 'react-icons/fa';
import {mq, ORANGE_PEEL_COLOR} from '~/constants';
import {classNames} from '~/utilities';

export default asCard(
  ({ConditionalAnchor, graphic, heading, subheading, className}) => (
    <ConditionalAnchor
      className={classNames('view-all-posts-or-contributors shadow', className)}
      css={css`
        text-align: center;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 32px;

        ${mq.tablet} {
          padding: 0px 16px;
        }

        > svg {
          margin-top: 16px;

          ${mq.tablet} {
            margin-top: 0px;
          }
        }

        .more-posts-or-contributors-heading,
        svg {
          color: ${ORANGE_PEEL_COLOR};
        }

        > div {
          > .text {
            display: flex;
            flex-direction: row;
            flex: 1;
            justify-content: center;
          }
        }
      `}
    >
      <div>
        {graphic}
        <Text h3 className='more-posts-or-contributors-heading'>
          {heading}
        </Text>
        <Text p className='more-posts-or-contributors-subheading'>
          {subheading}
        </Text>
      </div>
      <FaArrowCircleRight size={22} />
    </ConditionalAnchor>
  ),
);
