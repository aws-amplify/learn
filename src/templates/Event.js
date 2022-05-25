import {graphql, Link} from 'gatsby';
import Img from 'gatsby-image';
import {css} from '@emotion/core';
import {join, isEmpty, complement, map} from 'ramda';
import {useEffect} from 'react';
import {
  ORANGE_PEEL_COLOR,
  GRAY_COLOR,
  SILVER_CHALICE_COLOR,
  mq,
} from '~/constants';
import {Text, Meta, Layout, Nav, Button} from '~/components';
import {track, extract, mapNodeToProps} from '~/utilities';

export const pageQuery = graphql`
  query ($slug: String!) {
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
    padding: 0 1rem;

    > div {
      background-color: #fff;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      margin-top: 3rem;

      ${mq.tablet} {
        flex-direction: row;
      }

      > .details {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 2rem;

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
          margin-top: 0.375rem;
          font-size: 1.125rem;
          line-height: 1.6875rem;
        }

        .button-container {
          margin-top: 0.9875rem;
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
        padding: 1rem 0px;
        background: linear-gradient(rgb(245, 245, 245), #fff);

        ${mq.tablet} {
          border-left: 1px solid #e9e9e9;
        }

        h3 {
          text-align: left;
          font-weight: 300;
          padding: 1rem 1.5rem;
          font-size: 1.25rem;
          line-height: 1.875rem;

          ${mq.tablet} {
            border-top-width: 0px;
          }
        }

        > div {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 0 1rem;

          > .attendant {
            display: flex;
            flex-direction: row;
            padding: 0.5rem;

            .avatar > * {
              border-radius: 50%;
              overflow: hidden;
              border: 0.125rem solid #fff;
              box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.25);
            }

            .text-container {
              display: flex;
              flex-direction: column;
              margin-right: 1rem;
              text-align: right;

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
            {description && <Text p>{description}</Text>}
            {href && (
              <div className='button-container'>
                <Button.Basic
                  className='three-dee actionable rounded'
                  {...{href}}
                >
                  <Text span children='View event page' />
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
