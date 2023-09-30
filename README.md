# Amplify Learn

This is the repo for https://amplify.aws/learn, which is a site containing courses on AWS Amplify created by the Developer Advocacy team working on the product.

The site is hosted on [Amplify Hosting](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html) and built using these technologies:

- [Amplify Studio](https://docs.amplify.aws/console/)
- [Amplify UI](https://ui.docs.amplify.aws/)
- [Next.js](https://nextjs.org/)

## Prerequisites:

- Node.js 14.x or later
- Amplify CLI
  - Install it by running this command in terminal: `npm install -g @aws-amplify/cli`
- An AWS Account

## Getting Started

1. Fork the repo: https://github.com/aws-amplify/learn/fork and clone it.
2. Navigate to the root directory of your local clone in your terminal.
3. Run `npm install`
4. Run `amplify init`
   - This will initialize an Amplify app within your local directory.
   - Follow the steps in the terminal to set up your project.
   - After completing these steps, Amplify CLI will set up the cloud resources needed for the Learn repo.
5. If you want to push up these changes to AWS, run `amplify push`
   - This will create AWS resources on your account required by the Learn app. More details in the [Amplify Backend Environment](#amplify-backend-environment) section.
6. Run `npm run dev`
7. Navigate to `localhost:3000/learn` to view the site in your dev environment.

## Amplify Backend Environment

The Learn app uses Amplify to create a backend environment consisting of these services:

- AWS AppSync
- AWS DynamoDB

When you run the terminal command `amplify push` and follow the prompts, Amplify CLI pushes the configurations from the Learn app to create these resources using AWS CloudFormation.

### Modifying Data for the Learn App

The Learn app uses the [CMS from Amplify Studio](https://docs.amplify.aws/console/data/content-management/) to manage data for the app. To set this up, follow these steps:

1. First, make sure the backend environment has been pushed up to the cloud.
2. Run `amplify console` in terminal and choose `AWS console` as your option.
   - This action should open the AWS Amplify Console in your web browser.
3. In the left navigation menu, click on "Amplify Studio settings".
4. Enable Amplify Studio by toggling it on.
5. Once it's done setting up, go back to your terminal and run `amplify console`.
6. Choose `Amplify Studio` and now a browser window should open up for Amplify Studio
7. Now you can use Amplify Studio to modify the data models and create content.

## Learn More

To learn more about AWS Amplify, take a look at the following resources:

- [AWS Amplify Documentation](https://docs.amplify.aws/) - Learn about Amplify features such as CLI and the different libraries.
