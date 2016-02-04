var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/xp/thymeleaf')
};

var view = resolve('sumome-script.html');

exports.responseFilter = function(req, res) {
    var siteConfig = libs.portal.getSiteConfig();

    var sumomeId = "";
    if (siteConfig['sumomeId']) {
        sumomeId = siteConfig['sumomeId'];
    }

    var params = {
        id: sumomeId
    };

    var metadata = libs.thymeleaf.render(view, params);

    if (!res.pageContributions.headEnd) {
        res.pageContributions.headEnd = [];
    }
    res.pageContributions.headEnd.push(metadata);

    if (req.params.debug === 'true') {
        res.applyFilters = false; // Skip other filters
    }

    return res;
};
