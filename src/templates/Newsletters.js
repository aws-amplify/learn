import {useEffect, useMemo, useCallback} from 'react';
import {
  MappedList,
  Layout,
  Nav,
  Card,
  Hero,
  // Subscribe,
  Meta,
  Text,
} from '~/components';
import {TABLET_BREAKPOINT, ORANGE_PEEL_COLOR} from '~/constants';
import {identity, split, map, reduce, tail, toPairs, sort, last} from 'ramda';
import {track, extract} from '~/utilities';
import logoLightURI from '~/assets/images/logo-light.svg';
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
  // cta: <Subscribe />,
};

export default props => {
  useEffect(() => track.internalPageView(props), []);

  // no need to memoize this––checking dependency is more expensive than re-assignment
  const {sortedSlugs, dateRangeBySlug} = extract.fromPath(
    ['pageContext'],
    props,
  );

  const partitionedByYear = useMemo(
    () =>
      reduce(
        (accumulator, current) => {
          const [year] = tail(split('/', current));
          return {
            ...accumulator,
            [year]: [...(accumulator[year] || []), current],
          };
        },
        {},
        sortedSlugs,
      ),
    [sortedSlugs],
  );

  const formattedDateRangeBySlug = useMemo(
    () => map(e => map(d => moment(d).format('MMMM Do'), e), dateRangeBySlug),
    [dateRangeBySlug],
  );

  const extractProps = useCallback(
    slug => {
      const week = last(split('/', slug));
      const {startDate, endDate} = formattedDateRangeBySlug[slug];
      return {
        to: slug,
        heading: `Week ${week}`,
        subheading: `${startDate} to ${endDate}`,
      };
    },
    [formattedDateRangeBySlug],
  );

  const sorted = useMemo(
    () => sort((a, b) => b[0] - a[0], toPairs(partitionedByYear)),
    [partitionedByYear],
  );

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
        additionalItemProps={{className: 'three-dee rounded actionable'}}
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
