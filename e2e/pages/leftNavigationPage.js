const {browser,ExpectedConditions} = require("protractor");
module.exports = function () {
    'use strict';
    // Login page
    var objRepo = require('../resources/objectRepository.json');
    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    var menu = objLocator.findLocator(objRepo.leftNavigation.menu);
    var valet = objLocator.findLocator(objRepo.leftNavigation.valet);
    var dineIn = objLocator.findLocator(objRepo.leftNavigation.dineIn);
    var payments = objLocator.findLocator(objRepo.leftNavigation.payments);
    var restaurantProfile = objLocator.findLocator(objRepo.leftNavigation.restaurantProfile);
    var subscription = objLocator.findLocator(objRepo.leftNavigation.subscription);

    this.leftNavigationPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };
    this.navigateToMenu = function () {
        buttonActions.click(menu);
        return this;
    };
    this.navigateToValet = function () {
        buttonActions.click(valet);
        return this;
    };
    this.navigateToDineIn = function () {
        buttonActions.click(dineIn);
        return this;
    };
    this.navigateToPayments = function () {
        buttonActions.click(payments);
        return this;
    };
    this.navigateToRestaurantProfile = function () {
        buttonActions.click(restaurantProfile);
        return this;
    };
    this.navigateToSubscription = function () {
        buttonActions.click(subscription);
        return this;
    };
};
