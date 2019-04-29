import {css} from '@emotion/core';
import {Layout, Text, Button, Nav} from '~/components';

// clean up height value
const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 65vh;

  .button {
    margin-top: 16px;
    background-color: #fff;
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
