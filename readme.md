# gigs-adapter-remoteok

> A [gigs](https://github.com/alebelcor/gigs) adapter for [Remote OK](https://remoteok.io)

[![npm version](https://img.shields.io/npm/v/gigs-adapter-remoteok.svg)](https://npmjs.org/package/gigs-adapter-remoteok)
[![Build Status](https://img.shields.io/travis/alebelcor/gigs-adapter-remoteok/master.svg)](https://travis-ci.org/alebelcor/gigs-adapter-remoteok)
[![Test coverage](https://img.shields.io/coveralls/alebelcor/gigs-adapter-remoteok.svg)](https://coveralls.io/github/alebelcor/gigs-adapter-remoteok)

## Install

Ensure you have [Node.js](https://nodejs.org) version 10+ installed. Then run the following:

```bash
npm install --save gigs
npm install --save gigs-adapter-remoteok
```

## Usage

```js
const gigs = require('gigs');

const adapter = require('gigs-adapter-remoteok');

gigs([adapter])
  .process()
  .then(gigs => {
    console.log(gigs);
    //=> [ {title: 'Senior Node.js Developer'}, ... ]
  });
```

## Related

* [gigs](https://github.com/alebelcor/gigs) - A jobs/careers/openings/positions aggregator

## License

MIT © Alejandro Beltrán

## Disclaimer

This was made for illustrative purposes.
I do not own the content generated by this tool.
All rights belong to their respective owners.
No copyright infringement intended.
