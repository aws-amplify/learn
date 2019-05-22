import {graphql} from 'gatsby';
import {
  MappedList,
  Layout,
  Nav,
  Card,
  Hero,
  Subscribe,
  Meta,
  Text,
} from '~/components';
import {TABLET_BREAKPOINT, ORANGE_PEEL_COLOR} from '~/constants';
import {
  identity,
  split,
  fromPairs,
  map,
  reduce,
  tail,
  mapObjIndexed,
  values,
  toPairs,
  sort,
  prop,
} from 'ramda';
import {track, extract} from '~/utilities';
import logoLightURI from '~/assets/images/logo-light.svg';
import {useMemo} from 'react';
import moment from 'moment';

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

const nextMonday = new Date();
// newDate.setDate(newDate.getDate() + 7 * numWeeks);
nextMonday.setDate(
  nextMonday.getDate() - 7 + ((1 + 7 - nextMonday.getDay()) % 7),
);

export default props => {
  track.internalPageView(props);

  const {sortedSlugs, dateRangeBySlug} = extract.fromPath(
    ['pageContext'],
    props,
  );

  const partitionedByYear = reduce(
    (accumulator, current) => {
      const [year] = tail(split('/', current));
      return {
        ...accumulator,
        [year]: [...(accumulator[year] || []), current],
      };
    },
    {},
    sortedSlugs,
  );

  const formattedDateRangeBySlug = map(
    e => map(d => moment(d).format('MMMM Do'), e),
    dateRangeBySlug,
  );

  const extractProps = slug => {
    const [x, year, week] = split('/', slug);
    const {startDate, endDate} = formattedDateRangeBySlug[slug];
    return {
      to: slug,
      heading: `Week ${week}`,
      subheading: `${startDate} to ${endDate}`,
    };
  };

  const sorted = sort((a, b) => b[0] - a[0], toPairs(partitionedByYear));

  const main = map(([year, slugs]) => {
    // console.log(year, slugs);
    return (
      <MappedList
        key={year}
        heading={<Text h2 className='list-heading' children={year} />}
        columnCountByBreakpoint={{
          [TABLET_BREAKPOINT]: 3,
        }}
        data={slugs}
        mapping={extractProps}
        keyExtractor={identity}
        renderItem={p => <Card.Newsletter {...p} />}
        additionalProps={{className: 'on-newsletters-page'}}
      />
    );
  }, sorted);

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
