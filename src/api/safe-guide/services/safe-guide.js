'use strict';

/**
 * safe-guide service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::safe-guide.safe-guide');
