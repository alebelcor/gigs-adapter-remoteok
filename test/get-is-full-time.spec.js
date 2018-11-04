'use strict';

import test from 'ava';

import getIsFullTime from '../lib/get-is-full-time';

test('it should return true', t => {
  t.true(getIsFullTime({tags: ['full-time']}));
  t.true(getIsFullTime({tags: ['full time']}));
  t.true(getIsFullTime({slug: 'foo-full-time-dev'}));
  t.true(getIsFullTime({slug: 'full-time-dev-foo'}));
  t.true(getIsFullTime({position: ' Full-time developer '}));
  t.true(getIsFullTime({position: ' full-time developer '}));
  t.true(getIsFullTime({position: ' Full time developer '}));
  t.true(getIsFullTime({position: ' full time developer '}));
  t.true(getIsFullTime({position: ' Developer Full-time '}));
  t.true(getIsFullTime({position: ' Developer full-time '}));
  t.true(getIsFullTime({position: ' Developer Full time '}));
  t.true(getIsFullTime({position: ' Developer full time '}));
  t.true(getIsFullTime({description: ' Looking for a Full-time developer '}));
  t.true(getIsFullTime({description: ' Looking for a full-time developer '}));
  t.true(getIsFullTime({description: ' Looking for a Full time developer '}));
  t.true(getIsFullTime({description: ' Looking for a full time developer '}));
});

test('it should return false', t => {
  t.false(getIsFullTime({tags: ['part-time']}));
  t.false(getIsFullTime({tags: ['part time']}));
  t.false(getIsFullTime({slug: 'foo-part-time-dev'}));
  t.false(getIsFullTime({slug: 'part-time-dev-foo'}));
  t.false(getIsFullTime({position: ' Part-time developer '}));
  t.false(getIsFullTime({position: ' part-time developer '}));
  t.false(getIsFullTime({position: ' Part time developer '}));
  t.false(getIsFullTime({position: ' part time developer '}));
  t.false(getIsFullTime({position: ' Developer Part-time '}));
  t.false(getIsFullTime({position: ' Developer part-time '}));
  t.false(getIsFullTime({position: ' Developer Part time '}));
  t.false(getIsFullTime({position: ' Developer part time '}));
  t.false(getIsFullTime({description: ' Looking for a Part-time developer '}));
  t.false(getIsFullTime({description: ' Looking for a part-time developer '}));
  t.false(getIsFullTime({description: ' Looking for a Part time developer '}));
  t.false(getIsFullTime({description: ' Looking for a part time developer '}));
});

test('it should return null', t => {
  t.deepEqual(null, getIsFullTime({tags: ['dev']}));
  t.deepEqual(null, getIsFullTime({slug: 'foo-dev'}));
  t.deepEqual(null, getIsFullTime({position: ' Senior Developer '}));
  t.deepEqual(null, getIsFullTime({description: ' Looking for a Developer '}));
});
