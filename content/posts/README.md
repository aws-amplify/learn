# Add a Post

A post is an external piece of content that you have written about your experience with Amplify. You could have written this post on Medium, Dev.to, or your own personal blog. Adding your post to the community site will allow other developers looking for content to find it using filters. 

1. Fork this repo.
2. If you haven't already, add yourself as an [Amplify contributor](https://github.com/aws-amplify/community/blob/master/content/contributors/README.md).
3. Create a new folder in the repo for your post `/contents/posts/YYYY-MM-DD-desc` 
4. Add an `index.md` to the folder as follows:

```
---
title: How to Build Cloud-Powered Mobile Apps with Expo & AWS Amplify
description: 'In this tutorial, we’ll walk through how to create a cross-platform Expo app with features like user sign-in, AWS Lambda functions, an AWS AppSync GraphQL API, analytics, & storage.'
banner: './banner.jpeg'
authorIds:
  - nader-dabit
href: https://blog.expo.io/how-to-build-cloud-powered-mobile-apps-with-expo-aws-amplify-2fddc898f9a2
platforms:
  - React Native
categories:
  - API (GraphQL)
  - Authentication
  - Functions
---
```
6. Upload an image at the root of your post folder (e.g. /contents/events/YYYY-MM-DD-desc/avatar.png) 

7. Submit a PR.

After we review the PR, we will add your post to our list of posts.
