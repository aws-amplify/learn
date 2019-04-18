import asCard from './asCard'
import {css} from '@emotion/core'

const styles = css`
  display: flex;
  height: 100%;
  flex: 1;

  > .container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;

      .avatar {
        display: block;
        width: 40px;
        height: 40px;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        margin-right: 16px;
      }
    }

    span {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding: 8px;
      text-transform: uppercase;
    }
  }
`

export default asCard(({Container, avatar, title, location, date}) => {
  return (
    <div css={styles} className='actionable tile'>
      <Container>
        <div>
          <div
            className='avatar'
            css={css`
              background-image: url(${avatar.fixed.src});
            `}
          />
          <div className='title-and-location'>
            <h3>{title}</h3>
            <h5>{location}</h5>
          </div>
        </div>
        <span>{date}</span>
      </Container>
    </div>
  )
})
