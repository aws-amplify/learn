import Amplify, {Analytics} from 'aws-amplify';
import {curry} from 'ramda';
import credentials from '../credentials';

// wiped on page refresh / non-pwa redirects
let configured = false;

const track = curry((name, attributes) => {
  if (!configured) {
    credentials && Amplify.configure(credentials);
    configured = true;
  }

  credentials && Analytics.record({name, attributes});
});

export const internalPageView = ({location: {href}}) =>
  track('internal page view', {href});
export const externalPageView = href => track('external page view', {href});
