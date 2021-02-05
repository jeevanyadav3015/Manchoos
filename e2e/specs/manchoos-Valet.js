describe('Login Logout Test cases execution ', function () {

    'use strict';

    var testData = require('../resources/testData.json');
    var loginPage =  new pages.loginPage();
    var dashBoardPage  = new pages.dashBoardPage();

    it('Login-Logout', function () {
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord );
        dashBoardPage.logout();
    });
});
