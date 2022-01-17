---
title: Asynchronous update of related items with AWS DataStore in a Next.js web app.
description: 'When working with AWS DataStore you have to deal with async/await operations. Updating a list of items when the order of async operations execution is not mandatory is viable to do with `Promise.all()` and `map`. Updating related items, where the promise result from the previous item is needed as input for the next item, can be achieved with the `for await...of` statement. [Try the working demo](https://www.beawareofbefore.com/calculator).'
banner: './banner.jpg'
authorIds:
  - yampier-medina
href: https://www.jpmti2016.com/posts/async-update-related-items
platforms:
  - JavaScript
  - React
  - Next.js
  - Web
categories:
  - DataStore
  - Admin UI
  - API (GraphQL)
---