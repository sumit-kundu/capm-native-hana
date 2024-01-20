sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'interactions',
            componentId: 'Interactions_HeaderList',
            contextPath: '/Interactions_Header'
        },
        CustomPageDefinitions
    );
});