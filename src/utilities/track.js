import Amplify, {Analytics} from 'aws-amplify';
import {curry} from 'ramda';
import credentials from '../credentials';

// wiped on page refresh / non-pwa redirects
let configured = false;

const track = curry((name, attributes) => {
  if (!configured) {
    credentials && Amplify.configure(credentials);
    configured = true;
    // console.log('configured analytics');
  }

  credentials && Analytics.record({name, attributes});
  // console.log('triggered analytics');
});

export const internalPageView = props =>
  track('internal page view', {href: props.location.href});
export const externalPageView = href => track('external page view', {href});
