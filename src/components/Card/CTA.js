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
    align-items: space-between;
  }
`

export default asCard(
  ({
    ConditionalAnchor,
    heading,
    subheading,
    top,
    right,
    bottom,
    left,
    containerStyles,
  }) => (
    <div css={[styles, containerStyles]} className='actionable tile'>
      <ConditionalAnchor>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 16px;
          `}
        >
          {top !== false && <div>{top}</div>}
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            `}
          >
            {left !== false && <div>{left}</div>}
            <div>
              <h3>{heading}</h3>
              <h5>{subheading}</h5>
            </div>
            {right !== false && (
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                `}
              >
                {right}
              </div>
            )}
          </div>
        </div>
        {bottom !== false && <div>{bottom}</div>}
      </ConditionalAnchor>
    </div>
  ),
)
