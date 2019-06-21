import Slider from 'react-slick';
import {css} from '@emotion/core';
import {map} from 'ramda';
import {mapNodeToProps} from '~/utilities';
import {LOCHMARA_COLOR} from '~/constants';
import Img from 'gatsby-image';
import {ExternalLink, Text} from '~/components';
import {Link} from 'gatsby';

const settings = {
  adaptiveHeight: true,
  autoPlay: true,
  centerMode: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// TODO: dynamically determine height
const containerStyles = css`
  display: block;
  width: 100vw;
  height: 400px;

  .slick-list {
    overflow: hidden !important;
  }

  .slick-slider {
    position: relative;

    .slick-dots {
      position: absolute;
      bottom: 20px;

      > li {
        margin: 0px 2px !important;

        > button {
          :before {
            display: none;
          }

          width: 0.25rem;
          height: 0.25rem;
          border: 1px solid #fff;
          border-radius: 50%;
        }

        &.slick-active {
          > button {
            background-color: #fff;
          }
        }
      }
    }
  }
`;

const slideStyles = css`
  position: relative;
  height: 400px;

  > .gatsby-image-wrapper {
    display: block;
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }

  .center {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);

    h2 {
      color: #fff;
      font-size: 2rem;
      text-align: center;
      line-height: 3rem;
      font-weight: 300;
    }

    .author {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.5rem;

      .gatsby-image-wrapper {
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #fff;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        margin-right: 0.5rem;
      }

      h4 {
        color: #fff;
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }
`;

export default ({items}) => {
  return (
    <div css={containerStyles}>
      <Slider {...settings}>
        {map(node => {
          const {href, banner, title, authors} = mapNodeToProps(node);
          const [firstAuthor] = authors;
          const {name, avatar, to} = firstAuthor;
          return (
            <ExternalLink {...{href}}>
              <div css={slideStyles}>
                {banner && <Img {...banner} />}
                <div className='center'>
                  <Text h2>{title}</Text>
                  <Link {...{to}} className='author'>
                    <Img {...avatar} />
                    <Text h4>{name}</Text>
                  </Link>
                </div>
              </div>
            </ExternalLink>
          );
        }, items)}
      </Slider>
    </div>
  );
};
