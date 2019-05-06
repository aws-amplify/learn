import {css} from '@emotion/core';
import {useMemo} from 'react';
import {values, mapObjIndexed} from 'ramda';

const styles = css`
  display: block;

  .heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-bottom: 0;

    > div {
      display: flex;
      flex-direction: column;
    }
  }

  .items {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    padding: 1rem;
  }

  .no-items {
    display: flex;
    flex: 1;
    text-align: center;
    justify-content: center;
  }

  .footer {
    padding: 1rem;
    padding-top: 0;
  }
`;

// get rid of containerProps!
export default ({
  heading,
  subheading,
  cta,
  columnCountByBreakpoint,
  containerProps = {},
  items,
  noItems,
  footer,
}) => {
  const deps = [heading, subheading, cta];
  const displayHeading = useMemo(() => !!deps.filter(Boolean).length, deps);
  const [className, children] = useMemo(
    () => (items && items.length ? ['items', items] : ['no-items', noItems]),
    [items, noItems],
  );

  const responsiveGridStyles = useMemo(
    () =>
      values(
        mapObjIndexed(
          (columnCount, breakpoint) => css`
            @media (min-width: ${breakpoint}px) {
              grid-template-columns: repeat(${columnCount}, 1fr) !important;
            }
          `,
          columnCountByBreakpoint,
        ),
      ),
    [columnCountByBreakpoint],
  );

  return (
    <div css={styles} {...containerProps}>
      {displayHeading && (
        <div className='heading'>
          <div>
            {heading}
            {subheading}
          </div>
          {cta}
        </div>
      )}
      <div css={responsiveGridStyles} {...{className, children}} />
      {footer && <div className='footer'>{footer}</div>}
    </div>
  );
};
