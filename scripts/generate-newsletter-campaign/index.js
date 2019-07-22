const {configStyleValidator, renderEmail} = require('react-html-email');
require('@babel/register')({presets: ['@babel/preset-env', 'react-app']});
const {Pinpoint} = require('aws-sdk');
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

const pinpoint = new Pinpoint();
const ApplicationId = '75ab168484d64fdfb28c84ba1fb23523';

const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

const today_is_monday = today.getDay() === 0;

if (today_is_monday) {
  (async () => {
    const {CampaignsResponse = null} = await pinpoint
      .getCampaigns({ApplicationId})
      .promise();

    if (CampaignsResponse) {
      const {Item: campaigns = null} = CampaignsResponse;

      if (campaigns) {
        const already_created = campaigns.some(c => {
          const {CreationDate} = c;
          const comparison = new Date(CreationDate);
          const comparison_day = comparison.getDate();
          const comparison_month = comparison.getMonth();
          const comparison_year = comparison.getFullYear();
          return (
            day === comparison_day &&
            month === comparison_month &&
            year === comparison_year
          );
        });

        if (!already_created) {
          const data = gather_data();
          const email = Email(data);
          const contents = renderEmail(email);
          const {week: newsletter_week, year: newsletter_year} = data;
          const campaign_title = `Weekly Newsletter (week ${String(
            newsletter_week,
          )}, year ${String(newsletter_year)})`;
          pinpoint
            .createCampaign({
              ApplicationId,
              WriteCampaignRequest: {
                Description: campaign_title,
                MessageConfiguration: {
                  EmailMessage: {
                    Title: 'Amplify Weekly Newsletter',
                    FromAddress: 'harrysolovay@gmail.com',
                    HtmlBody: contents,
                  },
                },
                Name: campaign_title,
                Schedule: {
                  StartTime: new Date().toISOString(),
                  Frequency: 'ONCE',
                },
                SegmentId: '3ea09cde6bab4d49835c19236b7c1aab',
              },
            })
            .promise();
        }
      }
    }
  })();
}
