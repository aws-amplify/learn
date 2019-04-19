import {Link} from 'gatsby'
import {css} from '@emotion/core'
import {ORANGE, LIGHT_BLUE, mq} from '~/constants'

export default () => (
  <div
    css={css`
      display: flex;
      flex: 1;
      background-color: #fff;
      padding: 16px;
      flex-direction: row;
      justify-content: center;

      .button {
        background-color: ${ORANGE};
        color: #fff;
        margin: 0px auto;
        text-align: center;
      }
    `}
  >
    <div>
      <Link className='actionable tile button' to='/participate'>
        <h4>Host an event, write a post, submit your project, ...</h4>
      </Link>
    </div>
  </div>
)
