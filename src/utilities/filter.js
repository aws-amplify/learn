import { useReducer, useCallback, useEffect } from "react";
import {
  map,
  all,
  view,
  lensPath,
  keys,
  reduce,
  is,
  sort,
  assoc,
  comparator,
  lt,
  isEmpty,
  forEach
} from "ramda";
import * as track from "./track";

const error = message => {
  throw new Error(message);
};

export const createFilterContextValue = (...filters) => {
  console.log(filters);
  const [criteria, setCriteria] = useReducer(
    (lastState, newState) => ({
      ...lastState,
      ...newState
    }),
    (() => {
      if (typeof window !== "undefined") {
        const { search } = window.location;
        if (!isEmpty(search)) {
          const withoutQuestionMark = search.substr(1);
          const decoded = decodeURIComponent(withoutQuestionMark);
          try {
            const parsed = JSON.parse(decoded);
            if (is(Object, parsed)) {
              forEach(k => {
                if (parsed[k] && (k === "platforms" || k === "categories"))
                  parsed[k] = parsed[k].filter(Boolean);
              }, keys(parsed));
              return parsed.dates
                ? { ...parsed, dates: map(d => new Date(d), parsed.dates) }
                : parsed;
            }
          } catch (e) {
            track.error(e);
          }
        }
      }
      return {};
    })()
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.history.pushState) {
        const newurl = `${window.location.protocol}//${window.location.host}${
          window.location.pathname
        }?${encodeURIComponent(JSON.stringify(criteria))}`;
        window.history.pushState({ path: newurl }, "", newurl);
      }
    }
  }, [...criteria]);

  const meetsCriteria = useCallback(
    inQuestion => {
      const getField = path => view(lensPath(path), inQuestion);

      return all(filter => {
        const { path, paths, key, meetsCriterion } = filter;

        path &&
          paths &&
          error(
            `Filters cannot be defined with both 'path' and 'paths' props (both in '${key}').`
          );

        return meetsCriterion(
          path
            ? getField(path)
            : paths
            ? map(getField, paths)
            : error(
                `Filters must be defined with either 'path' or 'paths' props (none in '${key}').`
              ),
          criteria[key]
        );
      }, filters);
    },
    [filters]
  );

  return {
    criteria,
    setCriteria,
    meetsCriteria
  };
};

export const getFilterOptions = (path, data) => {
  const lens = lensPath(path);
  const viewPath = view(lens);

  return sort(
    comparator(lt),
    keys(
      reduce(
        (existencesStage, e) => {
          const valueAtPath = viewPath(e);
          return is(Array, valueAtPath)
            ? reduce(
                (a, c) => (c ? assoc(c, true, a) : a),
                existencesStage,
                valueAtPath
              )
            : valueAtPath
            ? assoc(valueAtPath, true, existencesStage)
            : existencesStage;
        },
        {},
        data
      )
    )
  );
};
