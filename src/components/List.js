import {css} from '@emotion/core'
import {
  useState,
  useCallback,
  createElement,
  useRef,
  useEffect,
  useMemo,
} from 'react'
import {createIsMatch} from '~/utilities'
import Filter from './Filter'
import {mq, ORANGE, LIGHT_GRAY} from '~/constants'
import {IoMdClose, IoIosMore} from 'react-icons/io'
import useSize from '@rehooks/component-size'

const styles = css`
  position: relative;
  display: flex;
  flex-direction: row;

  .menu {
    display: none;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 500;
    padding: 72px 16px 16px 16px;
    background-color: rgba(0, 0, 0, 0.75);

    &.opened {
      display: block;
    }

    ${mq.tablet} {
      display: block;
      position: relative;
      padding: 0px;
    }

    > div {
      ${mq.tablet} {
        padding: 16px 0px 16px 16px;
      }

      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      height: 100%;
      background-color: ${LIGHT_GRAY};

      > div {
        padding: 8px;
        background-color: #fff;
        border-radius: 4px;

        ${mq.tablet} {
          border-width: 0px;
        }
      }
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 1100px;
    margin: 0px auto;
    padding: 8px;

    > div {
      padding: 8px;
    }
  }

  button {
    position: fixed;
    right: 8px;
    bottom: 8px;
    z-index: 1000;
    border-radius: 50%;
    width: 57px;
    height: 57px;
    cursor: pointer;
    background-color: ${ORANGE};
    overflow: none;

    &:active,
    &:focus {
      outline: none;
    }

    ${mq.tablet} {
      display: none;
    }

    > * {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      margin: auto;
      transition: all 0.375s ease;
      color: #fff;
    }
  }

  .hidden {
    opacity: 0;
    transform: scale3d(2, 2, 2);
    transform-origin: center;
  }
`

const List = ({menu, data, shouldDisplay, mapping = e => e, Template}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  // eslint-disable-next-line
  useEffect(() => setMenuOpen(window.innerHeight >= mq.tablet), [])

  const ref = useRef(null)
  const {width} = useSize(ref)
  const size = useMemo(
    () => (width > 1000 ? 'large' : width > 700 ? 'medium' : 'small'),
    [width],
  )

  return (
    <div css={styles} {...{ref}}>
      {menu && (
        <div className={`menu ${menuOpen ? 'opened' : 'closed'}`}>
          <div>
            <div>{menu}</div>
          </div>
        </div>
      )}

      <div className='list'>
        {data.map(e => {
          return (
            (!shouldDisplay || shouldDisplay(e.node)) && (
              <div>
                <Template {...mapping(e)} {...{size}} />
              </div>
            )
          )
        })}
      </div>

      {menu && (
        <button type='button' onClick={() => setMenuOpen(!menuOpen)}>
          {[IoMdClose, IoIosMore].map((Tag, i) => (
            <Tag
              {...(menuOpen === !!i ? {className: 'hidden'} : {})}
              size={23}
            />
          ))}
        </button>
      )}
    </div>
  )
}

const FilterableList = ({filters, data, mapping, Template}) => {
  const [selections, setSelections] = useState(
    Object.assign({}, ...filters.map(key => ({[key]: []}))),
  )

  const shouldDisplay = useCallback(createIsMatch(selections), [selections])
  const filterNode = <Filter {...{filters, data, selections, setSelections}} />

  return (
    <List menu={filterNode} {...{data, shouldDisplay, mapping, Template}} />
  )
}

export default props => {
  const {filters} = props
  return createElement(filters ? FilterableList : List, props)
}
