'use strict';

module.exports = json => {
  const isFullTimeRegex = /full(-| )?time/i;

  if (json.tags) {
    const hasFullTimeTag = json.tags.some(tag => isFullTimeRegex.test(tag));

    if (hasFullTimeTag) {
      return true;
    }
  }

  if (json.slug) {
    const isFullTimeInSlug = isFullTimeRegex.test(json.slug);

    if (isFullTimeInSlug) {
      return true;
    }
  }

  if (json.position) {
    const isFullTimeInPosition = isFullTimeRegex.test(json.position);

    if (isFullTimeInPosition) {
      return true;
    }
  }

  if (json.description) {
    const isFullTimeInDescription = isFullTimeRegex.test(json.description);

    if (isFullTimeInDescription) {
      return true;
    }
  }

  const isPartTimeRegex = /part(-| )?time/i;

  if (json.tags) {
    const hasPartTimeTag = json.tags.some(tag => isPartTimeRegex.test(tag));

    if (hasPartTimeTag) {
      return false;
    }
  }

  if (json.slug) {
    const isPartTimeInSlug = isPartTimeRegex.test(json.slug);

    if (isPartTimeInSlug) {
      return false;
    }
  }

  if (json.position) {
    const isPartTimeInPosition = isPartTimeRegex.test(json.position);

    if (isPartTimeInPosition) {
      return false;
    }
  }

  if (json.description) {
    const isPartTimeInDescription = isPartTimeRegex.test(json.description);

    if (isPartTimeInDescription) {
      return false;
    }
  }

  return null;
};
