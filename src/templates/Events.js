import {graphql} from 'gatsby';
import {
  mapNodeToProps,
  extract,
  groupEventEdges,
  createFilterContextValue,
  getFilterOptions,
  track,
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

export default props => {
  track.internalPageView(props);

  const value = createFilterContextValue({
    key: 'platforms',
    path: PLATFORMS_PATH,
    meetsCriterion: (field, criterion) =>
      !criterion || criterion.every(c => field.includes(c)),
  });

  const edges = extract.fromPath(['data', 'allMarkdownRemark', 'edges'], props);
  const noneUpcoming = isEmpty(edges);
  const platformOptions =
    !noneUpcoming && getFilterOptions(PLATFORMS_PATH, edges);
  const menu = !noneUpcoming && (
    <Filter filters={[{key: 'platforms', options: platformOptions}]} />
  );

  const edgesByMonth = groupEventEdges(edges);
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
