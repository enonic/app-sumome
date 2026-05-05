var libPortal = require('/lib/xp/portal');
var libThymeleaf = require('/lib/thymeleaf');
var libUtil = require('/lib/util');

var viewLegacy = resolve('sumome-script.html');
var viewModern = resolve('sumome-script-modern.html');

exports.responseProcessor = function(req, res) {
	var siteConfig = libPortal.getSiteConfig();
	var sumomeId = siteConfig['sumomeId'] || null;
	var sumomeType = siteConfig['embed'] || 'legacy';
	var live = (req.mode == 'live' || req.mode == 'preview'); // Is Enonic in live mode (or full screen preview)?

	if ( sumomeId ) {
		// Prepare parameters to send into Thymeleaf
		var params = {
			sumomeId: sumomeId,
			live: live
		};

		// Render our script tag's html with Thyemleaf
		var view = (sumomeType === 'legacy') ? viewLegacy : viewModern;
		var metadata = libThymeleaf.render(view, params);

		// Add it to the response source code
		if (sumomeType === 'legacy') {
			res.pageContributions.headEnd = libUtil.data.forceArray(res.pageContributions.headEnd);
			res.pageContributions.headEnd.push(metadata);
		} else {
			res.pageContributions.bodyEnd = libUtil.data.forceArray(res.pageContributions.bodyEnd);
			res.pageContributions.bodyEnd.push(metadata);
		}
	}

	return res;
};
