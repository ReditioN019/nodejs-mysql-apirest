import { pool } from '../db.js';

export const getEmployees = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee');
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getEmployee = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
    
        if(rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        });

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const createEmployee = async(req, res) => {
    try {
        const {name, salary} = req.body;
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]);
        res.send({ 
            id: rows.insertId, 
            name, 
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const updateEmployee =  async(req, res) => {
    const {id} = req.params;
    const {name, salary} = req.body;

    try {
        //IFNUL(valor recibido, sino el que ya existe)
        const [result] = await pool.query('UPDATE employee SET name = IFNUL(?, name), salary = IFNUL(?, salary) WHERE id = ?', [name, salary, id]);

        if(result.affectedRows === 0) return res.status(404).json({
            message: 'Employee not found'
        })

        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

        res.json(rows[0]); //de todas las rows, quiero solo el primer elemento (elemento actualizado)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const deleteEmployee = async(req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);

        if(result.affectedRows <= 0 ) return res.status(404).json({
            message: 'Employee not found'
        })

        res.sendStatus(204);  //204: elimin?? algo satisfactoriamente pero no retorn?? nada
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}