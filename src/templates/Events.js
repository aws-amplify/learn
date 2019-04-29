import {graphql} from 'gatsby';
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
} from '~/components';
import {TABLET_BREAKPOINT, DESKTOP_BREAKPOINT} from '~/constants';
import {filter as filterContext} from '~/contexts';
import {
  values,
  mapObjIndexed,
  map,
  filter,
  identity,
  head,
  keys,
  split,
  join,
  isEmpty,
} from 'ramda';

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
const PLATFORMS_PATH = ['node', 'frontmatter', 'platforms'];
const DATE_PATH = ['node', 'fields', 'date'];

export default props => {
  track.internalPageView(props);

  const value = createFilterContextValue(
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
    {
      key: 'platforms',
      path: PLATFORMS_PATH,
      meetsCriterion: (field, criterion) =>
        !criterion || criterion.every(c => field.includes(c)),
    },
  );

  const edges = extract.fromPath(['data', 'allMarkdownRemark', 'edges'], props);
  const noneUpcoming = isEmpty(edges);
  const platformOptions =
    !noneUpcoming && getFilterOptions(PLATFORMS_PATH, edges);
  const menu = !noneUpcoming && (
    <Filter
      filters={[
        {key: 'dates', name: 'Date Range', dateRange: true},
        {key: 'platforms', name: 'Platforms', options: platformOptions},
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
              !isEmpty(filter(identity, map(meetsCriteria, group))) && (
                <MappedList
                  key={key}
                  cta={
                    key === firstKey && (
                      <Button.Contribute href='https://aws-amplify.github.io'>
                        Add an Event
                      </Button.Contribute>
                    )
                  }
                  heading={<Text h2 className='list-heading' children={key} />}
                  columnCountByBreakpoint={{
                    [TABLET_BREAKPOINT]: 2,
                    [DESKTOP_BREAKPOINT]: 3,
                  }}
                  noItems={<p>no items to display</p>}
                  data={group}
                  mapping={mapNodeToProps}
                  keyExtractor={extract.keyFromNode}
                  renderItem={p => <Card.Event {...p} />}
                  renderCondition={meetsCriteria}
                  additionalProps={{className: 'on-events-page'}}
                />
              )
            );
          }, edgesByMonth),
        )
      }
    </filterContext.Consumer>
  );

  return (
    <filterContext.Provider {...{value}}>
      <Layout.SideMenu {...{header, menu, main}} />
    </filterContext.Provider>
  );
};
