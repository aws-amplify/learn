import {css} from '@emotion/core';
import asCard from '../asCard';
import Text from '../../Text';
import {FaArrowCircleRight} from 'react-icons/fa';
import {mq, ORANGE_PEEL_COLOR, GRAY_COLOR} from '~/constants';
import {classNames} from '~/utilities';

const styles = css`
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  ${mq.tablet} {
    padding: 0 1rem;
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.875rem;
  }

  p {
    margin-top: 0.25rem;
    font-size: 0.8125rem;
    line-height: 1.25rem;
    color: ${GRAY_COLOR};
    font-weight: 300;
    max-width: 100% !important;
  }

  &.view-all-contributors .graphic svg {
    width: 3.75rem;
    height: 3.75rem;
  }

  &.view-all-posts .graphic svg {
    width: 3.125rem;
    height: 3.125rem;
  }

  h3,
  svg {
    color: ${ORANGE_PEEL_COLOR};
  }

  .arrow {
    margin-top: 1.25rem;

    > svg {
      width: 1.375rem;
      height: 1.375rem;
    }
  }
`;

export default asCard(
  ({ConditionalAnchor, graphic, heading, subheading, className}) => (
    <ConditionalAnchor
      className={classNames(
        'view-all-posts-or-contributors rounded scale-down actionable shadow',
        className,
      )}
      css={styles}
    >
      <div className='graphic' children={graphic} />
      <Text h3 children={heading} />
      <Text p children={subheading} />
      <div className='arrow'>
        <FaArrowCircleRight />
      </div>
    </ConditionalAnchor>
  ),
);
