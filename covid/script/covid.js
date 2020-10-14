var COVID = COVID || {};

COVID.buildBasicTable = function() {
    var nutsUrl = "https://services6.arcgis.com/swIsfiMN39u9wKrT/ArcGIS/rest/services/NUTS/FeatureServer/2/query?where=NUTS0%3D%27DE%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=Date%2CNAME%2CDaily_New%2CTotal_New%2CDaily_Deaths%2CTotal_Deaths%2CDaily_Recovered%2CTotal_Recovered&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=";
    $.getJSON(nutsUrl, function(data) {
        var $table = $('#nutsBasicTable')

        var sortedData = $(data.features).sort(function(a, b) {
            var textA = a.attributes.NAME.toLowerCase();
            var textB = b.attributes.NAME.toLowerCase();

            if (textA < textB) {
                return -1;
            } if (textA > textB) {
                return 1;
            }
            return 0; 
        });

        $(sortedData).each(function (index, val) {
            var $tr = $("<tr></tr>");

            $tr.append("<td>" + val.attributes.NAME + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Daily_New + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Total_New + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Daily_Deaths + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Total_Deaths + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Daily_Recovered + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Total_Recovered + "</td>");
            
            $table.append($tr);
        });

        $table.show();
    });
};

COVID.buildGermanyTable = function() {
    var nutsUrl = "https://services6.arcgis.com/swIsfiMN39u9wKrT/ArcGIS/rest/services/NUTS/FeatureServer/2/query?where=NUTS0%3D%27DE%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=Date%2CNAME%2CDaily_New%2CTotal_New%2CDaily_Deaths%2CTotal_Deaths%2CDaily_Recovered%2CTotal_Recovered%2CInfections_per_100k%2CR0%2CDoubling_Rate&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=";
    $.getJSON(nutsUrl, function(data) {
        var $table = $('#nutsBasicTable')

        var sortedData = $(data.features).sort(function(a, b) {
            var textA = a.attributes.NAME.toLowerCase();
            var textB = b.attributes.NAME.toLowerCase();

            if (textA < textB) {
                return -1;
            } if (textA > textB) {
                return 1;
            }
            return 0; 
        });

        $(sortedData).each(function (index, val) {
            var $tr = $("<tr></tr>");

            var infPer100 = (Math.round((val.attributes.Infections_per_100k + Number.EPSILON) * 100) / 100).toFixed(2);
            var R0 = (Math.round((val.attributes.R0 + Number.EPSILON) * 100) / 100).toFixed(2);
            var doublingRate = (Math.round((val.attributes.Doubling_Rate + Number.EPSILON) * 100) / 100).toFixed(2);

            $tr.append("<td>" + val.attributes.NAME + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Total_New + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Daily_New + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Total_Deaths + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Daily_Deaths + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Total_Recovered + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Daily_Recovered + "</td>");
            $tr.append("<td style='text-align:right'>" + infPer100 + "</td>");
            $tr.append("<td style='text-align:right'>" + R0 + "</td>");
            $tr.append("<td style='text-align:right'>" + doublingRate + "</td>");
            
            $table.append($tr);
        });

        $table.show();
    });
};

COVID.buildItalyTable = function() {
    var nutsUrl = "https://services6.arcgis.com/swIsfiMN39u9wKrT/ArcGIS/rest/services/NUTS/FeatureServer/2/query?where=NUTS0%3D%27IT%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=Date%2CNAME%2CDaily_New%2CTotal_New%2CDaily_Deaths%2CTotal_Deaths%2CDaily_Recovered%2CTotal_Recovered%2CInfections_per_100k%2CR0%2CDoubling_Rate&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=";
    $.getJSON(nutsUrl, function(data) {
        var $table = $('#nutsBasicTable')

        var sortedData = $(data.features).sort(function(a, b) {
            var textA = a.attributes.NAME.toLowerCase();
            var textB = b.attributes.NAME.toLowerCase();

            if (textA < textB) {
                return -1;
            } if (textA > textB) {
                return 1;
            }
            return 0; 
        });

        $(sortedData).each(function (index, val) {
            var $tr = $("<tr></tr>");

            var infPer100 = (Math.round((val.attributes.Infections_per_100k + Number.EPSILON) * 100) / 100).toFixed(2);
            var R0 = (Math.round((val.attributes.R0 + Number.EPSILON) * 100) / 100).toFixed(2);
            var doublingRate = (Math.round((val.attributes.Doubling_Rate + Number.EPSILON) * 100) / 100).toFixed(2);

            $tr.append("<td>" + val.attributes.NAME + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Total_New + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Daily_New + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Total_Deaths + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Daily_Deaths + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Total_Recovered + "</td>");
            $tr.append("<td style='text-align:right'>" + val.attributes.Daily_Recovered + "</td>");
            $tr.append("<td style='text-align:right'>" + infPer100 + "</td>");
            $tr.append("<td style='text-align:right'>" + R0 + "</td>");
            $tr.append("<td style='text-align:right'>" + doublingRate + "</td>");
            
            $table.append($tr);
        });

        $table.show();
    });
};