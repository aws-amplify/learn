import {css} from '@emotion/core';
import asCard from '../asCard';
import Text from '../../Text';
import {FaArrowCircleRight} from 'react-icons/fa';
import {mq, ORANGE_PEEL_COLOR, GRAY_COLOR} from '~/constants';
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
          font-size: 1.25rem;
          font-weight: 400;
          line-height: 1.875rem;
        }

        p {
          margin-top: 4px;
          font-size: 0.8125rem;
          line-height: 1.25rem;
          color: ${GRAY_COLOR};
          font-weight: 300;
          max-width: 100% !important;
        }

        h3,
        svg {
          color: ${ORANGE_PEEL_COLOR};
        }

        .arrow {
          margin-top: 16px;
        }
      `}
    >
      <div className='grapic' children={graphic} />
      <Text h3 children={heading} />
      <Text p children={subheading} />
      <div className='arrow'>
        <FaArrowCircleRight size={22} />
      </div>
    </ConditionalAnchor>
  ),
);
