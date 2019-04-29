import {graphql} from 'gatsby';
import {MappedList, Layout, Nav, Card, Hero, Subscribe} from '~/components';
import {TABLET_BREAKPOINT, ORANGE_PEEL_COLOR} from '~/constants';
import {identity, split, fromPairs, map} from 'ramda';
import {track} from '~/utilities';
import logoLightURI from '~/assets/images/logo-light.svg';

export const pageQuery = graphql`
  {
    sitePage(path: {eq: "/newsletters"}) {
      context {
        sortedSlugs
        dateRanges {
          slug
          startDate(formatString: "MMM Do")
          endDate(formatString: "MMM Do")
        }
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

export default ({
  data: {
    sitePage: {
      context: {sortedSlugs, dateRanges},
    },
  },
  ...rest
}) => {
  track.internalPageView(rest);

  const dateRangeBySlug = fromPairs(
    map(({slug, ...dates}) => [slug, dates], dateRanges),
  );

  const extractProps = slug => {
    // eslint-disable-next-line
    const [x, year, week] = split('/', slug);
    const {startDate, endDate} = dateRangeBySlug[slug];
    return {
      to: slug,
      heading: `Week ${week}`,
      subheading: `${startDate} to ${endDate}`,
    };
  };

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
