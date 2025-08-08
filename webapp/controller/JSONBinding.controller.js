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
                    "Street": "Kilometer",
                    "City": "Fake City",
                    "ZIP": "0000",
                    "Country": "Any country",
                },
                "Sales Amount": "99999999",
                "CurrencyCode": "PHP",
            });
        }
    });
});