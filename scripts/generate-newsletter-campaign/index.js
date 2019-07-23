const {configStyleValidator, renderEmail} = require('react-html-email');
require('@babel/register')({presets: ['@babel/preset-env', 'react-app']});
const {Pinpoint} = require('aws-sdk');
// const fs = require('fs');
// const path = require('path');
const {execSync} = require('child_process');
const Email = require('./components/Email');
const gather_data = require('./gather_data');

configStyleValidator({
  strict: true,
  warn: true,
  platforms: [
    'gmail',
    'gmail-android',
    'apple-mail',
    'apple-ios',
    'yahoo-mail',
    'outlook',
    'outlook-legacy',
    'outlook-web',
  ],
});

// (() => {
//   const destination = path.join(__dirname, 'contents.html');
//   const data = gather_data();
//   const email = Email(data);
//   const contents = renderEmail(email);
//   fs.writeFileSync(destination, contents, 'utf8');
//   process.exit(1);
// })();

const pinpoint = new Pinpoint();
const ApplicationId = '75ab168484d64fdfb28c84ba1fb23523';
const SegmentId = '3ea09cde6bab4d49835c19236b7c1aab';

const d = new Date();
const today_is_monday = d.getDay() === 2;

if (today_is_monday) {
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const key = [
    'campaignCreatedOn',
    [year, month, day].map(String).join('x'),
  ].join('');

  const from_cache = execSync(`envCache --get ${key}`)
    .toString()
    .trim();
  const already_created = !!(from_cache && Number(from_cache));
  console.log('already created: ', already_created);
  if (!already_created) {
    console.log('starting async anonymous fn');
    (async () => {
      const data = gather_data();
      const email = Email(data);
      const contents = renderEmail(email);
      console.log('rendered email: \n', contents);
      const {week: newsletter_week, year: newsletter_year} = data;
      const campaign_title = `Amplify Weekly Newsletter (week ${String(
        newsletter_week,
      )}, year ${String(newsletter_year)})`;
      console.log('about to hit try block');
      try {
        console.log('about to send request');
        const response = await pinpoint
          .createCampaign({
            ApplicationId,
            WriteCampaignRequest: {
              Description: campaign_title,
              MessageConfiguration: {
                EmailMessage: {
                  Title: campaign_title,
                  FromAddress: 'harrysolovay@gmail.com',
                  HtmlBody: contents,
                },
              },
              Name: campaign_title,
              Schedule: {
                StartTime: new Date().toISOString(),
                Frequency: 'ONCE',
              },
              SegmentId,
            },
          })
          .promise();
        console.log('create response: ', response);
        execSync(`envCache --set ${key} 1`, {
          stdio: 'inherit',
        });
        console.log('Pinpoint campaign creation success: ', response);
      } catch (e) {
        console.log('Pinpoint campaign creation error: ', e);
      }
    })();
    console.log('exit anonymous fn');
  }
}
