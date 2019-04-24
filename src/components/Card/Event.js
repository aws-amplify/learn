import asCard from './asCard'
import {css} from '@emotion/core'
import Img from 'gatsby-image'
import Text from '../Text'
import {head, split} from 'ramda'
import {useMemo} from 'react'

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
    ConditionalAnchor,
    avatar,
    title,
    location,
    city,
    state,
    date,
    containerStyles,
  }) => {
    const formattedDate = useMemo(() => head(split(', ', date)), [date])

    return (
      <div css={[styles, containerStyles]} className='item three-dee tile'>
        <ConditionalAnchor>
          <div>
            {avatar && <Img {...avatar} />}
            <div>
              <Text eventCardTitle>{title}</Text>
              <Text eventCardDetail>{formattedDate}</Text>
              <Text eventCardDetail>{`${location} (${city}, ${state})`}</Text>
            </div>
          </div>
        </ConditionalAnchor>
      </div>
    )
  },
)
