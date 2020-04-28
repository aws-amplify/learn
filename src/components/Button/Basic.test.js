/* eslint no-undef: 0 */
import renderer from 'react-test-renderer';
import Basic from './Basic';

test('renders properly', () => {
  const component = renderer.create(<Basic>Hello</Basic>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
