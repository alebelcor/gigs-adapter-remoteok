'use strict';

import test from 'ava';

import getGigs from '../lib/get-gigs';

test('it should an array of results, filtering the first (legalese) item', t => {
  const json = [{legal: 'foo'}, {}, {}];

  t.true(Array.isArray(getGigs(json)));
  t.deepEqual(2, getGigs(json).length);
});

test('it should return an empty array', t => {
  const json = [];

  t.true(Array.isArray(getGigs(json)));
  t.deepEqual(0, getGigs(json).length);
});
