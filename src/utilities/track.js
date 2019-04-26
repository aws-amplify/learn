import Amplify, {Analytics} from 'aws-amplify';
import awsmobile from '~/aws-exports';
import {curry} from 'ramda';

// wiped on page refresh / non-pwa redirects
let configured = false;

const track = curry((name, attributes) => {
  if (!configured) {
    Amplify.configure(awsmobile);
    configured = true;
  }

  Analytics.record({name, attributes});
});

export const internalPageView = props =>
  track('internal page view', {href: props.location.href});
export const externalPageView = href => track('internal page view', {href});
