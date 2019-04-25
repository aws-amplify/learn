import {css} from '@emotion/core'
import asCard from '../asCard'
import Text from '../../Text'
import {FaArrowCircleRight} from 'react-icons/fa'
import {ORANGE_PEEL_COLOR} from '~/constants'

export default asCard(({ConditionalAnchor, heading, subheading}) => (
  <div
    className='shadow'
    css={css`
      display: flex;
      flex: 1;
      height: 100%;
      background-color: #fff;
      border-radius: 5px;

      .container {
        padding: 32px;
        display: flex;
        flex-direction: row;
        flex: 1;
        align-items: center;
        justify-content: space-between;
      }

      .text {
        display: flex;
        flex: 1;
      }

      .more-events-card-heading,
      svg {
        color: ${ORANGE_PEEL_COLOR};
      }
    `}
  >
    <ConditionalAnchor>
      <div>
        <Text h3 className='more-events-card-heading'>
          {heading}
        </Text>
        <Text h4 className='more-events-card-subheading'>
          {subheading}
        </Text>
      </div>
      <FaArrowCircleRight size={22} />
    </ConditionalAnchor>
  </div>
))
