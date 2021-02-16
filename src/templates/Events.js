import {graphql} from 'gatsby';
import {useEffect} from 'react';
import {
  values,
  mapObjIndexed,
  map,
  filter as filterRamda,
  identity,
  head,
  keys,
  split,
  join,
  isEmpty,
  includes,
} from 'ramda';
import {filter as filterContext} from '~/contexts';
import {
  mapNodeToProps,
  extract,
  groupEventEdges,
  createFilterContextValue,
  getFilterOptions,
  track,
  monthIndexByName,
} from '~/utilities';
import {
  Layout,
  Card,
  MappedList,
  Nav,
  Filter,
  Text,
  Button,
  Meta,
} from '~/components';
import {LAPTOP_BREAKPOINT, DESKTOP_BREAKPOINT} from '~/constants';

export const pageQuery = graphql`
  query($currentDate: Date!) {
    allMarkdownRemark(
      sort: {fields: [fields___date], order: ASC}
      filter: {fields: {category: {eq: "events"}, date: {gt: $currentDate}}}
    ) {
      edges {
        node {
          ...Event
          frontmatter {
            platforms
            avatar {
              ...AvatarSmall
            }
          }
        }
      }
    }
  }
`;

const header = <Nav />;
const CITY_PATH = ['node', 'frontmatter', 'city'];
const DATE_PATH = ['node', 'fields', 'date'];

export default props => {
  useEffect(() => track.internalPageView(props), []);

  const value = createFilterContextValue(
    {
      key: 'city',
      path: CITY_PATH,
      meetsCriterion: (field, criterion) =>
        !criterion || isEmpty(criterion) || includes(field, criterion),
    },
    {
      key: 'dates',
      path: DATE_PATH,
      meetsCriterion: (field, criterion) => {
        if (!criterion) return true;
        const [month, day, year] = split(' ', join('', split(',', field)));
        const fieldAsDate = new Date(year, monthIndexByName[month], day);
        return fieldAsDate >= criterion[0] && fieldAsDate <= criterion[1];
      },
    },
  );

  const edges = extract.fromPath(['data', 'allMarkdownRemark', 'edges'], props);
  const noneUpcoming = isEmpty(edges);
  const cityOptions = !noneUpcoming && getFilterOptions(CITY_PATH, edges);
  const menu = !noneUpcoming && (
    <Filter
      filters={[
        {
          key: 'city',
          name: 'City',
          type: 'MULTI_SELECT',
          options: cityOptions,
        },
        {key: 'dates', name: 'Date Range', type: 'DATE_RANGE'},
      ]}
    />
  );

  const edgesByMonth = groupEventEdges(edges);
  // work on a less complex solution
  const firstKey = head(keys(edgesByMonth));

  const main = noneUpcoming ? (
    'none upcoming'
  ) : (
    <filterContext.Consumer>
      {({meetsCriteria}) =>
        !isEmpty(edges) &&
        values(
          mapObjIndexed((group, key) => {
            return (
              !isEmpty(filterRamda(identity, map(meetsCriteria, group))) && (
                <MappedList
                  key={key}
                  cta={
                    key === firstKey && (
                      <Button.Contribute
                        href='https://github.com/aws-amplify/community/tree/master/content/events/README.md'
                        children='Host an Event'
                      />
                    )
                  }
                  heading={<Text h2 className='list-heading' children={key} />}
                  columnCountByBreakpoint={{
                    [LAPTOP_BREAKPOINT]: 2,
                    [DESKTOP_BREAKPOINT]: 3,
                  }}
                  data={group}
                  mapping={n => mapNodeToProps(n, 'href')}
                  keyExtractor={extract.keyFromNode}
                  renderItem={p => <Card.Event {...p} />}
                  renderCondition={meetsCriteria}
                  additionalItemProps={{
                    className: 'three-dee actionable rounded',
                  }}
                />
              )
            );
          }, edgesByMonth),
        )
      }
    </filterContext.Consumer>
  );

  return (
    <>
      <Meta pageName='Events' />
      <filterContext.Provider {...{value}}>
        <Layout.SideMenu {...{header, menu, main}} />
      </filterContext.Provider>
    </>
  );
};