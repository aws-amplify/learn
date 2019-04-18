import {css} from '@emotion/core'
import {LIGHT_BLUE, MEDIUM_BLUE, DARK_GRAY, MEDIUM_GRAY} from '~/constants'

export default css`
  a {
    text-decoration: none;
    color: ${LIGHT_BLUE};

    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    font-size: 2.5rem;
    line-height: 3.75rem;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 2.25rem;
  }

  h3 {
    font-size: 1.375rem;
    line-height: 2.0625rem;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.875rem;
    color: ${MEDIUM_BLUE};
  }

  h5 {
    font-size: 1.125rem;
    line-height: 1.6875rem;
    color: ${DARK_GRAY};
  }

  h6 {
    font-size: 0.875rem;
    line-height: 1.3125rem;
    color: ${MEDIUM_GRAY};
  }

  span {
    font-size: 1rem;
    color: ${DARK_GRAY};
  }
`
