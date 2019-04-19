import asCard from './asCard'
import {css} from '@emotion/core'
import Img from 'gatsby-image'
import {DARK_GRAY} from '~/constants'

const styles = css`
  display: flex;
  height: 100%;
  flex: 1;

  > .container {
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: right;
    justify-content: center;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 24px;
      text-align: left;

      h4 {
        color: #000;
      }

      h5 {
        margin-top: 8px;
        color: ${DARK_GRAY};
        font-size: 14px;
      }

      .gatsby-image-wrapper {
        flex-shrink: 0;
        border: 1px solid #e9e9e9;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 24px;
      }
    }
  }
`

export default asCard(
  ({
    Container,
    avatar,
    title,
    location,
    city,
    state,
    date,
    containerStyles,
  }) => {
    return (
      <div css={[styles, containerStyles]} className='actionable tile'>
        <Container>
          <div>
            {avatar && <Img {...avatar} />}
            <div>
              <h4>{title}</h4>
              <h5>{date}</h5>
              <h5>{`${location} (${city}, ${state})`}</h5>
            </div>
          </div>
        </Container>
      </div>
    )
  },
)
