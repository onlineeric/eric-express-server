import express from 'express';
import controller from './controller';

const router = express.Router();

//////////////////////////////////////////////////////////////////
// Routes
//////////////////////////////////////////////////////////////////
router.route('/:id')
  .get(controller.byId)
  .delete(controller.delete)
  .put(controller.put)
  .patch(controller.patch)
  ;

router.route('/')
  .get(controller.all)
  .post(controller.create)
  ;


export default router;
