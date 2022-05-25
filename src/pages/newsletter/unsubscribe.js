import {css, Global} from '@emotion/core';
import useWindowSize from 'react-use/lib/useWindowSize';
import {Layout, Nav, Hero, Subscribe, Meta, ExternalLink} from '~/components';
import {ORANGE_PEEL_COLOR} from '~/constants';
import logoLightURI from '~/assets/images/logo-light.svg';

const styles = css`
  #___gatsby > div > * {
    margin: 0px !important;

    & > .body {
      display: none !important;
    }
  }
`;

const navProps = {
  beforeScroll: {
    backgroundColor: ORANGE_PEEL_COLOR,
    textColor: '#fff',
    logoSrc: logoLightURI,
  },
};

const heroProps = {
  heading: 'Unsubscribe from the Newsletter',
  subheading: (
    <>
      {`We're sad to see you go. If you have a minute, we'd really appreciate feedback; please `}
      <ExternalLink href='#' children='let us know how we can do better.' />
    </>
  ),
  background: ORANGE_PEEL_COLOR,
  textColor: '#fff',
  cta: <Subscribe action='unsubscribe' />,
};

export default () => {
  const {height} = useWindowSize();

  return (
    <>
      <Meta pageName='Newsletter Unsubscribe' />
      <Global {...{styles}} />
      <Layout.Basic
        header={[<Nav {...navProps} />, <Hero {...heroProps} {...{height}} />]}
      />
    </>
  );
};
