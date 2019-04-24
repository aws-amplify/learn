import {css} from '@emotion/core'
import asCard from '../asCard'
import Text from '../../Text'
import {FaArrowCircleRight} from 'react-icons/fa'
import {ORANGE} from '~/constants'

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

        .more-posts-or-contributors-heading,
        svg {
          color: ${ORANGE};
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
        <Text morePostsOrContributorsHeading>{heading}</Text>
        <Text morePostsOrContributorsSubheading>{subheading}</Text>
      </div>
      <FaArrowCircleRight size={22} />
    </ConditionalAnchor>
  </div>
))
