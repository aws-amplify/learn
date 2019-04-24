import {css} from '@emotion/core'
import {DARK_GRAY} from '~/constants'
import {keys} from 'ramda'

// LETTER SPACINGS

const baseStyles = css`
  display: flex;
  font-family: Amazon Ember;
`

const styleByKey = {
  navBranding: {
    Tag: 'h1',
    styles: css`
      font-size: 18px;
      font-weight: 200;
    `,
  },

  navLink: {
    Tag: 'span',
    styles: css`
      font-size: 15px;
      font-weight: 200;
    `,
  },

  heroHeading: {
    Tag: 'h1',
    styles: css`
      font-size: 40px;
      line-height: 48px;
      font-weight: 200;
    `,
  },

  heroSubheading: {
    Tag: 'h3',
    styles: css`
      font-size: 22px;
      line-height: 36px;
      font-weight: 100;
    `,
  },

  pageHeading: {
    Tag: 'h2',
    styles: css`
      font-size: 26px;
      font-weight: 400;
    `,
  },

  listHeading: {
    Tag: 'h3',
    styles: css`
      font-size: 22px;
      font-weight: 400;
    `,
  },

  listSubheading: {
    Tag: 'h4',
    styles: css`
      font-size: 18px;
      font-weight: 200;
    `,
  },

  eventCardTitle: {
    Tag: 'h4',
    styles: css`
      font-size: 16px;
      line-height: 24px;
      font-weight: 300;
    `,
  },

  eventCardDetail: {
    Tag: 'h5',
    styles: css`
      font-size: 13px;
      font-weight: 300;
      line-height: 20px;
      color: ${DARK_GRAY};
    `,
  },

  postCardTitle: {
    Tag: 'h4',
    styles: css`
      font-size: 20px;
      font-weight: 300;
      line-height: 30px;
    `,
  },

  postCardDescription: {
    Tag: 'h5',
    styles: css`
      font-size: 13px;
      font-weight: 200;
    `,
  },

  postCardName: {
    Tag: 'h6',
    styles: css`
      font-size: 13px;
      font-weight: 300;
    `,
  },

  postCardHandle: {
    Tag: 'h6',
    styles: css`
      font-size: 13px;
      font-weight: 200;
    `,
  },

  contributorCardName: {
    Tag: 'h3',
    styles: css`
      font-size: 16px;
      line-height: 24px;
      font-weight: 300;
    `,
  },

  contributorCardBio: {
    Tag: 'h4',
    styles: css`
      font-size: 13px;
      line-height: 20px;
      font-weight: 300;
      color: ${DARK_GRAY};
    `,
  },

  moreEventsCardHeading: {
    Tag: 'h3',
    styles: css`
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
    `,
  },

  moreEventsCardSubheading: {
    Tag: 'p',
    styles: css`
      font-size: 13px;
      line-height: 20px;
      font-weight: 300;
      color: ${DARK_GRAY};
    `,
  },

  morePostsOrContributorsHeading: {
    Tag: 'h3',
    styles: css`
      font-size: 20px;
      font-weight: 300;
      line-height: 30px;
    `,
  },

  morePostsOrContributorsSubheading: {
    Tag: 'p',
    styles: css`
      font-size: 13px;
      line-height: 20px;
      font-weight: 300;
      color: ${DARK_GRAY};
    `,
  },

  landingListCta: {
    Tag: 'span',
    styles: css`
      font-size: 14px;
      line-height: 21px;
      font-weight: 300;
    `,
  },

  footerNewsletterCTA: {
    Tag: 'span',
    styles: css`
      font-size: 14px;
      line-height: 21px;
      font-weight: 400;
    `,
  },

  footerCopyright: {
    Tag: 'h6',
    styles: css`
      font-size: 12px;
      line-height: 21px;
      font-weight: 200;
    `,
  },

  checkboxGroupHeading: {
    Tag: 'h3',
    styles: css`
      font-size: 18px;
      font-weight: 400;
      line-height: 40px;
      text-transform: capitalize;
    `,
  },

  checkboxLabel: {
    Tag: 'span',
    styles: css`
      font-size: 14px;
      font-weight: 300;
      line-height: 21px;
    `,
  },

  submitCardHeading: {
    Tag: 'h3',
    styles: css`
      font-size: 15px;
      font-weight: 300;
      line-height: 23px;
    `,
  },

  submitCardSubheading: {
    Tag: 'h4',
    styles: css`
      font-size: 13px;
      font-weight: 300;
      line-height: 16px;
    `,
  },
}

export default ({children, className: passedClassName, ...rest}) => {
  const [key] = keys(rest)
  const {Tag, styles} = styleByKey[key]
  const className = `text ${passedClassName || ''} ${key
    .replace(/([a-zA-Z])(?=[A-Z])/g, '$1-')
    .toLowerCase()}`
  return (
    <Tag {...{className}} css={[baseStyles, styles]}>
      {children}
    </Tag>
  )
}
