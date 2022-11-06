import { Router } from 'express';
const router = Router();

router.get('/test/:id/:name', (req, res, next) => {
  res.send('test' + req.params.id + req.params.name)
})

export default router;