import {css} from '@emotion/core';
import {useMemo} from 'react';
import {values, mapObjIndexed} from 'ramda';

const styles = css`
  display: block;

  heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    padding-bottom: 0px;

    > div {
      display: flex;
      flex-direction: column;
    }
  }

  .items {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
    padding: 16px;
  }

  .no-items {
    display: flex;
    flex: 1;
    text-align: center;
    justify-content: center;
  }

  .footer {
    padding: 16px;
    padding-top: 0px;
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
  const [className, children] =
    items && items.length ? ['items', items] : ['no-items', noItems];

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
        <heading>
          <div>
            {heading}
            {subheading}
          </div>
          {cta}
        </heading>
      )}
      <div css={responsiveGridStyles} {...{className, children}} />
      {footer && <div className='footer'>{footer}</div>}
    </div>
  );
};
