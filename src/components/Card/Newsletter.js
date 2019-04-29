import {css} from '@emotion/core';
import asCard from './asCard';
import Text from '../Text';
import {classNames} from '~/utilities';

const styles = css`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
`;

export default asCard(({ConditionalAnchor, heading, subheading, className}) => {
  return (
    <ConditionalAnchor
      css={styles}
      className={classNames(
        'newsletter three-dee actionable rounded',
        className,
      )}
    >
      <Text h3 className='newsletter-card-heading' children={heading} />
      <Text h3 className='newsletter-card-subheading' children={subheading} />
    </ConditionalAnchor>
  );
});
