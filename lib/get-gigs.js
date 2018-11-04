'use strict';

const gigs = require('gigs');

const getIsFullTime = require('./get-is-full-time');
const getPublishedAt = require('./get-published-at');

const ADAPTER_SOURCE = 'remoteok';
const ADAPTER_SOURCE_URL = 'https://remoteok.io';

module.exports = json => {
  return json.filter((item, index) => index !== 0)
    .map(job => {
      return gigs.create({
        source: ADAPTER_SOURCE,
        source_url: ADAPTER_SOURCE_URL, // eslint-disable-line camelcase
        title: job.position,
        description: job.description,
        url: job.url,
        company_name: job.company, // eslint-disable-line camelcase
        full_time: getIsFullTime(job), // eslint-disable-line camelcase
        remote: true,
        published_at: getPublishedAt(job) // eslint-disable-line camelcase
      });
    });
};
