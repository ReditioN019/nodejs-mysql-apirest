import { Router } from 'express';
import { ping } from '../controllers/index.controller.js';

const router = Router();     

//Comprueba que la conexión a la BD es correcta
router.get('/ping', ping);


export default router