import asCard from './asCard'
import {css} from '@emotion/core'
import Img from 'gatsby-image'
import {MEDIUM_GRAY} from '~/constants'

const styles = css`
  display: flex;
  height: 100%;
  flex: 1;

  > .container {
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: right;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 16px;
      text-align: left;

      h4 {
        color: #000;
      }

      h5 {
        margin-top: 4px;
        color: ${MEDIUM_GRAY};
      }

      > .gatsby-image-wrapper {
        border: 1px solid #e9e9e9;
        border-radius: 50%;
        overflow: hidden;
        width: 45px !important;
        height: 45px !important;
        margin-right: 8px;
      }
    }

    > span {
      text-transform: uppercase;
      font-weight: bold;
      color: ${MEDIUM_GRAY};
      font-size: 15px;
      padding: 0px 16px 16px 0px;
    }
  }
`

export default asCard(
  ({Container, avatar, title, location, city, state, date}) => {
    return (
      <div css={styles} className='actionable tile'>
        <Container>
          <div>
            {avatar && <Img {...avatar} />}
            <div>
              <h4>{title}</h4>
              <h5>
                {location}
                <br />
                {`(${city}, ${state})`}
              </h5>
            </div>
          </div>
          <span>{date}</span>
        </Container>
      </div>
    )
  },
)
