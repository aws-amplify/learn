const path = require('path');
const fs = require('fs');
const R = require('ramda');
const {parse} = require('parse5');
const wrap = require('./wrap');
const {Pinpoint} = require('aws-sdk');

const pinpoint = new Pinpoint();
const ApplicationId = '75ab168484d64fdfb28c84ba1fb23523';

const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

const today_is_monday = today.getDay() === 3;

if (today_is_monday) {
  (async () => {
    const {CampaignsResponse = null} = await pinpoint
      .getCampaigns({
        ApplicationId,
      })
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
          const newsletter_years_path = path.join(
            __dirname,
            '../../public/newsletters',
          );

          const get_largest_number = s =>
            Math.max(
              ...R.filter(R.complement(R.equals(NaN)), R.map(parseInt, s)),
            );

          const newsletter_years_dirs = fs.readdirSync(newsletter_years_path);
          const newsletter_year = get_largest_number(newsletter_years_dirs);
          const newsletter_year_path = path.join(
            newsletter_years_path,
            String(newsletter_year),
          );
          const newsletter_year_dirs = fs.readdirSync(newsletter_year_path);
          const newsletter_week = get_largest_number(newsletter_year_dirs);
          const newsletter_path = path.join(
            newsletter_year_path,
            String(newsletter_week),
            'index.html',
          );
          const newsletter_contents = fs.readFileSync(newsletter_path, 'utf-8');
          const parsed = parse(newsletter_contents, {scriptingEnabled: false});

          const safe_escapable_traverse = (node, callback) => {
            const queue = [node];
            while (queue.length !== 0) {
              const current = queue.pop();

              if (R.is(Object, current)) {
                for (const i in current) {
                  if (Object.prototype.hasOwnProperty.call(current, i)) {
                    const result = callback(current[i]);
                    if (result) return result;
                    if (i !== 'parentNode') queue.unshift(current[i]);
                  }
                }
              }
            }
          };

          let date_range;
          const roots = {
            events: null,
            posts: null,
          };

          safe_escapable_traverse(parsed, node => {
            if (node.attrs) {
              for (const attr of node.attrs) {
                if (attr.name === 'data-date-range') date_range = attr.value;
                if (attr.name === 'data-visitor-cue') roots[attr.value] = node;
                if (date_range && roots.events && roots.posts) return;
              }
            }
          });

          const data = {
            events: [],
            posts: [],
          };

          R.mapObjIndexed((root, category) => {
            safe_escapable_traverse(root, node => {
              if (node.attrs) {
                for (const attr of node.attrs) {
                  if (attr.name === 'data-visitor-target') {
                    const entry = Object.assign(
                      {},
                      ...node.attrs.map(({name, value}) => ({[name]: value})),
                    );
                    delete entry.class;
                    delete entry['data-visitor-target'];
                    data[category].push(entry);
                  }
                }
              }
            });
          }, roots);

          const HtmlBody = wrap(
            newsletter_year,
            newsletter_week,
            date_range,
            data,
          );
          const campaign_title = `Weekly Newsletter (week ${String(
            newsletter_week,
          )}, year ${String(newsletter_year)})`;
          const in30Seconds = new Date();
          in30Seconds.setSeconds(in30Seconds.getSeconds() + 30);
          pinpoint
            .createCampaign({
              ApplicationId,
              WriteCampaignRequest: {
                Description: campaign_title,
                MessageConfiguration: {
                  EmailMessage: {
                    Title: 'Amplify Weekly Newsletter',
                    FromAddress: 'harrysolovay@gmail.com',
                    HtmlBody,
                  },
                },
                Name: campaign_title,
                Schedule: {
                  StartTime: in30Seconds.toISOString(),
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
