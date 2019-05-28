#!/usr/bin/env node
require('gluegun')
  .build()
  .brand('contribute')
  .src(__dirname)
  .help()
  .create()
  .run(process.argv);
