import {track} from '~/utilities';
import {Meta, Layout, Nav} from '~/components';

export default props => {
  track.internalPageView(props);

  const main = <div>chat</div>;

  return (
    <>
      <Meta pageName='Chat' />
      <Layout.Basic header={<Nav />} {...{main}} />
    </>
  );
};
