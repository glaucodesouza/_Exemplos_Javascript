    handleWizardCancel: function () {
        this._handleMessageBoxOpen(
        "Quer cancelar?",
        "warning"
        );
    },

    _handleMessageBoxOpen: function (sMessage, sMessageBoxType) {
        MessageBox[sMessageBoxType](sMessage, {
        actions: [MessageBox.Action.YES, MessageBox.Action.NO],
        onClose: function (oAction) {
            if (oAction === MessageBox.Action.YES) {
                this._handleNavigationToStep(0);
                this._wizard.discardProgress(this._wizard.getSteps()[0]);
            }
        }.bind(this),
        });
    },
