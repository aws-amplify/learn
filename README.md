# Amplify Learn

This is the repo for https://amplify.aws/learn, which is a site containing courses on AWS Amplify created by the Developer Advocacy team working on the product.

The site is hosted on [Amplify Hosting](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html) and built using these technologies:

- [Amplify Studio](https://docs.amplify.aws/console/)
- [Amplify UI](https://ui.docs.amplify.aws/)
- [Next.js](https://nextjs.org/)

## Prerequisites

- Node.js 12.x or later
- Amplify CLI
  - Install it by running this command in terminal: `npm install -g @aws-amplify/cli`
- An AWS Account

## Getting Started

1. Fork the repo: https://github.com/aws-amplify/learn/fork and clone it.
2. In your terminal, navigate to the _root_ of your local clone.
3. Run `npm install`
4. Run `amplify init`
   - This will initialize an Amplify app within your local directory.
   - Follow the steps in the terminal to set up your project
   - After completing these steps, Amplify CLI will set up the cloud resources needed for the Learn repo
5. If you want to push up these changes to AWS, run `amplify push`
   - Note, to set up the data for the app you will need to run `amplify push` to set up the cloud resources. Then you can run `amplify console` in terminal to visit Amplify Studio where you can add data using the CMS and modify the data models.
6. Run `npm run dev`
7. Navigate to `localhost:3000/learn` to view the site in your dev environment

## Learn More

To learn more about AWS Amplify, take a look at the following resources:

- [AWS Amplify Documentation](https://docs.amplify.aws/) - learn about Amplify features such as CLI and the different libraries.
