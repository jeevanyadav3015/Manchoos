module.exports = function () {
    'use strict';
    // Login page
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    var email = objLocator.findLocator(objRepo.loginPage.email);
    var password = objLocator.findLocator(objRepo.loginPage.password);
    var loginButton = objLocator.findLocator(objRepo.loginPage.loginButton);

    this.loginPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };

    this.enterEmail = function (value) {
        inputBoxActions.type(email, value);
        return this;
    };

    this.enterUserPassword = function (value) {
        inputBoxActions.type(password, value);
        return this;
    };


    this.clickLogin = function () {
        buttonActions.click(loginButton);
        return this;
    };

    this.login = function (email,password) {
        this.enterEmail(email);
        this.enterUserPassword(password);
        this.clickLogin();
    }

};
