const path = require('path');
const React = require('react');
const {Item, Span, A, Box} = require('react-html-email');

module.exports = ({title, description, href}) => {
  return (
    <Box
      width='100%'
      style={{maxWidth: '600px', float: 'none'}}
      className='post'
    >
      <Item style={{padding: '10px'}}>
        <Box width='100%'>
          <Item
            style={{
              padding: '16px',
              backgroundColor: 'rgb(75, 97, 137)',
              borderRadius: '5px',
              boxShadow: 'rgb(204, 204, 204) 2px 2px 0px 2px',
            }}
          >
            <Box width='100%'>
              <Item align='left'>
                <Span
                  color='#fff'
                  lineHeight={30}
                  fontSize={20}
                  fontWeight={700}
                >
                  {title}
                </Span>
              </Item>
              <Item align='left'>
                <Span
                  color='#fff'
                  fontSize={16}
                  lineHeight={24}
                  fontWeight={100}
                >
                  {description}
                </Span>
              </Item>
              <Item
                align='center'
                style={{
                  paddingTop: '24px',
                  paddingBottom: '8px',
                }}
              >
                <A {...{href}} textDecoration='none'>
                  <Span
                    color='#fff'
                    style={{
                      borderRadius: '4px',
                      border: '1px solid #fff',
                      padding: '8px',
                    }}
                  >
                    Read more
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
