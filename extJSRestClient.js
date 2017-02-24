Ext.application({
    name: 'ExtJSRestClient',
    models: [ 'DepartmentModel' ],
    stores: [ 'DepartmentStore' ],
    views: [ 'DepartmentView' ],
    launch: function () {

        var view = Ext.create('ExtJSRestClient.view.DepartmentView', {});

        Ext.create('ExtJSRestClient.store.DepartmentStore', {
            autoLoad: true,
            listeners: {
                load: function (self, records) {
                    view.setData(records[0].getData());
                }
            }
        });

    }
});

Ext.Loader.setConfig({ disableCaching: false });