import { Application } from 'express';
import examplesRouter from './api/controllers/examples/router';
import testRouter from './api/controllers/test/router';
import productsRouter from './api/controllers/products/router';

export default function routes(app: Application): void {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/test', testRouter);
  app.use('/api/v1/products', productsRouter);
}
