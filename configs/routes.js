module.exports = {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/Home')
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: require('../components/About')
    },
    watch: {
        path: '/watch',
        method: 'get',
        page: 'watch',
        title: 'Watch',
        handler: require('../components/Watch'),
        action: require('../actions/getPlayerConfig')
    }
};
