import {graphql} from 'gatsby';
import {MappedList, Layout, Nav, Card, Hero, Subscribe} from '~/components';
import {TABLET_BREAKPOINT, ORANGE_PEEL_COLOR} from '~/constants';
import {identity, split} from 'ramda';
import {track} from '~/utilities';
import logoLightURI from '~/assets/images/logo-light.svg';

export const pageQuery = graphql`
  {
    sitePage(path: {eq: "/newsletters"}) {
      context {
        sortedSlugs
      }
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
  heading: 'AWS Amplify Weekly',
  subheading:
    'A weekly blog about community updates in the AWS Amplify ecosystem',
  background: ORANGE_PEEL_COLOR,
  textColor: '#fff',
  cta: <Subscribe />,
};

const extractProps = slug => {
  // eslint-disable-next-line
  const [x, year, week] = split('/', slug);
  return {
    to: slug,
    heading: `Week ${week}`,
    subheading: year,
  };
};

export default ({
  data: {
    sitePage: {
      context: {sortedSlugs},
    },
  },
  ...rest
}) => {
  track.internalPageView(rest);

  const main = (
    <MappedList
      columnCountByBreakpoint={{
        [TABLET_BREAKPOINT]: 3,
      }}
      noItems={<p>no items to display</p>}
      data={sortedSlugs}
      mapping={extractProps}
      keyExtractor={identity}
      renderItem={p => <Card.Newsletter {...p} />}
      additionalProps={{className: 'on-newsletters-page'}}
    />
  );

  return (
    <Layout.Basic
      header={[<Nav {...navProps} />, <Hero {...heroProps} />]}
      {...{main}}
    />
  );
};
