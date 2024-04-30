sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/deloitte/sap/day5extsrv/test/integration/FirstJourney',
		'com/deloitte/sap/day5extsrv/test/integration/pages/SalesTerritoryCollectionList',
		'com/deloitte/sap/day5extsrv/test/integration/pages/SalesTerritoryCollectionObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesTerritoryCollectionList, SalesTerritoryCollectionObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/deloitte/sap/day5extsrv') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesTerritoryCollectionList: SalesTerritoryCollectionList,
					onTheSalesTerritoryCollectionObjectPage: SalesTerritoryCollectionObjectPage
                }
            },
            opaJourney.run
        );
    }
);