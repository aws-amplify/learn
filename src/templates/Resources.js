import {
  Layout,
  Nav
} from '~/components';
import React from 'react'
import {css} from '@emotion/core';

const header = <Nav />;

export default () => {
  const main = (
    <div>
      <div css={container} class='items'>
        <div css={titleContainer}>
          <h1 class="text list-heading">Resources</h1>
          <p css={baseTest}>Here you will find resources like slide decks and workshops that will help you if you are interested in presenting a talk or a workshop at a conference or event. The workshops are also stand-alone, so you can take these and use them on your own, at your own pace.</p>
        </div>
        <div>
          <h2 class="text list-heading">Workshops</h2>
          <div css={listContainer}>
            {
              workshops.map((workshop, index) => (
                <div css={cardContainer}>
                  <p css={itemTitle}>{workshop.name}</p>
                  <p css={itemDescription}>{workshop.description}</p>
                  <a css={itemLink} href={workshop.link} target="_blank">View workshop</a>
                  <div css={tagContainer}>
                    {
                      workshop.tags.map((tag, i) => <p css={itemTag}>#{tag}</p>)
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div>
          <h2 class="text list-heading">Slide Decks</h2>
          <div css={listContainer}>
            {
              slideDecks.map((slideDeck, index) => (
                <div css={cardContainer}>
                  <p css={itemTitle}>{slideDeck.name}</p>
                  <p css={itemDescription}>{slideDeck.description}</p>
                  <a css={itemLink} href={slideDeck.downloadPath} download>Download deck</a>
                  <div css={tagContainer}>
                    {
                      slideDeck.tags.map((tag, i) => <p css={itemTag}>#{tag}</p>)
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Meta pageName='Resources' />
      <Layout.Basic {...{header, main}} />
    </>
  );
};

const container = css`
  padding: 40px 80px;
  width: 100vw;
  @media (max-width: 640px) {
    padding: 30px 20px;
    width: 100vw;
  }
`
const titleContainer = css`
  padding-bottom: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
`
const baseTest = css`
  font-size: 18px;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`
const cardContainer = css`
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 4px solid #cccccc;
  border-right: 4px solid #cccccc;
`
const listContainer = css`
  padding: 20px 0px;
`
const itemTitle = css`
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 8px;
`
const itemDescription = css`
 font-size: 16px;
 margin-bottom: 8px;
 color: rgba(0, 0, 0, .7);
`
const itemLink = css`
  font-size: 16px;
  font-weight: 400;
  color: #ff9900 !important;
  margin-bottom: 8px;
  display: inline-block;
  &:hover {
    opacity: .8;
  }
`
const itemTag = css`
  font-size: 14px;
  color: #ccc;
  margin-right: 13px;
  font-weight: 400;
`
const tagContainer = css`
  display: flex;
  flex-wrap: wrap;
`

const workshops = [
{
  name: "Building your first Fullstack Serverless App with Vue and AWS Amplify",
  description: "In this workshop you'll learn how to build cloud-enabled web applications with Vue & AWS Amplify.",
  link: "https://github.com/gsans/fullstack-serverless-amplify-vue",
  tags: ['AppSync', 'GraphQL', 'Vue', 'Authentication', 'Amazon Cognito', 'Predictions', 'ML', 'AI', 'Hosting']
},
{
  name: "Build a Photo-Sharing Web App with AWS Amplify and AWS AppSync",
  description: "In this workshop you'll learn how to build cloud-enabled mobile applications with React Native & AWS Amplify.",
  link: 'https://amplify-workshop.go-aws.com/',
  tags: ['GraphQL', 'Storage', 'API', 'React', 'Authentication', 'Amazon Cognito']
},
{
  name: "Building Cloud-enabled Mobile Applications with React Native & AWS Amplify",
  description: "In this workshop you'll learn how to build cloud-enabled mobile applications with React Native & AWS Amplify.",
  link: 'https://github.com/dabit3/aws-amplify-workshop-react-native',
  tags: ['React', 'React Native', 'API', 'GraphQL', 'AppSync', 'Storage', 'Authentication', 'Amazon Cognito']
},
{
  name: "Building real-time offline-ready Applications with React, GraphQL & AWS AppSync",
  description: "In this workshop we'll learn how to build cloud-enabled web applications with React, AppSync, GraphQL, & AWS Amplify.",
  link: 'https://github.com/dabit3/aws-appsync-react-workshop',
  tags: ['GraphQL', 'Storage', 'API', 'React', 'Hosting', 'AppSync']
},
{
  name: "Building your first Fullstack Serverless Application with Angular and AWS Amplify",
  description: "In this workshop you'll learn how to build cloud-enabled web applications with Angular & AWS Amplify.",
  link: "https://github.com/gsans/fullstack-serverless-amplify-angular",
  tags: ['AppSync', 'GraphQL', 'Angular', 'Authentication', 'Amazon Cognito', 'Predictions', 'ML', 'AI', 'Hosting']
},
{
  name: "Cloud-enabled Amplify DataStore workshop using Angular",
  description: "In this workshop we'll learn how to use Amplify DataStore to create Chatty a single room realtime multi-user chat app using Angular 9 & AWS Amplify.",
  link: "https://github.com/gsans/amplify-datastore-chatty-angular",
  tags: ['Amplify DataStore', 'AppSync', 'GraphQL', 'Authentication', 'Angular']
},
{
  name: "Cloud-enabled Amplify DataStore workshop using React",
  description: "In this workshop we'll learn how to use Amplify DataStore to create Chatty a single room realtime multi-user chat app using React & AWS Amplify.",
  link: "https://github.com/gsans/amplify-datastore-chatty-react",
  tags: ['Amplify DataStore', 'AppSync', 'GraphQL', 'Authentication', 'React']
}
]

const slideDecks = [
  {
    name: 'Storage - Secure File and Image Hosting with Amazon S3',
    description: 'An introduction to the Storage category for AWS Amplify, both the client APIs as well as how to get up and running from the CLI', downloadPath: '../../slideDecks/storage.pptx',
    tags: ['Storage', 'Amazon S3']
  },
  {
    name: 'Auth - Implementing Authentication with AWS Amplify',
    description: 'A deep dive into the Auth category, mainly focusing on general web implementations.',
    downloadPath: '../../slideDecks/auth.pptx',
    tags: ['Authentication', 'Amazon Cognito']
  },
  {
    name: 'Introduction to Mobile Development on AWS',
    description: 'An overview of the current options and tools for mobile development from AWS Mobile and AWS Amplify.',
    downloadPath: '../../slideDecks/mobile_intro.pptx',
    tags: ['Mobile', 'iOS', 'Android']
  },
  {
    name: 'Hosting - Deploying Your Application with CI & CD',
    description: 'A deep dive into the AWS Amplify Console hosting platform.',
    downloadPath: '../../slideDecks/console.pptx',
    tags: ['Hosting', 'Amplify Console', 'CI / CD']
  },
  {
    name: 'Predictions - Adding Machine Learning to Your Apps with Zero Back End Code',
    description: 'How to integrate AWS managed machine learning services on your web or mobile app using AWS Amplify.',
    downloadPath: '../../slideDecks/predictions.pptx',
    tags: ['Predictions', 'ML', 'AI']
  },
  {
    name: 'The Future of Real-time | Offline | Data',
    description: 'An in depth look into Amplify DataStore, an persistent on-device storage repository and managed API service.',
    downloadPath: '../../slideDecks/futureofrtod.key',
    tags: ['GraphQL', 'AppSync', 'API', 'DataStore']
  }
]