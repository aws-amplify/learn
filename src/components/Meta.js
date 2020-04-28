import {Helmet} from 'react-helmet';
import ogpSrc from '~/assets/images/ogp.jpg';

export default ({pageName}) => {
  return (
    <Helmet
      title={`Amplify Community - ${pageName}`}
      defaultTitle='Amplify Community'
      defer={false}
      meta={[
        {property: 'mobile-web-app-capable', content: 'yes'},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'Amplify Community'},
        {property: 'og:title', content: 'Amplify Community'},
        {
          property: 'og:description',
          content:
            'A place to share projects, events, articles and other resources',
        },
        {property: 'og:image', content: ogpSrc},
        {property: 'og:url', content: 'https://amplify.aws/community/'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: 'https://twitter.com/AWSAmplify'},
        {name: 'twitter:title', content: 'Amplify Community'},
        {
          name: 'twitter:description',
          content:
            'A place to share projects, events, articles and other resources',
        },
        {name: 'twitter:image', content: ogpSrc},
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
