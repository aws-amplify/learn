import {css} from '@emotion/core'
import asCard from './asCard'

const styles = css`
  display: flex;
  flex: 1;
  text-align: center;
  height: 100%;

  > .container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    padding: 16px;

    > .middle {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      > .text {
        display: flex;
        flex-direction: column;
        padding: 16px;

        > h5 {
          padding-top: 10px;
        }
      }
    }
  }
`

export default asCard(
  ({
    Container,
    heading,
    subheading,
    top,
    right,
    bottom,
    left,
    containerStyles,
  }) => (
    <div css={[styles, containerStyles]} className='actionable tile'>
      <Container>
        <div>
          {top !== false && <div className='top'>{top}</div>}
          <div className='middle'>
            {left !== false && <div className='left'>{left}</div>}
            <div className='text'>
              <h3>{heading}</h3>
              <h5>{subheading}</h5>
            </div>
            {right !== false && <div className='right'>{right}</div>}
          </div>
        </div>
        {bottom !== false && <div className='bottom'>{bottom}</div>}
      </Container>
    </div>
  ),
)
