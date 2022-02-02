/**
 * This class represents the landing page elements
 */
 class LandingPage {
    get selectors() {
        return {
            AMAZON_LOGO: '#nav-logo-sprites',
            TOOL_BAR_SEARCH: '#nav-search-bar-form',
            COUNTRY_SELECT: '.icp-nav-link-inner',
            ORDERS_BUTTON: '#nav-orders',
            CART_BUTTON: '#nav-cart'
        };
    }

    //page strings section
}

const landingPage = new LandingPage();
export { landingPage };