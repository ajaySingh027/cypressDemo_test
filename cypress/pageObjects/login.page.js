/**
 * This class represents the login page elements
 */
 class LoginPage {
    get selectors() {
        return {
            SIGNIN_BUTTON: '#nav-link-accountList-nav-line-1',
            EMAIL_SIGNIN: '#ap_email',
            CONTINUE_BTN: 'input#continue',
            PASSWORD_SIGNIN: '#ap_password',
            LOGIN_SUBMIT_BTN: '#signInSubmit'
        };
    }

    //page strings section
}

const loginPage = new LoginPage();
export { loginPage };