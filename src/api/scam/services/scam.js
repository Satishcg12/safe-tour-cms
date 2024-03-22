'use strict';

/**
 * scam service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scam.scam');
