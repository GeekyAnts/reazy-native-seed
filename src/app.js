import reazy from 'reazy';
import config from 'reazy-native-config';
import reactNative from './services/react-native';

const app = reazy();

app.use(config(), 'config');
app.use(reactNative(), 'reactNative');

export default app;
