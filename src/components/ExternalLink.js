import {track} from '~/utilities';

export default props => {
  const {href} = props;

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      onClick={() => track.externalPageView(href)}
      {...props}
    />
  );
};
