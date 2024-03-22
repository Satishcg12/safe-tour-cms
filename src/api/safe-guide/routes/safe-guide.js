'use strict';

/**
 * safe-guide router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::safe-guide.safe-guide');
