import {css} from '@emotion/core';
import {mq, MAX_WIDTH} from '~/constants';
import {ToastContainer} from 'react-toastify';
import GlobalStyles from '../GlobalStyles';
import Footer from '../Footer';

export const style = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  > .nav {
    z-index: 1;
  }

  > .body {
    display: flex;
    flex: 1;
    z-index: 0;

    > div {
      display: flex;
      flex-direction: row;
      flex: 1;
      max-width: ${MAX_WIDTH};
      margin: 0px auto;

      .menu {
        &.side {
          display: none;
          flex-shrink: 1;
          margin-top: 25px;

          ${mq.tablet} {
            display: flex;
          }
        }
      }

      .main {
        display: flex;
        flex-direction: column;
        flex: 1;
        z-index: 0;
        padding: 16px 0px;
      }
    }
  }
`;

export default ({header, main}) => (
  <>
    <GlobalStyles />
    <div css={style}>
      {header}
      <div className='body'>
        <div>
          <div className='main'>{main}</div>
        </div>
      </div>
    </div>
    <Footer />
    <ToastContainer />
  </>
);
