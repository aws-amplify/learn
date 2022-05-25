import {Meta, Layout, Nav} from '~/components';

export default () => {
  const main = <div>chat</div>;

  return (
    <>
      <Meta pageName='Chat' />
      <Layout.Basic header={<Nav />} {...{main}} />
    </>
  );
};
