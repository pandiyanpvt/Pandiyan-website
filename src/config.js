/**
 * Application Configuration
 * 
 * Centralized place to manage environment-specific addresses.
 */

const CONFIG = {
    // Port or IP where your backend is running
    // Change this to your production API URL when deploying
    API_BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',

    // You can add more configuration properties here
    APP_NAME: 'Pandiyan Software Solutions',
};

export default CONFIG;
