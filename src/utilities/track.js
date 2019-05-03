import Amplify, {Analytics} from 'aws-amplify';
import {curry} from 'ramda';

const awsmobile =
  process.env.NODE_ENV === 'production' ? require('~/aws-exports') : null;

// wiped on page refresh / non-pwa redirects
let configured = false;

const track = curry((name, attributes) => {
  if (!configured) {
    awsmobile && Amplify.configure(awsmobile);
    configured = true;
  }

  awsmobile && Analytics.record({name, attributes});
});

export const internalPageView = props =>
  track('internal page view', {href: props.location.href});
export const externalPageView = href => track('external page view', {href});
