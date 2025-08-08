sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
        onInit() {
            var oModel = new JSONModel({
                "EID": "lea.adelle.gozar",
                "Enabled": true,
                "Address": {
                    "Street": "Kilometer Street",
                    "City": "Fake City",
                    "ZIP": "1000",
                    "Country": "Any country",
                },
                "SalesAmount": "888888",
                "CurrencyCode": "PHP",
            });

            var oSimpleForm1 = this.getView().byId("form1");
            oSimpleForm1.setModel(oModel);

            var oSimpleFormAdr = this.getView().byId("addForm");
            oSimpleFormAdr.setModel(oModel);

            var oList1 = this.getView().byId("addList");
            oList1.setModel(oModel);

            //sets inputs (EID, Sales Amount) with enabled property = false
            this.getView().byId("eidInp").setProperty("enabled",false);
            this.getView().byId("salesAmtInp").setProperty("enabled",false);

            var oSimpleFormProd = this.getView().byId("prodDetForm");
            var oProdModel = new JSONModel("./model/ProductsModel.json");
            oSimpleFormProd.setModel(oProdModel);
        },
        onSelectItem: function(oEvt) {
            var oSelectItm = oEvt.getSource();
            var oBindContext = oSelectItm.getBindingContext("ProductsModel");
            var sPath = oBindContext.getPath();
            var oProdDetForm = this.byId("prodDetForm");
            oProdDetForm.bindElement({ path: sPath, model: "ProductsModel" });
        }
    });
});