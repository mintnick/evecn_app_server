import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('alli api')
})

export default router;