import {useReducer, useCallback} from 'react';
import {
  fromPairs,
  map,
  all,
  view,
  lensPath,
  keys,
  reduce,
  is,
  assoc,
} from 'ramda';

const error = message => {
  throw new Error(message);
};

export const createFilterContextValue = (...filters) => {
  const [criteria, setCriteria] = useReducer(
    (lastState, newState) => ({
      ...lastState,
      ...newState,
    }),
    fromPairs(map(({key}) => [key, null], filters)),
  );

  const meetsCriteria = useCallback(
    inQuestion => {
      const getField = path => view(lensPath(path), inQuestion);

      return all(filter => {
        const {path, paths, key, meetsCriterion} = filter;

        path &&
          paths &&
          error(
            `Filters cannot be defined with both 'path' and 'paths' props (both in '${key}').`,
          );

        return meetsCriterion(
          path
            ? getField(path)
            : paths
            ? map(getField, paths)
            : error(
                `Filters must be defined with either 'path' or 'paths' props (none in '${key}').`,
              ),
          criteria[key],
        );
      }, filters);
    },
    [filters],
  );

  return {
    criteria,
    setCriteria,
    meetsCriteria,
  };
};

export const getFilterOptions = (path, data) => {
  const lens = lensPath(path);
  const viewPath = view(lens);

  return keys(
    reduce(
      (existencesStage, e) => {
        const valueAtPath = viewPath(e);
        return is(Array, valueAtPath)
          ? reduce((a, c) => assoc(c, true, a), existencesStage, valueAtPath)
          : assoc(valueAtPath, true, existencesStage);
      },
      {},
      data,
    ),
  );
};
