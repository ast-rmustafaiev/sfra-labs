'use strict'

/**
 * Apply custom 30 min cache as for the Labs porposes.
 * @param req
 * @param res
 * @param next
 */
function applyCustomCache(req, res, next) {
    res.cachePeriod = 30; // eslint-disable-line no-param-reassign
    res.cachePeriodUnit = 'minutes'; // eslint-disable-line no-param-reassign

    next();
}

module.exports = {
    applyCustomCache: applyCustomCache
};
