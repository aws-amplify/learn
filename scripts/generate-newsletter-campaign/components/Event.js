const path = require('path');
const React = require('react');
const {Item, Span, A, Image, Box} = require('react-html-email');

module.exports = ({title, city, date, to, avatar}) => {
  return (
    <Box className='column event'>
      <Item style={{padding: '8px'}}>
        <Box width='100%'>
          <Item
            style={{
              padding: '8px',
              backgroundColor: '#fff',
              boxShadow: 'rgb(204, 204, 204) 2px 2px 0px 2px',
              borderRadius: '5px',
            }}
          >
            <Box width='100%'>
              <Item align='center' style={{padding: '16px;'}}>
                <Image
                  width={50}
                  height={50}
                  style={{
                    borderRadius: '50%',
                    border: '1px solid rgb(233, 233, 233)',
                  }}
                  src={path.join('https://amplify.aws', avatar)}
                />
              </Item>
              <Item align='center'>
                <Span fontSize={16} lineHeight={24}>
                  {title}
                </Span>
              </Item>
              <Item align='center' style={{paddingTop: '8px'}}>
                <Span fontSize={13} color='rgb(162, 162, 162)'>
                  <b>{date}</b>
                  {` in `}
                  <b>{city}</b>
                </Span>
              </Item>
              <Item
                align='center'
                style={{paddingTop: '24px', paddingBottom: '24px'}}
              >
                <A
                  href={path.join('https://amplify.aws/community', to)}
                  textDecoration='none'
                >
                  <Span
                    style={{
                      borderRadius: '4px',
                      border: '1px solid #4c5f88',
                      padding: '8px',
                    }}
                    color='#4c5f88'
                  >
                    See event details
                  </Span>
                </A>
              </Item>
            </Box>
          </Item>
        </Box>
      </Item>
    </Box>
  );
};
