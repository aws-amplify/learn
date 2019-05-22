import {Link} from 'gatsby';
import Img from 'gatsby-image';
import {css} from '@emotion/core';
import Text from '../../../Text';

const styles = css`
  display: flex;
  flex-direction: row;

  > .avatar > * {
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fff;
    box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.25);
  }

  > .text-container {
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: center;
    padding-right: 0.5rem;

    h5 {
      font-size: 0.8125rem;
      line-height: 1.21875rem;
      font-weight: 300;
    }

    h6 {
      font-size: 0.8125rem;
      line-height: 1.21875rem;
      font-weight: 200;
    }
  }
`;

export default ({to, name, handle, avatar}) => {
  return (
    <Link css={styles} {...{to}}>
      <div className='text-container'>
        <Text h5 children={name} />
        <Text h6 children={`@${handle}`} />
      </div>

      {avatar && (
        <div className='avatar'>
          <Img {...avatar} />
        </div>
      )}
    </Link>
  );
};
