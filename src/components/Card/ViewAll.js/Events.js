import {css} from '@emotion/core';
import asCard from '../asCard';
import Text from '../../Text';
import {FaArrowCircleRight} from 'react-icons/fa';
import {ORANGE_PEEL_COLOR} from '~/constants';
import {classNames} from '~/utilities';

export default asCard(({ConditionalAnchor, heading, subheading, className}) => (
  <ConditionalAnchor
    className={classNames('view-all-events shadow', className)}
    css={css`
      padding: 32px;
      align-items: center;
      justify-content: space-between;

      .text {
        display: flex;
        flex-direction: column;
      }

      .more-events-card-heading,
      svg {
        color: ${ORANGE_PEEL_COLOR};
      }
    `}
  >
    <div>
      <Text h3 className='more-events-card-heading'>
        {heading}
      </Text>
      <Text h4 className='more-events-card-subheading'>
        {subheading}
      </Text>
    </div>
    <FaArrowCircleRight size={22} />
  </ConditionalAnchor>
));
