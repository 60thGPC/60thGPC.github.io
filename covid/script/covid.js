var COVID = COVID || {};

$.ajaxSetup({
    async: false
});

COVID.buildGermanyTable = function(region) {
    var nutsUrl = "https://services6.arcgis.com/swIsfiMN39u9wKrT/ArcGIS/rest/services/NUTS/FeatureServer/2/query?where=NUTS0%3D%27DE%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CTotal_New%2CDaily_New%2CTotal_Deaths%2CDaily_Deaths%2CTotal_Recovered%2CDaily_Recovered%2CInfections_per_100k%2CR0%2CDoubling_Rate&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=tkwwBQdl0RxIXosXL7GyYxAiYOK7g2XITUswp_eYxfS7fUJeuUAeUKbkgD9apVYSOQs7LnDX_w360A33Srmf2XrUD-qCDmM8zqXlWz35APWKJFhattcASgNlzrfQRMLJSw8iqwU1LGCbxveYeYDUGkQdbC3gjyTNeN-e3ndeG0cJEDbpt0PJivzp8Ptjiho2GcYwXRXKk-BvJnZujYyrsgcrhqcxdlqyt7sWfaHCwC4";
    var retData  = [];

    $.getJSON(nutsUrl, function(data) {
        retData = data.features;
    });

    var filteredData = retData;
    switch (region) {
        case "S":
            var name = ["Baden-Württemberg", "Bayern", "Hessen", "Rheinland-Pfalz", "Saarland"];
            var filteredData = $.grep(retData, function(v) {
              return name.indexOf(v.attributes.NAME) > -1;
            });
            break;
        case "E":
            var name = ["Berlin", "Brandenburg", "Mecklenburg-Vorpommern", "Sachsen", "Sachsen-Anhalt", "Thüringen"];
            var filteredData = $.grep(retData, function(v) {
              return name.indexOf(v.attributes.NAME) > -1;
            });
            break;
        case "NW":
            var name = ["Bremen", "Hamburg", "Niedersachsen", "Nordrhein-Westfalen", "Schleswig-Holstein"];
            var filteredData = $.grep(retData, function(v) {
              return name.indexOf(v.attributes.NAME) > -1;
            });
            break;
        default:
            break;
    }

    COVID.buildTable(filteredData);
};

COVID.buildEuropeTable = function(region) {
    var nutsUrl = "https://services6.arcgis.com/swIsfiMN39u9wKrT/ArcGIS/rest/services/NUTS/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=ENG_NAME%2CTotal_New%2CDaily_New%2CTotal_Deaths%2CDaily_Deaths%2CTotal_Recovered%2CDaily_Recovered%2CInfections_per_100k%2CR0%2CDoubling_Rate&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=ENG_NAME&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=";
    
    $.getJSON(nutsUrl, function(data) {
        retData = data.features;
    });

    var filteredData = retData;
    switch (region) {
        case "C":
            var name = ["Belgium", "France", "Germany", "Italy", "Netherlands", "Spain", "United Kingdom"];
            var filteredData = $.grep(retData, function(v) {
              return name.indexOf(v.attributes.ENG_NAME) > -1;
            });
            break;
        case "E":
            var name = ["Bulgaria", "Estonia", "Georgia", "Latvia", "Lithuania", "Poland", "Romania", "Ukraine"];
            var filteredData = $.grep(retData, function(v) {
              return name.indexOf(v.attributes.ENG_NAME) > -1;
            });
            break;
        case "S":
            var name = ["Greece", "Israel", "Turkey"];
            var filteredData = $.grep(retData, function(v) {
              return name.indexOf(v.attributes.ENG_NAME) > -1;
            });
            break;
        case "B":
            var name = ["Bosnia and Herzegovina", "Croatia", "Kosovo", "North Macedonia", "Serbia", "Slovenia"];
            var filteredData = $.grep(retData, function(v) {
                return name.indexOf(v.attributes.ENG_NAME) > -1;
            });
            break;
        default:
            break;
    }

    COVID.buildTable(filteredData);
};

