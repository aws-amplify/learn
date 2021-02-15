import {track} from '~/utilities';

export default props => {
  const {href, redirect} = props;

  return (
    <a
      {...(redirect
        ? {}
        : {
            target: '_blank',
            rel: 'noopener noreferrer',
          })}
      onClick={() => track.externalPageView(href)}
      {...props}
    />
  );
};
