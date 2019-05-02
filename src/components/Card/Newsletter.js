import {css} from '@emotion/core';
import asCard from './asCard';
import Text from '../Text';
import {classNames} from '~/utilities';

const styles = css`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;

  h3 {
    font-size: 0.9375rem;
    font-weight: 300;
    line-height: 1.4375rem;
  }

  h4 {
    font-size: 0.8125rem;
    font-weight: 200;
    line-height: 1.25rem;
  }
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
      <Text h3 children={heading} />
      <Text h4 children={subheading} />
    </ConditionalAnchor>
  );
});
