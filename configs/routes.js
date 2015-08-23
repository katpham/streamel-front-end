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
    upload: {
        path: '/upload',
        method: 'get',
        page: 'upload',
        title: 'Upload',
        handler: require('../components/Upload')
    }
};
