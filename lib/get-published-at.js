'use strict';

const dayjs = require('dayjs');

module.exports = json => {
  let publishedAt = null;

  if (json.epoch) {
    publishedAt = dayjs(parseInt(json.epoch, 10) * 1000).format('YYYY-MM-DD');
  }

  return publishedAt;
};
