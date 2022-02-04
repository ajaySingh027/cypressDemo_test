/**
 * This class represents the landing page elements
 */
 class LandingPage {
    get selectors() {
        return {
            AMAZON_LOGO: '#nav-logo-sprites',
            TOOL_BAR_SEARCH: '#nav-search-bar-form',
            COUNTRY_SELECT: '.icp-nav-link-inner',
            LOGIN_USER: '#nav-link-accountList-nav-line-1',
            ORDERS_BUTTON: '#nav-orders',
            CART_BUTTON: '#nav-cart',
            GRID_CARD_LAYOUT: '#gw-card-layout',   // grid layout on main page
            CARD_TYPE: '.fluid-fat-image-link'   // each card in grid layout
        };
    }

    //page strings section
    get strings() {
        return {
            LOGGED_USER: 'Hello, Test'
        };
    }
}

const landingPage = new LandingPage();
export { landingPage };