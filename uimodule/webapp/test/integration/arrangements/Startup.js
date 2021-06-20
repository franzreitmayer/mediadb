sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("eu.reitmayer.ui5.mediadb.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "eu.reitmayer.ui5.mediadb",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
