import {graphql, Link} from 'gatsby';
import {track, extract, mapNodeToProps} from '~/utilities';
import Img from 'gatsby-image';
import {Text, Meta, Layout, Nav, Button} from '~/components';
import {css} from '@emotion/core';
import {ORANGE_PEEL_COLOR, GRAY_COLOR, SILVER_CHALICE_COLOR} from '~/constants';
import {join, isEmpty, complement, map} from 'ramda';

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      ...Event
      frontmatter {
        avatar {
          ...AvatarSmall
        }
      }
      fields {
        attendants {
          frontmatter {
            avatar {
              ...AvatarSmall
            }
          }
        }
      }
    }
  }
`;

const styles = css`
  > div {
    padding: 0px 16px;

    > div {
      background-color: #fff;
      border-radius: 4px;
      display: flex;
      flex-direction: row;
      margin-top: 48px;

      > .details {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 32px;

        h2 {
          font-size: 2rem;
          line-height: 3rem;
          font-weight: 400;
        }

        .logistics {
          font-size: 1.25rem;
          line-height: 1.875rem;

          > * {
            display: inline;
          }

          > :nth-child(odd) {
            color: ${GRAY_COLOR};
          }

          > :nth-child(even) {
            color: ${SILVER_CHALICE_COLOR};
          }
        }

        p {
          margin-top: 4px;
          font-size: 1.125rem;
          line-height: 1.6875rem;
        }

        .button-container {
          margin-top: 14px;
          display: flex;
          flex: 1;
          flex-direction: row;
          justify-content: flex-end;
          align-items: flex-end;

          .button {
            background-color: ${ORANGE_PEEL_COLOR};
            color: #fff;
          }
        }
      }

      > .attendants {
        border-left: 1px solid #e9e9e9;

        h3 {
          text-align: center;
          border-bottom: 1px solid #e9e9e9;
          font-weight: 300;
          background-color: rgba(250, 250, 250, 1);
          padding: 8px;
        }

        > div {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 16px;

          > .attendant {
            display: flex;
            flex-direction: row;
            padding: 16px;

            .avatar > * {
              border-radius: 50%;
              overflow: hidden;
              border: 2px solid #fff;
              box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.25);
            }

            .text-container {
              display: flex;
              flex-direction: column;
              margin-right: 16px;

              h5 {
                font-size: 1rem;
                line-height: 1.5rem;
                font-weight: 300;
              }

              h6 {
                font-size: 0.875rem;
                line-height: 1.4125rem;
                font-weight: 200;
              }
            }
          }
        }
      }
    }
  }
`;

export default props => {
  track.internalPageView(props);

  const {html, fields, frontmatter} = extract.fromPath(
    ['data', 'markdownRemark'],
    props,
  );

  const {date} = fields;
  const attendants = map(mapNodeToProps, fields.attendants);
  const {title, description, city, country, href} = frontmatter;

  const main = (
    <div css={styles}>
      <div>
        <div className='three-dee'>
          <div className='details'>
            <Text h2>{title}</Text>
            <div className='logistics'>
              <Text h4 children={date} />
              <Text h4 children=' in ' />
              <Text h4 children={join(', ', [city, country])} />
            </div>
            <Text p>{description}</Text>
            {href && (
              <div className='button-container'>
                <Button.Basic
                  className='three-dee actionable rounded'
                  {...{href}}
                >
                  <Text span children='View event Page' />
                </Button.Basic>
              </div>
            )}
          </div>
          <div className='attendants'>
            <h3>Attendants</h3>
            <div>
              {map(
                ({avatar, github, key, name, to}) => (
                  <Link {...{to, key}} className='attendant'>
                    <div className='text-container'>
                      <Text h5 children={name} />
                      <Text h6 children={`@${github}`} />
                    </div>
                    <div className='avatar'>
                      <Img {...avatar} />
                    </div>
                  </Link>
                ),
                attendants,
              )}
            </div>
          </div>
        </div>
        {complement(isEmpty)(html) && (
          <div className='three-dee' dangerouslySetInnerHTML={{__html: html}} />
        )}
      </div>
    </div>
  );

  return (
    <>
      <Meta pageName='Chat' />
      <Layout.Basic header={<Nav />} {...{main}} />
    </>
  );
};
