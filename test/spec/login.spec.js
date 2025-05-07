import LoginPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/login.page.js';
import HomePage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/home.page.js';
import { verify } from '/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js';

describe('login screen test cases {TC01 - TC09}',() => {

    it('Verify accessibility of login screen elements {TC01}', async() => {
        await verify(LoginPage.emailField);
        await verify(LoginPage.passwordField);
        await verify(LoginPage.loginButton);
        await LoginPage.restartApp();
    });

    it('Verify error message when password is not provided {TC03}', async() => {
        await LoginPage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await LoginPage.clickLogin();
        await verify(LoginPage.errorMessage);
        await LoginPage.restartApp();
    });

    it('Verify error message when an incorrect password is entered {TC04}', async() => {
        await LoginPage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await LoginPage.enterPassword('123456')
        await LoginPage.clickLogin();
        await verify(LoginPage.WrongPassword);
        await LoginPage.restartApp();
    });

    it('Verify error message when email is not provided {TC05}', async() => {
        await LoginPage.enterPassword('123456')
        await LoginPage.clickLogin();
        await verify(LoginPage.emailError);
        await LoginPage.restartApp();
    });

    it('Verify error messages when both email and password are not provided {TC06}', async() => {
        await LoginPage.enterEmail('')
        await LoginPage.enterPassword('')
        await LoginPage.clickLogin();
        await verify(LoginPage.emailError);
        await LoginPage.restartApp();
    });

    it('Verify error message when an incorrectly formatted email is entered {TC07}', async() => {
        await LoginPage.enterEmail('nag.subbarayudu')
        await LoginPage.enterPassword('123456')
        await LoginPage.clickLogin();
        await verify(LoginPage.invalidEmailError)
        await LoginPage.restartApp();
    });

    it('Verify error message when the email is not registered {TC08}', async() => {
        await LoginPage.enterEmail('vqejvcievciye@gmail.com')
        await LoginPage.enterPassword('123456')
        await LoginPage.clickLogin();
        await verify(LoginPage.emailNotRegisteredError)
        await LoginPage.restartApp();
    });

    it('Verify login performance within an acceptable time limit {TC09}', async() => {
        await LoginPage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await LoginPage.enterPassword('Welcome@123')
        await LoginPage.clickLogin();
        await verify(HomePage.homeScreenAnimation)
        await LoginPage.restartApp();
    });
    // it('Verify  message when the no password for multitenent{TC08}', async() => {
    //     await LoginPage.enterEmail('bheema.Badri@thinkhat.ai')
    //     await LoginPage.selectMultiTenant();
    //     await LoginPage.enterPassword('')
    //     await LoginPage.clickLogin();
    //     await verify(LoginPage.errorMessage)
    // });
    // it('Verify  message for not selecting the dropdrown is multitenent{TC08}', async() => {
    //     await LoginPage.enterEmail('bheema.Badri@thinkhat.ai')
    //     await LoginPage.clickLogin();
    //     await verify(LoginPage.multiTenantError);
    // });
    // it('Verify  message for incorrect Password is multitenent{TC08}', async() => {
    //     await LoginPage.enterEmail('bheema.Badri@thinkhat.ai')
    //     await LoginPage.selectMultiTenant();
    //     await LoginPage.enterPassword('Abcd12343')
    //     await LoginPage.clickLogin();
    //     await verify(LoginPage.WrongPassword);
    // });
    // it('Verify  message when the email is multitenent{TC08}', async() => {
    //     await LoginPage.enterEmail('bheema.Badri@thinkhat.ai')
    //     await LoginPage.selectMultiTenant();
    //     await LoginPage.enterPassword('Abcd1234')
    //     await LoginPage.clickLogin();
    // });

    
})