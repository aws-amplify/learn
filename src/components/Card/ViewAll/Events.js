import {css} from '@emotion/core';
import {FaArrowCircleRight} from 'react-icons/fa';
import asCard from '../asCard';
import Text from '../../Text';
import {ORANGE_PEEL_COLOR, GRAY_COLOR} from '~/constants';
import {classNames} from '~/utilities';

// figure out why moving styles into a 'styles' var and passing into css prop fails
export default asCard(({ConditionalAnchor, heading, subheading, className}) => (
  <ConditionalAnchor
    className={classNames(
      'view-all-events rounded scale-down actionable shadow',
      className,
    )}
    css={css`
      padding: 2rem;
      align-items: center;
      justify-content: space-between;

      .text {
        display: flex;
        flex-direction: column;
      }

      h3 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        color: ${ORANGE_PEEL_COLOR};
      }

      h4 {
        font-size: 0.8125rem;
        line-height: 1.25rem;
        font-weight: 300;
        color: ${GRAY_COLOR};
      }

      svg {
        color: ${ORANGE_PEEL_COLOR};
        width: 1.375rem;
        height: 1.375rem;
      }
    `}
  >
    <div>
      <Text h3 className='more-events-card-heading' children={heading} />
      <Text h4 className='more-events-card-subheading' children={subheading} />
    </div>
    <FaArrowCircleRight />
  </ConditionalAnchor>
));
