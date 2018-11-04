'use strict';

import test from 'ava';

import getPublishedAt from '../lib/get-published-at';

test('it should return the date when the job was published', t => {
  t.deepEqual('2018-11-02', getPublishedAt({epoch: '1541188437'}));
});

test('it should return null', t => {
  t.deepEqual(null, getPublishedAt({}));
});
