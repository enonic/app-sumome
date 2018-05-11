var libs = {
  portal: require('/lib/xp/portal'),
  thymeleaf: require('/lib/xp/thymeleaf')
};

var viewLegacy = resolve('sumome-script.html');
var viewModern = resolve('sumome-script-modern.html');

exports.responseFilter = function(req, res) {
  var siteConfig = libs.portal.getSiteConfig();

  // Get our SumoMe ID from config
  var sumomeId = siteConfig['sumomeId'] || null;
  var sumomeType = siteConfig['embed'] || 'legacy';

  // Is Enonic in live mode?
  var live = (req.mode == 'live');

  if ( sumomeId ) {

    // Preper params to send into Thymeleaf
    var params = {
        sumomeId: sumomeId,
        live: live
    };

	 var view;
	 if (sumomeType === 'legacy') {
		view = viewLegacy;
	 } else {
		view = viewModern;
	 }

    // Render our html with Thyemleaf
    var metadata = libs.thymeleaf.render(view, params);

    // Try to add this to head portion of html code
    try {
		if (sumomeType === 'legacy') {
		  if ( Array.isArray(res.pageContributions.headEnd) ) {
            res.pageContributions.headEnd.push(metadata);
        } else {
            var headEnd = [];
            headEnd.push(res.pageContributions.headEnd);
            headEnd.push(metadata);
            res.pageContributions.headEnd = headEnd;
        }
	  } else {
		  if ( Array.isArray(res.pageContributions.bodyEnd) ) {
            res.pageContributions.bodyEnd.push(metadata);
        } else {
            var bodyEnd = [];
            bodyEnd.push(res.pageContributions.bodyEnd);
            bodyEnd.push(metadata);
            res.pageContributions.bodyEnd = bodyEnd;
        }
	  }
    } catch (e) {
        log.error("Exception: " + e.message);
    }
/*
  if (req.params.debug === 'true') {
      res.applyFilters = false; // Skip other filters
  }
*/
  }

  return res;
};
