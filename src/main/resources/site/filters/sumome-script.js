var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/xp/thymeleaf')
};

var view = resolve('sumome-script.html');

exports.responseFilter = function(req, res) {
    var siteConfig = libs.portal.getSiteConfig();

    // Get our SumoMe ID from config
    var sumomeId = "";
    if (siteConfig['sumomeId']) {
        sumomeId = siteConfig['sumomeId'];
    }

    // Preper params to send into Thymeleaf
    var params = {
        id: sumomeId
    };

    // Render our html with Thyemleaf
    var metadata = libs.thymeleaf.render(view, params);

    // Try to add this to head portion of html code
    try{
        if ( Array.isArray(res.pageContributions.headEnd) ) {
            res.pageContributions.headEnd.push(metadata);
        } else {
            var headEnd = [];
            headEnd.push(res.pageContributions.headEnd);
            headEnd.push(metadata);
            res.pageContributions.headEnd = headEnd;
        }
    } catch (e) {
        log.error("Exception: " + e.message);
    }
/*
    if (req.params.debug === 'true') {
        res.applyFilters = false; // Skip other filters
    }
*/
    return res;
};
