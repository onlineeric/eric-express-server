import './common/env';
import Server from './common/server';
import routes from './routes';

// this commented line is for Azure server
// const port = process.env.PORT || 3000;
const port = parseInt(process.env.PORT ?? '3000');
export default new Server().router(routes).listen(port);
