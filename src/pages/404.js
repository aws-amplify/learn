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
      <Text pageHeading>404 – Page Not Found</Text>
      <Button.Basic to='/' fourOFourReturnToLanding>
        Return Home
      </Button.Basic>
    </div>
  </div>
)
