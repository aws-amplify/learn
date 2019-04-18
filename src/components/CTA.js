import {Link} from 'gatsby'
import {css} from '@emotion/core'
import {ORANGE} from '~/constants'

export default () => (
  <Link
    to='/participate'
    css={css`
      display: block;
      width: 100%;
      background-color: #fff;
      padding: 26px;
      text-align: center;

      b {
        color: ${ORANGE};
        padding-right: 5px;
      }
    `}
  >
    <b>Loving using Amplify?</b>
    {`Host an event, write a post, submit your project, or share your creations!`}
  </Link>
)
