const {configStyleValidator, renderEmail} = require('react-html-email');
require('@babel/register')({presets: ['@babel/preset-env', 'react-app']});
const {Pinpoint} = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const Email = require('./components/Email');
const gather_data = require('./gather_data');
const {execSync} = require('child_process');

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

// const pinpoint = new Pinpoint();
// const ApplicationId = '75ab168484d64fdfb28c84ba1fb23523';

const d = new Date();
const today_is_monday = d.getDay() === 2;

if (today_is_monday) {
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const key = ['campaign_created_on', year, month, day].map(String).join('x');

  try {
    const get_envCache_response = execSync(`envCache --get ${key}`, {
      stdio: 'inherit',
    });
    console.log('get_envCache_response', get_envCache_response);
  } catch (get_err) {
    console.log('retrieval error: ', get_err);

    try {
      const set_envCache_response = execSync(`envCache --set ${key} 1`, {
        stdio: 'inherit',
      });
      console.log('set_envCache_response', set_envCache_response);
    } catch (set_err) {
      console.log('setting error: ', set_err);
    }
  }

  process.exit(1);

  // (async () => {
  //   const {CampaignsResponse = null} = await pinpoint
  //     .getCampaigns({ApplicationId})
  //     .promise();

  //   if (CampaignsResponse) {
  //     const {Item: campaigns = null} = CampaignsResponse;

  //     if (campaigns) {
  //       const already_created = campaigns.some(c => {
  //         const {CreationDate} = c;
  //         const comparison = new Date(CreationDate);
  //         const comparison_day = comparison.getDate();
  //         const comparison_month = comparison.getMonth();
  //         const comparison_year = comparison.getFullYear();
  //         return (
  //           day === comparison_day &&
  //           month === comparison_month &&
  //           year === comparison_year
  //         );
  //       });

  //       if (!already_created) {
  //         const data = gather_data();
  //         const email = Email(data);
  //         const contents = renderEmail(email);
  //         const {week: newsletter_week, year: newsletter_year} = data;
  //         const campaign_title = `Weekly Newsletter (week ${String(
  //           newsletter_week,
  //         )}, year ${String(newsletter_year)})`;
  //         pinpoint
  //           .createCampaign({
  //             ApplicationId,
  //             WriteCampaignRequest: {
  //               Description: campaign_title,
  //               MessageConfiguration: {
  //                 EmailMessage: {
  //                   Title: 'Amplify Weekly Newsletter',
  //                   FromAddress: 'harrysolovay@gmail.com',
  //                   HtmlBody: contents,
  //                 },
  //               },
  //               Name: campaign_title,
  //               Schedule: {
  //                 StartTime: new Date().toISOString(),
  //                 Frequency: 'ONCE',
  //               },
  //               SegmentId: '3ea09cde6bab4d49835c19236b7c1aab',
  //             },
  //           })
  //           .promise();
  //       }
  //     }
  //   }
  // })();
}
