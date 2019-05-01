import {graphql} from 'gatsby';
import {
  MappedList,
  Layout,
  Nav,
  Card,
  Hero,
  Subscribe,
  Meta,
} from '~/components';
import {TABLET_BREAKPOINT, ORANGE_PEEL_COLOR} from '~/constants';
import {identity, split, fromPairs, map} from 'ramda';
import {track, extract} from '~/utilities';
import logoLightURI from '~/assets/images/logo-light.svg';
import {useMemo} from 'react';

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
  heading: 'AWS Amplify Newsletter',
  subheading: 'A weekly roundup of updates regarding the AWS Amplify ecosystem',
  background: ORANGE_PEEL_COLOR,
  textColor: '#fff',
  cta: <Subscribe />,
};

export default props => {
  track.internalPageView(props);

  const {sortedSlugs, dateRanges} = extract.fromPath(
    ['data', 'sitePage', 'context'],
    props,
  );

  const dateRangeBySlug = useMemo(
    () => fromPairs(map(({slug, ...dates}) => [slug, dates], dateRanges)),
    [],
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
    <>
      <Meta pageName='Newsletters' />
      <Layout.Basic
        header={[<Nav {...navProps} />, <Hero {...heroProps} />]}
        {...{main}}
      />
    </>
  );
};
