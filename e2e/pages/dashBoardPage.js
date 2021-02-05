const {browser,ExpectedConditions} = require("protractor");
module.exports = function () {
    'use strict';
    // Login page
    var objRepo = require('../resources/objectRepository.json');
    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var expectedConditions = ExpectedConditions;

    var userIcon = objLocator.findLocator(objRepo.dashBoardPage.userIcon);
    var searchIcon = objLocator.findLocator(objRepo.dashBoardPage.searchIcon);
    var alertIcon = objLocator.findLocator(objRepo.dashBoardPage.alertIcon);
    var profile = objLocator.findLocator(objRepo.dashBoardPage.profile);
    var logOut =  objLocator.findLocator(objRepo.dashBoardPage.logout);


    this.dashBoardPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };

    this.logout = function () {
        buttonActions.click(userIcon);
        waitActions.waitForElementIsDisplayed(logOut);
        buttonActions.click(logOut);
        return this;
    };

    this.handleAlert = function () {
        let blnRes = expectedConditions.alertIsPresent();
        if(blnRes === true) {
            browser.switchTo().alert().then(alert => {
                return alert.accept();
            });
        }else {
            console.log("No Alert Found");
        }
    }
};
