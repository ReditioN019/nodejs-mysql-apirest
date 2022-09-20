import { Router } from 'express';
import { createEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee } from '../controllers/employees.controller.js';

const router = Router();

router.get('/empleados', getEmployees)

router.get('/empleados/:id', getEmployee)

router.post('/empleados', createEmployee)

router.patch('/empleados/:id', updateEmployee)

//? PATCH: es para actulizar solo algunos datos de un registro / PUT: es para actualizar todos los datos de un registro

router.delete('/empleados/:id', deleteEmployee)

export default router