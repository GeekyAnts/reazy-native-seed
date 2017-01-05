import RNGoogleSignin, { GoogleSignin } from 'react-native-google-signin';

console.log('RNGoogleSignin', RNGoogleSignin);

export default function(authGoogleConfig, reazyAuth) {
  return function(serviceName) {
    const app = this;


    const login = (credentials = {}) => {
      return new Promise(function(resolve, reject) {
        GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
          GoogleSignin.configure({
            iosClientId: authGoogleConfig.iosClientId, // only for iOS
          })
          .then(() => {
            return GoogleSignin.currentUserAsync()
          })
          .then((user) => {
            console.log('USER', user);
            if(user) {
              resolve(user);
            } else {
              return GoogleSignin.signIn()
            }
          })
          .then((user) => {
            console.log(user);
            resolve(user);
          })
          .catch((err) => {
            console.log('WRONG SIGNIN', err);
          })
          .done();
        })
        .catch((err) => {
          console.log("Play services error", err.code, err.message);
        })

      });
    }

    const logout = () => {

      reazyAuth.setUser(null);
      reazyAuth.setToken(null);
    };

    reazyAuth.loginGoogle = login;
    reazyAuth.logoutGoogle = logout;

    const authGoogleService = {
      login,
      logout,
      RNGoogleSignin
    };

    app.set(serviceName, authGoogleService);

    return authGoogleService;
  }
}
