import {css} from '@emotion/core'
import asCard from '../asCard'
import Text from '../../Text'
import {FaArrowCircleRight} from 'react-icons/fa'
import {mq, ORANGE_PEEL_COLOR} from '~/constants'

export default asCard(({ConditionalAnchor, graphic, heading, subheading}) => (
  <div
    className='shadow'
    css={css`
      display: flex;
      flex: 1;
      height: 100%;
      background-color: #fff;
      border-radius: 5px;
      text-align: center;

      .container {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: space-evenly;
        padding: 32px;

        ${mq.tablet} {
          padding: 0px 16px;
        }

        > svg {
          margin-top: 16px;

          ${mq.tablet} {
            margin-top: 0px;
          }
        }

        .more-posts-or-contributors-heading,
        svg {
          color: ${ORANGE_PEEL_COLOR};
        }

        > div {
          > .text {
            display: flex;
            flex-direction: row;
            flex: 1;
            justify-content: center;
          }
        }
      }
    `}
  >
    <ConditionalAnchor>
      <div>
        {graphic}
        <Text h3 className='more-posts-or-contributors-heading'>
          {heading}
        </Text>
        <Text p className='more-posts-or-contributors-subheading'>
          {subheading}
        </Text>
      </div>
      <FaArrowCircleRight size={22} />
    </ConditionalAnchor>
  </div>
))
