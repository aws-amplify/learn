const section = require('./section');
const event = require('./event');
const post = require('./post');
const global_styles = require('./global_styles');

module.exports = (year, week, date_range, data) => {
  const {events = false, posts = false} = data;
  const eventsHTML = events
    ? section('Upcoming Events', events.map(event).join('\n'))
    : '';
  const postsHTML = posts
    ? section('Latest Posts', posts.map(post).join('\n'))
    : '';
  const body = eventsHTML + postsHTML;
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Amplify Weekly Newsletter</title>
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
        <style type="text/css">${global_styles}</style>
      </head>
      <body>
        <table style="width: 100%;">
          <tr>
            <td style="padding: 48px 24px;">
              <table style="width: 100%;">
                <tr>
                  <td style="text-align: center; font-size: 40px; line-height: 56px; color: #fff;">Amplify Weekly Newsletter</td>
                </tr>
                <tr>
                  <td style="text-align: center; font-size: 16px; color: #fff;">${date_range}</td>
                </tr>
                <tr>
                  <td style="padding-top: 12px; text-align: center; font-size: 16px; color: #fff;">The latest updates from the Amplify Community</td>
                </tr>
                <tr>
                  <td style="padding-top: 20px; text-align: center; font-size: 16px; color: #fff;"><a href='https://amplify.aws/community/newsletters/${year}/${week}'>or view online</a></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        ${body}
      
        <table cellpadding="24" style="width: 100%;">
          <tr>
            <td>
              <table style="width: 100%;">
                <tr>
                  <td style="text-align: center; font-size: 16px; color: #fff;">
                    <a href="https://amplify.aws/community/newsletters/unsubscribe">
                      Unsubscribe
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>    
    
      </body>
    </html>
  `;
};
