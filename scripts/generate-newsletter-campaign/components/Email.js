const React = require('react');
const {Email, Item, Span, A, Box} = require('react-html-email');
const Event = require('./Event');
const Post = require('./Post');

module.exports = ({date_range, week, year, events, posts}) => {
  return (
    <Email
      width='100%'
      style={{width: '100%', maxWidth: '600px'}}
      title={`Amplify Weekly Newsletter, Week ${week} of ${year}`}
      headCSS={`
        body {
          background-color: rgb(242, 242, 242) !important;
        }

        * {
          box-sizing: border-box;
        }

        .column {
          width: 100% !important;
        }

        @media only screen and (min-width: 600px) {
          .column {
            width: 50% !important;
          }
        }
      `}
    >
      <Item align='left' style={{padding: '36px 8px 0px 8px'}}>
        <Span fontSize={32} lineHeight={48} fontWeight={700}>
          {`Amplify Newsletter, Week ${week} (${year})`}
        </Span>
      </Item>
      <Item align='left' style={{padding: '10px 8px 0px 8px'}}>
        <Span fontSize={20} lineHeight={30}>
          {date_range}
        </Span>
      </Item>
      <Item align='left' style={{padding: '16px 8px 0px 8px'}}>
        <Span fontSize={18} lineHeight={27} fontWeight={100}>
          {`Welcome to Week 18 of the AWS Amplify newsletter - a weekly roundup of the articles, podcasts, and videos that are relevant to developers who utilize the AWS platform for building great mobile and modern web applications.`}
        </Span>
      </Item>
      <Item align='center'>
        {events.length && (
          <Box align='center'>
            <Item
              className='events section'
              align='left'
              style={{
                paddingTop: '16px',
                paddingBottom: '8px',
              }}
            >
              <Item align='left' style={{padding: '0px 8px 16px 8px'}}>
                <Span fontWeight={700} fontSize={22}>
                  Upcoming Events
                </Span>
              </Item>
              <Item>
                <Box>
                  {events.map(e => (
                    <Event {...e} />
                  ))}
                </Box>
              </Item>
            </Item>
          </Box>
        )}

        {posts.length && (
          <Box align='center'>
            <Item
              align='left'
              style={{paddingTop: '16px', maxWidth: '600px'}}
              className='posts section'
            >
              <Item
                align='left'
                style={{
                  padding: '12px 8px 16px 8px',
                }}
              >
                <Span fontWeight={700} fontSize={22}>
                  Latest Posts
                </Span>
              </Item>
              <Item>
                <Box>
                  {posts.map(p => (
                    <Post {...p} />
                  ))}
                </Box>
              </Item>
            </Item>
          </Box>
        )}
      </Item>

      <Box align='center'>
        <Item style={{maxWidth: '600px', padding: '16px'}}>
          <Span fontSize={12} lineHeight={18} color='#828282'>
            The Amplify Community is supported by Amazon Web Services © 2019,
            Amazon Web Services, Inc. or its affiliates. All rights reserved.
            View our Site Terms and Privacy Policy.
          </Span>
        </Item>
      </Box>

      <Box align='center'>
        <Item
          style={{
            maxWidth: '600px',
            padding: '16px',
            borderTop: '1px solid #aaa',
          }}
        >
          <A
            textDecoration='none'
            href='https://amplify.aws/community/newsletter/unsubscribe'
          >
            <Span color='#4c5f88'>Unsubscribe from this newsletter</Span>
          </A>
        </Item>
      </Box>
    </Email>
  );
};
