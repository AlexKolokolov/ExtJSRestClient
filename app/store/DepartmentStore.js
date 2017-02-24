Ext.define('ExtJSRestClient.store.DepartmentStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ExtJSRestClient.model.DepartmentModel',
        proxy: {
            type: 'rest',
            url: 'http://localhost:8080/SimpleProject/webapi/departments/1'
        },
        listeners: {
            beforeload: function () {
                var name = document.location.search.slice(1);
                this.getProxy().setExtraParam('name', name);
            }
        }
    }
});