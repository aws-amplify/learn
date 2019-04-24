import {css} from '@emotion/core'
import asCard from '../asCard'
import Text from '../../Text'
import {FaArrowCircleRight} from 'react-icons/fa'
import {ORANGE} from '~/constants'

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

      .more-events-card-heading,
      path {
        color: ${ORANGE};
      }
    `}
  >
    <ConditionalAnchor>
      <div>
        <Text moreEventsCardHeading>{heading}</Text>
        <Text moreEventsCardSubheading>{subheading}</Text>
      </div>
      <FaArrowCircleRight size={22} />
    </ConditionalAnchor>
  </div>
))
