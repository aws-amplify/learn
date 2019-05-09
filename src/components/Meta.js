import {Helmet} from 'react-helmet';

export default ({pageName}) => {
  return (
    <Helmet
      title={`Amplify Community - ${pageName}`}
      defaultTitle='Amplify Community'
      defer={false}
      meta={[
        {property: 'og:site_name', content: 'Amplify Community'},
        {name: 'twitter:site', content: 'https://twitter.com/AWSAmplify'},
        {name: 'description', content: `AWS Amplify Community –– ${pageName}`},
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
        {
          property: 'description',
          content:
            'A place to share projects, events, articles and other resources',
        },
      ]}
    />
  );
};
