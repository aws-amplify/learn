import {css} from '@emotion/core';
import {Layout, Text, Button, Nav} from '~/components';

// clean up height value
const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 65vh;

  > h2 {
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 400;
  }

  > h4 {
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: 300;
    padding-top: 0.875rem;
    padding-bottom: 1.375rem;
  }

  > .button {
    margin-top: 1rem;
    background-color: #fff;
    font-size: 1rem;
    font-weight: 300;
    font-height: 1.5rem;
  }
`;

export default () => (
  <Layout.Basic
    header={<Nav />}
    main={(
      <div css={styles}>
        <Text h2 className='page-heading' children='404' />
        <Text h4 className='page-subheading' children='Page Not Found' />
        <Button.Basic
          to='/'
          className='rounded actionable three-dee'
          children='Return Home'
        />
      </div>
)}
  />
);
