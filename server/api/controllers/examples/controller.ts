import ExamplesService from '../../services/examples.service';
import { Request, Response } from 'express';

export class Controller {
  all(_: Request, res: Response): void {
    ExamplesService.all().then((r) => res.json(r));
  }

  byId(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id']);
    ExamplesService.byId(id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req: Request, res: Response): void {
    ExamplesService.create(req.body.name).then((r) =>
      res.status(201).location(`/api/v1/examples/${r.id}`).json(r)
    );
  }

  delete(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id']);
    ExamplesService.delete(id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  // if exists then update, else create new
  put(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id']);
    const name = req.body?.name;

    // get the record
    ExamplesService.byId(id).then((r) => {
      if (!r) {
        // create the record
        if (!req.body?.id || req.body.id !== id) req.body.id = id; // assign the id if
        ExamplesService.create(req.body.name).then((r) =>
            res.status(201).location(`/api/v1/examples/${r.id}`).json(r)
        );  
      } else {
        // update the record
        r.name = name;
        res.json(r);
      }
    });
  }

  // if exists then update, else create new
  patch(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id']);
    const name = req.body?.name;

    // get the record
    ExamplesService.byId(id).then((r) => {
      if (!r) {
        res.status(404).end();          
      } else {
        // update the record
        r.name = name;
        res.json(r);
      }
    });
  }
}
export default new Controller();
