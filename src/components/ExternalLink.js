export default props => {
  const {redirect} = props;

  return (
    <a
      {...(redirect
        ? {}
        : {
            target: '_blank',
            rel: 'noopener noreferrer',
          })}
      {...props}
    />
  );
};
