import reazy from 'reazy';
import config from 'reazy-native-config';
import auth from 'reazy-auth';
import routerActions from 'reazy-native-router-actions';
import authJwt from 'reazy-auth-jwt';
// import authGoogle from './authGoogle';
import authFacebook from 'reazy-native-auth-facebook';
import http from 'reazy-http';
import reactNative from './services/react-native';
import mobx from './services/mobx';
import i18n from './services/i18n';

const app = reazy();

app.use(config(), 'config');
app.use(http(), 'http');
app.use(auth({
  loginUrl: app.config.LOGIN_URL,
  logoutUrl: app.config.LOGOUT_URL,
}), 'auth');
app.use(authJwt({
  auth: app.auth,
  loginUrl: app.config.LOGIN_URL,
  logoutUrl: app.config.LOGOUT_URL,
  http: app.http
}), 'authJwt');
app.use(authFacebook({
  auth: app.auth,
}), 'authFacebook');
app.use(mobx(), 'state');
app.use(routerActions(), 'routerActions');
app.use(i18n(), 'i18n');
app.use(reactNative(), 'reactNative');

export default app;
