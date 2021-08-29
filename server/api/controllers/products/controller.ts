import { Request, Response } from 'express';
import { Connection } from 'tedious';
import { getConfig } from '../../../../utils/sqlServerUtil';
import getProducts from './getProducts';

export class Controller {
  all(_: Request, res: Response): void {

    const connection = new Connection(getConfig());

    connection.on('connect', (err) => {
      if (err) {
        console.log('Connection Failed');
        throw err;
      }
      getProducts(connection, _, res);
    });

    connection.connect();
  }

  //   byId(req: Request, res: Response): void {
  //     const id = Number.parseInt(req.params['id']);
  //     ProductsService.byId(id).then((r) => {
  //       if (r) res.json(r);
  //       else res.status(404).end();
  //     });
  //   }

  //   create(req: Request, res: Response): void {
  //     ProductsService.create(req.body.name).then((r) =>
  //       res.status(201).location(`/api/v1/examples/${r.id}`).json(r)
  //     );
  //   }

  //   delete(req: Request, res: Response): void {
  //     const id = Number.parseInt(req.params['id']);
  //     ProductsService.delete(id).then((r) => {
  //       if (r) res.json(r);
  //       else res.status(404).end();
  //     });
  //   }

  //   // if exists then update, else create new
  //   put(req: Request, res: Response): void {
  //     const id = Number.parseInt(req.params['id']);
  //     const name = req.body?.name;

  //     // get the record
  //     ProductsService.byId(id).then((r) => {
  //       if (!r) {
  //         // create the record
  //         if (!req.body?.id || req.body.id !== id) req.body.id = id; // assign the id if
  //         ProductsService.create(req.body.name).then((r) =>
  //             res.status(201).location(`/api/v1/examples/${r.id}`).json(r)
  //         );
  //       } else {
  //         // update the record
  //         r.name = name;
  //         res.json(r);
  //       }
  //     });
  //   }

  //   // if exists then update, else create new
  //   patch(req: Request, res: Response): void {
  //     const id = Number.parseInt(req.params['id']);
  //     const name = req.body?.name;

  //     // get the record
  //     ProductsService.byId(id).then((r) => {
  //       if (!r) {
  //         res.status(404).end();
  //       } else {
  //         // update the record
  //         r.name = name;
  //         res.json(r);
  //       }
  //     });
  //   }
}
export default new Controller();
