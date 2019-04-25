import {css} from '@emotion/core'
import {Text, Button} from '~/components'

const styles = css`
  display: flex;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
`

export default () => (
  <div css={styles}>
    <div>
      <Text h2 className='page-heading'>
        404 – Page Not Found
      </Text>
      <Button.Basic to='/' className='four-o-four-return-to-landing'>
        Return Home
      </Button.Basic>
    </div>
  </div>
)