COVID.buildItalyTable = function(region) {
    var nutsUrl = "https://services6.arcgis.com/swIsfiMN39u9wKrT/ArcGIS/rest/services/NUTS/FeatureServer/2/query?where=NUTS0%3D%27IT%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CTotal_New%2CDaily_New%2CTotal_Deaths%2CDaily_Deaths%2CTotal_Recovered%2CDaily_Recovered%2CInfections_per_100k%2CR0%2CDoubling_Rate&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=";
    var retData  = [];

    $.getJSON(nutsUrl, function(data) {
        retData = data.features;
    });

    var filteredData = retData;
    switch (region) {
        case "NW":
            var name = ["Valle dAosta", "Liguria", "Lombardia", "Piemonte"];
            var filteredData = $.grep(retData, function(v) {
              return name.indexOf(v.attributes.NAME) > -1;
            });
            break;
        case "NE":
            var name = ["Emilia Romagna", "Friuli Venezia Giulia", "P.A. Trento", "Veneto"];
            var filteredData = $.grep(retData, function(v) {
              return name.indexOf(v.attributes.NAME) > -1;
            });
            break;
        case "C":
            var name = ["Lazio", "Marche", "Toscana", "Umbria"];
            var filteredData = $.grep(retData, function(v) {
              return name.indexOf(v.attributes.NAME) > -1;
            });
            break;
        case "S":
            var name = ["Abruzzo", "Puglia", "Basilicata", "Calabria", "Campania", "Molise"];
            var filteredData = $.grep(retData, function(v) {
                return name.indexOf(v.attributes.NAME) > -1;
            });
            break;
        case "I":
            var name = ["Sardegna", "Sicilia"];
            var filteredData = $.grep(retData, function(v) {
                return name.indexOf(v.attributes.NAME) > -1;
            });
            break;
        default:
            break;
    }

    COVID.buildTable(filteredData);
};

COVID.buildCompetitorsTable = function() {
    var nutsUrl = "https://services6.arcgis.com/swIsfiMN39u9wKrT/ArcGIS/rest/services/NUTS/FeatureServer/0/query?where=&objectIds=45%2C53%2C57%2C58&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=Date%2CENG_NAME%2CTotal_New%2CDaily_New%2CTotal_Deaths%2CDaily_Deaths%2CTotal_Recovered%2CDaily_Recovered%2CInfections_per_100k%2CR0%2CDoubling_Rate&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=ENG_NAME&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=";
    
    $.getJSON(nutsUrl, function(data) {
        retData = data.features;
    });

    var filteredData = retData;

    COVID.buildTable(filteredData);
};

COVID.buildTable = function(tableData) {
    var $table = $('#nutsTable');

    $(tableData).each(function (index, val) {
        var $tr = $("<tr></tr>");

        var eps = Number.EPSILON || COVID.getEpsilon();
        var infPer100 = (Math.round((val.attributes.Infections_per_100k + eps) * 100) / 100).toFixed(2);
        var R0 = (Math.round((val.attributes.R0 + eps) * 100) / 100).toFixed(2);
        var doublingRate = (Math.round((val.attributes.Doubling_Rate + eps) * 100) / 100).toFixed(2);

        // Use the English Name if it's there...
        var name = val.attributes.ENG_NAME || val.attributes.NAME;

        $tr.append("<td>" + name + "</td>");
        $tr.append("<td class='right'>" + val.attributes.Total_New + "</td>");
        $tr.append("<td class='right'>" + val.attributes.Daily_New + "</td>");
        $tr.append("<td class='right'>" + val.attributes.Total_Deaths + "</td>");
        $tr.append("<td class='right'>" + val.attributes.Daily_Deaths + "</td>");
        $tr.append("<td class='right'>" + val.attributes.Total_Recovered + "</td>");
        $tr.append("<td class='right'>" + val.attributes.Daily_Recovered + "</td>");
        $tr.append("<td class='right'>" + infPer100 + "</td>");
        $tr.append("<td class='right'>" + R0 + "</td>");
        $tr.append("<td class='right'>" + doublingRate + "</td>");
        
        $table.append($tr);
    });

    $table.show();
};

COVID.getEpsilon = function() {
    var e = 1.0;
    while ( ( 1.0 + 0.5 * e ) !== 1.0 )
      e *= 0.5;
    return e;
}