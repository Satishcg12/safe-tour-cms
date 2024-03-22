'use strict';

/**
 * local-law service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::local-law.local-law');
