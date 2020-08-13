const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('home', '/home', 'home');
routes.add('about', '/about', 'about');
routes.add('profile', '/profile', 'profile');